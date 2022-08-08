export class Storage {

  db: any;

  constructor() {
    const DBOpenRequest = window.indexedDB.open('LANARS-react-school', 1);

    DBOpenRequest.onerror = () => {
      console.error('Error loading database.');
    };

    DBOpenRequest.onsuccess = () => {
      console.info('Database initialized.');
      this.db = DBOpenRequest.result;
    };
  }

};

export default new Storage();
