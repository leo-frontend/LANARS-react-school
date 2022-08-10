import { BackEndAbstract, Tablename } from './BackEndAbstarct';
import { Route } from './BackEndAbstarct';

export class Album extends BackEndAbstract {
  constructor(route: Route, tableName: Tablename) {
    super(route, tableName);
  }
}
