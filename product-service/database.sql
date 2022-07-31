CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS products (
	id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	title text NOT NULL,
	description text,
	price integer
);

CREATE TABLE IF NOT EXISTS stocks (
	product_id uuid,
	count int,
	FOREIGN KEY ("product_id") REFERENCES "products" ("id")
);

INSERT INTO products (title, description, price) VALUES
	('Siemens', ' Siemens Smart Washing Machine.', 15080),
	('Beko', 'Beko Eco Smart Washing Machine', 7225),
	('KeySmart', 'KeySmart Eco Washing Machine.', 4000),
	('Arçelik','Arçelik washing machine.', 6000)
	

INSERT INTO stocks (product_id, count) VALUES
	('d9fd2977-0437-44c3-9b93-78b864688c48', 85),
	('bcbcc955-5ff3-4a0c-a4c2-7729a3518176', 37),
	('38ba818b-ceb1-4954-ac47-a675a26de1cc', 24),
	('217ea2f7-5412-4269-8d5b-4a426b101e2f', 24)