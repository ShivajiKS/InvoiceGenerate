// import { migrate } from "drizzle-orm/postgres-js";
// import { drizzle } from "drizzle-orm/postgres-js";
// require("dotenv").config({ path: ".env" });

// const postgres = require("postgres");

// const pushMigrations = async () => {
//   const migrationClient = postgres(process.env.DB_CONNECTION_STRING, {
//     max: 1,
//   });
//   const migrationDb = drizzle(migrationClient);

//   await migrate(migrationDb, {
//     migrationsFolder: "./src/db/migrations/drizzle",
//   });

//   await migrationClient.end();
// };

// pushMigrations();
