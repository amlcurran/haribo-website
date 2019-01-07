class HariboType {
    id: string
    name: string
    rating: number
    imageLink: URL
    
    constructor(id: string, name: string, rating: number, imageLink: URL) {
        this.id = id
        this.name = name
        this.rating = rating
        this.imageLink = imageLink
    }
}

export default HariboType;