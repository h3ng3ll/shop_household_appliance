export class Category {
  public id: number;
  public description: String;
  public image: string;

  constructor(id: number, description: String, image: string) {
    this.id = id;
    this.description = description;
    this.image = image;
  }
}
