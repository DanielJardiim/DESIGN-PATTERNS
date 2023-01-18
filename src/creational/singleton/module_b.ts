import { MyDatabaseClassic } from './db/my-database-classic';
import './module_a';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: 'Daniel', password: 6284 });
myDatabaseClassic.show();
