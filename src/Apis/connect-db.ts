// pages/api/connect-db.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(res: NextApiResponse) {
    if (typeof window === 'undefined') {
        const { connect } = await import('../../src/dbconfig/dbconfig.node');
        await connect();
    }
    res.status(200).json({ message: 'Database connected successfully' });
}
