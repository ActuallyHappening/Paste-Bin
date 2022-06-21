class Model {
  id: number;
  title: string;
  shortDescription: string;
  longDescription?: string;
  icon: string;
  image?: string;
  video?: string;
  url?: string;
  constructor({id: number, title: string, shortDescription: string, icon: string, image?: string, video?: string, url?: string, longDescription?: string}) {
    this.id = id;
    this.title = title;
    this.shortDescription = shortDescription ?? `Project ${this.id} short description`;
    this.longDescription = longDescription ?? `Project ${this.id} long description`;
    this.icon = icon;
    this.image = image ?? `src/components/body/navbar/deafultItemIcon.png`;
    this.video = video;
    this.url = url;
  }
}