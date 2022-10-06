import http from 'http';
import express from 'express';
import logging from './config/logging';
import config from './config/config';
import mysql from 'mysql2';
import cors from 'cors'
import connection from './connections/axess_dump';
import get from './routes/touchpoints';




const router = express();

router.use(cors()); 

/** server handling */

const httpServer = http.createServer(router);

connection.connect();


  /** Log the request */
router.use((req, res, next) => {
    logging.info(`METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(`METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });

    next();
});

export default connection;

/** Parse the body of the request */
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

/** Rules of the API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

/** Routes */
router.use(get);

router.get('/', (req, res) => {
    // DO REQUEST TO DATABASE
    // example: result = ....
    res.send('hi')
})

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

/** Listen */
httpServer.listen(config.server.port, () => logging.info(`Server is running ${config.server.host}:${config.server.port}`));

  