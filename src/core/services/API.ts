/* eslint no-console: 0 */  // --> OFF
import {BackEndAbstract, Route} from './back-end/api-classes/BackEndAbstarct';
import { Album } from './back-end/api-classes';
import * as query from 'query-string';

export class API {
  private routes: {[key in Route]: BackEndAbstract} = {
    '/api/albums': new Album('/api/albums', 'albums'),
  };

  async put(path: string, data: any) {
    const [route, query] = this.getParams(path);
    return await this.routes[route].create(data, query);
  }

  async get(path: string, id?: number) {
    const [route, query] = this.getParams(path);
    return await this.routes[route].read(id, query);
  }

  async patch(path: string, data: any) {
    const [route, query] = this.getParams(path);
    return await this.routes[route].update(data, query);
  }

  async delete(path: string, ids: number | number[]) {
    const [route, query] = this.getParams(path);
    return await this.routes[route].delete(ids, query);
  }

  private getParams(route: string): [Route, Object] {
    const split = route.split('?');
    return [split[0] as Route, query.parse(split[1])];
  }
}

export default new API();
