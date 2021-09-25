// For creating a database, right click on 'Databases' and click 'create table';

// Queries!
1. // CREATE TABLE people (
// 	name VARCHAR(30) NOT NULL,
// 	has_pet BOOLEAN NOT NULL,
// 	pet_name VARCHAR(30),
// 	pet_age INTEGER
// );

// INSERT INTO people (
// 	name, has_pet, pet_name, pet_age
// )

// VALUES ('Dustin', true, 'Toots', 5);

//READ
//SELECT * FROM people;

2. //CREATE
//Next, show how to copy and insert multiple values - remember that using SQL, you must be explicit

//rerun adding, to show that duplicate entries can exist.
//We need to tell SQL to be unique, to have a unique identifier

3.  //UPDATE
//INSERT INTO peope(name, has_pet) VALUES('Tim', false);
//UPDATE people
// SET has_pet = true
// WHERE name = 'Tim';

//Show off multiple updates
//UPDATE people
// SET has_pet = false, pet_name = 'Deceased'
// WHERE name = 'Ben';

4. //DELETE
//DELETE FROM people WHERE name = 'Ben';

5. //How to prevent multiple rows being affected??
// Primary keys!!
// Value must be unique, we must have 100% confidence that this value is unique

//DROP TABLE people; (refresh DB once dropped)

// CREATE TABLE people (
// 	id SERIAL PRIMARY KEY,
// 	name VARCHAR(30) NOT NULL,
// 	has_pet BOOLEAN NOT NULL,
// 	pet_name VARCHAR(30),
// 	pet_age INTEGER
// );

6. //JOINS! - How to relate data. Targets multiple tables, to get certain data out of both. A good example is books and authors.

// CREATE TABLE books (
// 	id SERIAL PRIMARY KEY,
// 	authorId INTEGER,
// 	title VARCHAR(100)
// );

// CREATE TABLE authors (
// 	id SERIAL PRIMARY KEY,
// 	firstName VARCHAR(100),
// 	lastName VARCHAR(100)
// );

// INSERT INTO authors (firstName, lastName) VALUES ('Jane', 'Austen');
// INSERT INTO authors (firstName, lastName) VALUES ('Mark', 'Twain');
// INSERT INTO authors (firstName, lastName) VALUES ('Lewis', 'Carroll');
// INSERT INTO authors (firstName, lastName) VALUES ('Andre', 'Asselin');

// INSERT INTO books (title, authorId) VALUES ('Pride and Prejudice', 1);
// INSERT INTO books (title, authorId) VALUES ('Emma', 1);
// INSERT INTO books (title, authorId) VALUES ('The Adventures of Tom Sawyer', 2);
// INSERT INTO books (title, authorId) VALUES ('Adventures of Huckleberry Finn', 2);
// INSERT INTO books (title, authorId) VALUES ('Alice''s Adventures in Wonderland' , 3);
// INSERT INTO books (title, authorId) VALUES ('Dracula', null);

// SELECT * FROM authors;
// SELECT * FROM books;

7. //Querying Joins

// books is left table, authors is right table
// SELECT title, firstName, lastName 
// FROM books
// INNER JOIN authors on books.authorId = authors.id;

// SELECT title, firstName, lastName 
// FROM books
// RIGHT JOIN authors on books.authorId = authors.id;