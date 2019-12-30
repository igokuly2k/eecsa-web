export class Job {
  public name: string;
  public content: string;
  public imagePath: string;
  constructor(name: string, content: string, imagePath: string) {
    this.name = name;
    this.content = content;
    this.imagePath = imagePath;
  }
}
