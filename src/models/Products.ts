class Products {
  id: number
  title: string
  description: string
  image: string

  constructor(id: number, title: string, description: string, image: string) {
    this.description = description
    this.id = id
    this.image = image
    this.title = title
  }
}

export default Products
