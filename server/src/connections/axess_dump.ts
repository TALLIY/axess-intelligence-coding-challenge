import mysql from 'mysql2';
import config from '../config/config';


/** connect to mysql */

const connection = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
  })
  
export default connection;