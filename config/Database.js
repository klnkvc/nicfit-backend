import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: "buknqdmsueylkwqwuone-mysql.services.clever-cloud.com",
  user: "us0dy77rie8hlvgu",
  password: "8yY49LvERMunYDOEbvsL",
  database: "buknqdmsueylkwqwuone",
});

export default pool;

// const pool = mysql.createPool({
//   host:
//     process.env.DB_HOST ||
//     "buknqdmsueylkwqwuone-mysql.services.clever-cloud.com",
//   user: process.env.DB_USERNAME || "us0dy77rie8hlvgu",
//   password: process.env.DB_PASSWORD || "8yY49LvERMunYDOEbvsL",
//   database: process.env.DB_DBNAME || "buknqdmsueylkwqwuone",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });
