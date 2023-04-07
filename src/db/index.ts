import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';


export const usersTable = sqliteTable('users', {
	id:       integer('id').primaryKey(),
	fullName: text('full_name'),
});

const sqlite = new Database('sqlite.db');
export const db = drizzle(sqlite);
migrate(db, { migrationsFolder: './migrations' });
