/* eslint no-console: 0 */  // --> OFF
import {BackEndAbstract, Route} from './back-end/api-classes/BackEndAbstarct';
import { Album } from './back-end/api-classes';
import * as queryString from 'query-string';
import { ServerError } from './back-end/api-classes/ServerError';
import { Query } from './back-end/api-classes/Query';

export class API {
  private routes: {[key in Route]: BackEndAbstract} = {
    '/api/albums': new Album('/api/albums', 'albums'),
  };

  async put(path: string, data: any) {
    const [route] = this.getParams(path);
    try {
      await this.notFound(route);
    } catch (error) {
      return this.getParams(route);
    }

    return await this.routes[route]?.create(data);
  }

  async get(path: string, id?: number) {
    const [route, query] = this.getParams(path);

    try {
      await this.notFound(route);
    } catch (error) {
      return this.notFound(route);
    }

    console.log(query);
    return await this.routes[route]?.read(id, new Query(query));
  }

  async patch(path: string, data: any) {
    const [route] = this.getParams(path);
    try {
      await this.notFound(route);
    } catch (error) {
      return this.notFound(route);
    }
    return await this.routes[route]?.update(data);
  }

  async delete(path: string, ids: number | number[]) {
    const [route, query] = this.getParams(path);
    try {
      await this.notFound(route);
    } catch (error) {
      return this.notFound(route);
    }
    return await this.routes[route]?.delete(ids, new Query(query));
  }

  private getParams(route: string): [Route, Object] {
    const split = route.split('?');
    return [split[0] as Route, queryString.parse(split[1], {arrayFormat: 'comma'})];
  }

  private notFound(route: Route): Promise<boolean> {
    return new Promise(((resolve, reject) => {
      if (!this.routes[route]) {
        reject(new ServerError(404, 'Not found'));
        throw new Error('Not found');
      }
      resolve(true);
    }));
  }
}

export default new API();
