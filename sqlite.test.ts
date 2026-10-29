import Database from "better-sqlite3";
import { expect, test } from "vitest";

test("opens and closes an in-memory database", () => {
  const db = new Database(":memory:");
  expect(db.open).toBe(true);
  db.close();
  expect(db.open).toBe(false);
});
