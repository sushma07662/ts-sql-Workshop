"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../models/products");
class Review {
    constructor(rating, comment) {
        this.rating = rating;
        this.comment = comment;
    }
}
const products = [
    new products_1.Product(1, "Top", "Red", "M"),
    new products_1.Product(2, "Blouse", "Blue", "S"),
    new products_1.Product(3, "Skirt", "Black", "L"),
    new products_1.Product(4, "Jacket", "Green", "M"),
    new products_1.Product(5, "Jeans", "Dark Blue", "L"),
    new products_1.Product(6, "T-Shirt", "White", "S"),
    new products_1.Product(7, "Sweater", "Grey", "M"),
    new products_1.Product(8, "Shorts", "Pink", "S"),
    new products_1.Product(9, "Coat", "Black", "L"),
    new products_1.Product(10, "Saree", "Yellow", "freesize")
];
products[0].addReview(new Review(5, "Beautiful"));
products[0].addReview(new Review(4, "Nice fit."));
products[0].addReview(new Review(3, "nice"));
products[1].addReview(new Review(3, "Average"));
products[1].addReview(new Review(4, "excellent"));
products[2].addReview(new Review(5, "Perfect"));
products[2].addReview(new Review(2, "Material was not good"));
products[3].addReview(new Review(4, "stylish"));
products[3].addReview(new Review(3, "not fitted"));
products[4].addReview(new Review(5, "very good"));
products[4].addReview(new Review(4, "Comfortable"));
products[5].addReview(new Review(3, "Not bad"));
products[5].addReview(new Review(4, "Good"));
products[6].addReview(new Review(5, "nice product"));
products[6].addReview(new Review(3, "Material was not good"));
products[7].addReview(new Review(4, "comfortable"));
products[7].addReview(new Review(3, "Color was not nice"));
products[8].addReview(new Review(5, "very beautiful"));
products[8].addReview(new Review(4, "ausm"));
products[9].addReview(new Review(3, "Not good"));
products[9].addReview(new Review(4, "nice fabric"));
products[9].addReview(new Review(5, "very bright and elegant"));
for (let i = 0; i < products.length; i++) {
    products[i].displayReviews();
    products[i].Averagerating();
}
