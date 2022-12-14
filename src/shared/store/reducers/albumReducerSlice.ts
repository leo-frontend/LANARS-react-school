import { IAlbums } from '../../interfaces/albums';
import API from '../../../core/services/API';
import { createSlice, createAsyncThunk, AnyAction, PayloadAction } from '@reduxjs/toolkit';


export const getAlbum = createAsyncThunk(
    'albums/getAlbum',
    async (ids: number[] = [], { rejectWithValue }) => {
        try {
            const response = await API.get(`/api/albums${ids.length > 0 ? ('?ids=' + ids.join('')) : ''}`) as IAlbums[] | IAlbums;
            return response;
        } catch (error: any) {
            return rejectWithValue(error);
        }
    }
);

export const uploadAlbum = createAsyncThunk(
    'albums/uploadAlbum',
    async (album: Omit<IAlbums, 'id'>, { rejectWithValue }) => {
        try {
            const response = await API.post('/api/albums', album) as IAlbums;
            return response;
        } catch (error: any) {
            return rejectWithValue(error);
        }
    }
);

export const updateAlbum = createAsyncThunk(
    'albums/updateAlbum',
    async (album: IAlbums, { rejectWithValue }) => {
        try {
            const response = await API.patch('/api/albums', album) as IAlbums;
            return response;
        } catch (error: any) {
            return rejectWithValue(error);
        }
    }
);

export const deleteAlbum = createAsyncThunk(
    'albums/deleteAlbum',
    async (ids: number[] | number, { rejectWithValue }) => {
        try {
            await API.delete(`/api/albums?ids=${ids}`) as IAlbums[] | IAlbums;
            return { ids };
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

type InitialState = {
    albums: IAlbums[];
    isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
};

const initialState: InitialState = {
    albums: [],
    isLoading: 'idle',
    error: null,
};

export const albumSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAlbum.fulfilled, (state, { payload }) => {
                state.albums = payload as IAlbums[];
            })
            .addCase(uploadAlbum.fulfilled, (state, { payload }) => {
                state.albums.push(payload);
            })
            .addCase(updateAlbum.fulfilled, (state, { payload }) => {
                const newAlbum = payload;
                const albumIndex = state.albums.findIndex((album) => album.id === newAlbum.id);
                if (albumIndex >= 0) {
                    state.albums[albumIndex] = newAlbum;
                }
            })
            .addCase(deleteAlbum.fulfilled, (state, { payload }) => {
                state.albums = state.albums.filter(album => album.id !== payload.ids);
            })
            .addMatcher(isPending, (state) => {
                state.isLoading = 'pending';
                state.error = null;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.isLoading = 'failed';
                state.error = action.payload;
            })
            .addMatcher(isFulfilled, (state) => {
                state.isLoading = 'succeeded';
                state.error = null;
            });
    },
});

function isPending(action: AnyAction) {
    return action.type.endsWith('/pending');
}

function isFulfilled(action: AnyAction) {
    return action.type.endsWith('/fulfilled');
}

function isError(action: AnyAction) {
    return action.type.endsWith('/rejected');
}

export default albumSlice.reducer;
