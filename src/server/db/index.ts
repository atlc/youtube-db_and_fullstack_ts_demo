import * as mysql from 'mysql';
import { sqlConfig } from '../config';
import { MySQL_Response } from '../models';

const pool = mysql.createPool(sqlConfig);

export const Query = <T = MySQL_Response>(queryString: string, values?: any[]) => {
    const formattedSQL = mysql.format(queryString, values);

    console.log({ formattedSQL });

    return new Promise<T>((resolve, reject) => {
        pool.query(formattedSQL, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}