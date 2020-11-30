import { ITipo } from '../models/tipo.model';
import {IComentario} from '../models/comentario.model';

export default class Comentarios implements IComentario {
    id: string | number;
    contenido: string;
    usuario: string | number;

    constructor(    id: string | number,
        contenido: string,
        usuario: string | number) {
            this.id = id;
            this.contenido = contenido;
            this.usuario = usuario;
    }

}

