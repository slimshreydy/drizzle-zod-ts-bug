import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { testTable } from "./schema";

export const zSelectTestTableSchema = createSelectSchema(testTable);
export const zInsertTestTableSchema = createInsertSchema(testTable);
