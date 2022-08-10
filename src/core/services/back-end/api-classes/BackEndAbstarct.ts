export type Route = '/api/albums';

export abstract class BackEndAbstract {
  route: Route;

  constructor(route: Route) {
    this.route = route;
  }

  abstract create<T>(data: T): Promise<T>;
  abstract read<T, I extends number | undefined>(id?: I): I extends number ? Promise<T> : Promise<T[]>;
  abstract update<T>(): Promise<T>;
  abstract delete(id: number | number[]): Promise<any>;
}
