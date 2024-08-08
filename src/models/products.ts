export{Product}

class Product {
    id:number;
    name:string;
    color:string;
    size:string;
    reviews:Review[];

    constructor(id:number,name:string,color:string,size:string,reviews:Review[]=[]) {
        this.id=id;
        this.name=name;
        this.color=color;
        this.size=size;
        this.reviews=reviews;
    }
    addReview(review:Review) {
        this.reviews.push(review);
    }
    displayReviews() {
        console.log("Reviews for " + this.name + ":");
        for (let i=0; i<this.reviews.length; i++) {
            const review = this.reviews[i];
            console.log((i + 1) + ". " + review.comment + "  Rating: " + review.rating);
        }
    }
    averageRating():number {
        let totalRating = 0;
        for (let i = 0;i < this.reviews.length;i++) {
            totalRating = totalRating+this.reviews[i].rating;
        }
        if (this.reviews.length === 0) {
            return 0;
        } 
        else {
            return totalRating / this.reviews.length;
        }
    }
    Averagerating() {
        console.log('Average Rating for' +" "+this.name + " "+': ' + this.averageRating());
    }
    
    
    
}