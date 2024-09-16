import mysql from 'mysql2/promise';
import { dbConfig } from '../Constant';

export async function POST(request) {
    try {
        const data = await request.json();

      
        const { Parentid } = data;

        // if (!registrationNumber || !password) {
        //     return new Response(
        //         JSON.stringify({ error: 'Missing registration number or password' }),
        //         { status: 400 }
        //     );
        // }

    
        const connection = await mysql.createConnection(dbConfig);

       
        const [rows] = await connection.execute(
            'CALL GetTreeData(?)',
            [Parentid]
        );
       
        await connection.end();
  return new Response(
                JSON.stringify({ message: 'Login successful', rows }),
                { status: 200 }
            );
       
    } catch (error) {
        console.error('Error:', error);
        return new Response(
            JSON.stringify({ error: 'An error occurred' }),
            { status: 500 }
        );
    }
}