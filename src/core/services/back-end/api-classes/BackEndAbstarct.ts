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

  async create<T>(data: T, query?: object): Promise<T> {
    if (query) {}
    return Storage.putValue(this.tableName, data);
  }

  async read<T, I extends number | undefined>(id?: I, query?: object): Promise<I extends number ? T : T[]> {
    if (query) {}

    if (id) {
      return Storage.getValue(this.tableName, id);
    }

    return Storage.getAllValue(this.tableName);
  }

  async update<T>(data: T, query?: object): Promise<T> {
    if (query) {}

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
