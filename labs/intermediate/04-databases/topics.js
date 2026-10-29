import { exercise01 } from "./01_sql_and_pg_lab.js";
import { exercise02 } from "./02_migrations_lab.js";
import { exercise03 } from "./03_transactions_lab.js";
import { exercise04 } from "./04_repositories_lab.js";

export const labTitle = "Databases";

export const topics = [
  { name: "sql-and-pg", run: exercise01 },
  { name: "migrations", run: exercise02 },
  { name: "transactions", run: exercise03 },
  { name: "repositories", run: exercise04 },
];
