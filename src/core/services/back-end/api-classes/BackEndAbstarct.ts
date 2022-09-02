import { EntityAbstract } from 'shared/entities/EntityAbstract';
import Storage from '../Storage';
import { Query } from './Query';

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

  async read<T, I extends number | undefined>(id?: I, query?: Query): Promise<I extends number ? T : T[]> {
    if (id) {
      return Storage.getValue(this.tableName, id);
    }

    if (query?.ids) {
      const values = (await Storage.getAllValue(this.tableName))?.filter((value: EntityAbstract) => query?.ids?.includes(value.id));
      // eslint-disable-next-line no-console
      console.log(values, query);
    }

    return Storage.getAllValue(this.tableName);
  }

  async update<T>(data: T): Promise<T> {
    return Storage.putValue(this.tableName, data);
  }

  async delete(ids: number | number[], query?: object): Promise<any> {
    if (query) {}

    if (typeof ids === 'number') {
      return Storage.deleteValue(this.tableName, ids);
    }
    return Promise.all(
      ids.map((id) => {
        return Storage.deleteValue(this.tableName, id);
      }),
    );
  }
}
