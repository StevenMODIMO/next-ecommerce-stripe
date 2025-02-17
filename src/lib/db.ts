import { Pool } from "pg";

const pool = new Pool({
  user: process.env.PG_USER as string,
  host: process.env.PG_HOST as string,
  database: process.env.PG_DATABASE as string,
  password: process.env.PG_PASSWORD as string,
  port: process.env.PG_PORT ? parseInt(process.env.PG_PORT, 10) : 5432,
});

export const query = async (text: string, params?: any[]) => {
    const res = await pool.query(text, params);
    return res;
  };