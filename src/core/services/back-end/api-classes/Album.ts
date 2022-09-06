import { BackEndAbstract } from './BackEndAbstarct';

export class Album extends BackEndAbstract {
  route = '/api/albums' as const;
  tableName = 'albums' as const;
  constructor() {
    super();
  }
}
