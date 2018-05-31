DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INTEGER NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50),
  department_name VARCHAR(50),
  price DECIMAL(20, 2),
  stock_quantity INTEGER(100),
  PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cd", "electronics", 20, 50), ("book", "books", 15, 50), ("dvd", "electronics", 20, 50), ("computer", "electronics", 200, 20),
("video game", "electronics", 60, 20), ("playstation 4", "electronics", 300, 20), ("amazon echo", "electronics", 40, 20),
("nintendo switch", "electronics", 300, 20), ("shoes", "clothes", 50, 20), ("inflatable pool", "outdoors", 15, 20);

SELECT * FROM products;