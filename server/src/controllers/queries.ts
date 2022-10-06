import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import mysql2 from 'mysql2';
import connection from '../server';

/**
 define query
 */
const query = (req: Request, response: Response, next: NextFunction) => {
    // res.send('hi');
    logging.info('Query route called');
    const GET_QUERY = `SELECT company.id, company.name, message.snippet, message.subject, message.created_at, 
    message.image_x720p_png, upload.date, upload.file_name
    FROM company
        JOIN message ON company.id=message.company_id
        JOIN upload ON upload.company=company.name`;
    connection.query(GET_QUERY, (err, res) => {
        response.send(res)
    })
};

export default query;