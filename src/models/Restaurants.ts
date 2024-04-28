class Restaurants {
  description: string
  image: string
  extra?: string
  type: string
  title: string
  id: number
  points: number

  constructor(
    description: string,
    image: string,
    type: string,
    title: string,
    id: number,
    points: number,
    extra?: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.extra = extra
    this.type = type
    this.points = points
  }
}

export default Restaurants
