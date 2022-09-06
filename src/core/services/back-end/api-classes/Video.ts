import { BackEndAbstract } from './BackEndAbstarct';

export class Video extends BackEndAbstract {
  route = '/api/videos' as const;
  tableName = 'videos' as const;
  constructor() {
    super();
  }
}
