CREATE TABLE Product (
    product_id SERIAL PRIMARY KEY,
	product_color VARCHAR(50),
	product_size VARCHAR(50),
    product_name VARCHAR(300) NOT NULL
);
INSERT INTO product(product_id,product_color,product_size,product_name) VALUES(12,'white','L','Top'),(18,'white','M','TROUSER'),(11,'blue','L','shirt'),(20,'black','L','scarf'),(7,'red','L','saree');
select * from product
	DROP TABLE review
CREATE TABLE review (
    review_id SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    review VARCHAR(300),
    FOREIGN KEY (product_id) REFERENCES Product (product_id)
);
INSERT INTO review(review_id,product_id,rating,review) VALUES(34,12,4,'good'),(32,18,5,'ausm'),(10,11,3,'not good'),(43,20,3.5,'fabric not good'),(9,7,4.5,'good product');
select * from review
SELECT p.product_name, AVG(r.rating) AS avg_rating
FROM Product p
JOIN review r ON p.product_id = r.product_id
GROUP BY p.product_name;

