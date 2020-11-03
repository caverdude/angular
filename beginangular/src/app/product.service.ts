export class ProductService{
  getProducts(){
    return [
      {
        imageUrl: "http://loremflickr.com/150/150?random=1",
        productName: "Product 1",
        releaseDate: new Date(2016,4,31),
        description: "Cras sit amet nibh libero, in gravida... ",
        rating: 4,
        numberOfReviews: 2
      },
      {
        imageUrl: "http://loremflickr.com/150/150?random=2",
        productName: "Product 2",
        releaseDate: new Date(2016,9,31),
        description: "Cras sit amet nibh libero, in gravida... ",
        rating: 2,
        numberOfReviews: 12
      },
      {
        imageUrl: "http://loremflickr.com/150/150?random=3",
        productName: "Product 3",
        releaseDate: new Date(2016,6,30),
        description: "Cras sit amet nibh libero, in gravida... ",
        rating: 5,
        numberOfReviews: 2
      }
    ];
  }
}
