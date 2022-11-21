/* eslint-disable */
import { ServerError } from '.';
import { BackEndAbstract } from './BackEndAbstract';

export class Photo extends BackEndAbstract {
  readonly requiredFields = ['image'];
  readonly route = '/api/photos';
  readonly tableName = 'photos';

  constructor() {
    super();
  }

  validate(data: any, checkRequired = true) {
    // const allFields = Object.keys(PhotoEntity);

    // if (checkRequired) {
    //   for (const key of this.requiredFields) {
    //     if (!data[key]) {
    //       throw new ServerError(400, `Property "${key}" is required`);
    //     }
    //   }
    // }

    // for (const key of Object.keys(data)) {
    //   if (!allFields.includes(key)) {
    //     throw new ServerError(
    //       400,
    //       `Unknown property "${key}". You can only use one of the following: "${this.requiredFields.join('", "')}"`,
    //     );
    //   }
    // }
  }

  entity(data: PhotoEntity): PhotoEntity {
    return new PhotoEntity(data);
  }

  create<T extends object>(data: T): Promise<T> {
    console.log(data);
    // @ts-ignore

    return new Promise(() => {

    });
  }
}

class PhotoEntity {
  title = '';
  image: string;
  description = '';
  photos = []; 
  date: number;
  size: number;

  constructor(data: PhotoEntity) {
    this.date = data.date;
    this.title = data.title;
    this.description = data.description;
    this.image = data.image;
    this.size = data.size;
  }
}
