import express from 'express';
import query from '../controllers/queries';
import cors from 'cors'

/**
 define endpoints
 */

const router = express();

const get = router.get('/company/:name', cors(), query);


export default get;