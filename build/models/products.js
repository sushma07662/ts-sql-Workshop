"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, color, size, reviews = []) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.size = size;
        this.reviews = reviews;
    }
    addReview(review) {
        this.reviews.push(review);
    }
    displayReviews() {
        console.log("Reviews for " + this.name + ":");
        for (let i = 0; i < this.reviews.length; i++) {
            const review = this.reviews[i];
            console.log((i + 1) + ". " + review.comment + "  Rating: " + review.rating);
        }
    }
    averageRating() {
        let totalRating = 0;
        for (let i = 0; i < this.reviews.length; i++) {
            totalRating = totalRating + this.reviews[i].rating;
        }
        if (this.reviews.length === 0) {
            return 0;
        }
        else {
            return totalRating / this.reviews.length;
        }
    }
    Averagerating() {
        console.log('Average Rating for' + " " + this.name + " " + ': ' + this.averageRating());
    }
}
exports.Product = Product;
