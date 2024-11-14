import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url:'postgresql://neondb_owner:CPUsoH4e3YEK@ep-square-hat-a5fod9ba.us-east-2.aws.neon.tech/neondb?sslmode=require'
  }
});
