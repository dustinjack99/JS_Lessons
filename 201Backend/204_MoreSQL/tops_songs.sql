CREATE TABLE top_5000 (
    position SERIAL PRIMARY KEY,
    artist VARCHAR(100) NULL,
    song VARCHAR(100) NULL,
    year INTEGER NULL,
    raw_total DECIMAL(10, 4) NULL,
    raw_usa DECIMAL(10, 4) NULL,
    raw_uk DECIMAL(10, 4) NULL,
    raw_eu DECIMAL(10, 4) NULL,
    raw_row DECIMAL(10, 4) NULL,
);