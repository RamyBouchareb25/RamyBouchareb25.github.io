import { technologies } from "../Components/js/enumeration";

export default class ProjectData {
    id: string;
    img: string;
    title: string;
    number: number;
    description: string;
    fullDescription: string;
    type: technologies[];
    color: string;
    link: string;
    constructor(id: string, title: string, img:string, number: number, description: string, fullDescription: string, type: technologies[], color: string,link:string) {
        this.id = id;
        this.title = title;
        this.img = img;
        this.number = number;
        this.description = description;
        this.fullDescription = fullDescription;
        this.type = type;
        this.color = color;
        this.link = link;
    }

}