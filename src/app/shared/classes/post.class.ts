import { ITipo } from '../models/tipo.model';
import {IPost} from '../models/post.model';

export default class Post implements IPost {

    id: string | number;
    title: string;
    author: string;

    constructor( id: string | number,
        title: string,
        author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
}
