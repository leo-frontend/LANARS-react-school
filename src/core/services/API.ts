/* eslint no-console: 0 */  // --> OFF
import {BackEndAbstract, Route} from './back-end/api-classes/BackEndAbstarct';
import { Album } from './back-end/api-classes';

export class API {
  private routes: {[key in Route]: BackEndAbstract} = {
    '/api/albums': new Album('/api/albums', 'albums'),
  };

  async put(route: Route, data: any) {
    return await this.routes[route].create(data);
  }

  async get(route: Route, id?: number) {
    return await this.routes[route].read(id);
  }

  async patch(route: Route, data: any) {
    return await this.routes[route].update(data);
  }
  //
  // async delete(route: Route, id: number) {
  //   return await this.routes[route].read(id);
  // }
}

export default new API();
