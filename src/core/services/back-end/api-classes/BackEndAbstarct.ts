import Storage from '../Storage';

export type Route = '/api/albums';
export type Tablename = 'albums';

export abstract class BackEndAbstract {
  route: Route;
  private tableName: Tablename;

  constructor(route: Route, tableName: Tablename) {
    this.route = route;
    this.tableName = tableName;
  }

  async create<T>(data: T): Promise<T> {
    return Storage.putValue(this.tableName, data);
  }

  async read<T, I extends number | undefined>(id?: I): Promise<I extends number ? T : T[]> {
    if (id) {
      return Storage.getValue('albums', id);
    }

    return Storage.getAllValue('albums');
  }

  async update<T>(data: T): Promise<T> {
    return Storage.putValue('albums', data);
  }

  async delete(ids: number | number[]): Promise<any> {
    if (typeof ids === 'number') {
      return Storage.deleteValue('albums', ids);
    }
    return Promise.all(
      ids.map((id) => {
        return Storage.deleteValue('albums', id);
      }),
    );
  }
}
