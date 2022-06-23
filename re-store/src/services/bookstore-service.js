export default class BookstoreService {
    data = [
        { id: 1, title: 'Name1', author: 'Author1', price: 20, coverImage: "https://media.istockphoto.com/vectors/abstract-minimal-geometric-circle-background-for-business-annual-vector-id1210701957?s=612x612" },
        { id: 2, title: 'Name2', author: 'Author2', price: 22, coverImage: "https://media.istockphoto.com/vectors/abstract-minimal-geometric-circle-background-for-business-annual-vector-id1210701957?s=612x612" },
        { id: 3, title: 'Name3', author: 'Author3', price: 25, coverImage: "https://media.istockphoto.com/vectors/abstract-minimal-geometric-circle-background-for-business-annual-vector-id1210701957?s=612x612" },
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.8) {
                    reject(new Error('Something wrong!'));
                }
                resolve(this.data);
            }, 700);
        });
    }
}