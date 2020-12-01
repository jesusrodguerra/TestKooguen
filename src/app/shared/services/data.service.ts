import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Post from "../classes/post.class";
import Profile from "../classes/profile.class";
import Comentario from "../classes/comentarios.class";


@Injectable({
  providedIn: "root"
})
export class UserService {

   URL_API = "http://localhost:3000";

  constructor(
    private http: HttpClient
  ) { }

  getPostList() {
    return this.http.get(`${this.URL_API}/posts`);
  }

  getPost(id: string | number) {
    return this.http.get(`${this.URL_API}/post/${id}`);
  }

  postPostList(payload: Post) {
    return this.http.post(`${this.URL_API}/posts`, payload);
  }

  putPostList(payload: Post) {
    return this.http.put(`${this.URL_API}/posts/${payload.id}`, payload);
  }

  deletePostList(id: string | number) {
    return this.http.delete(`${this.URL_API}/posts/${id}`);
  }

  getComentList() {
    return this.http.get(`${this.URL_API}/comments`);
  }

  getComment(id: string | number) {
    return this.http.get(`${this.URL_API}/comments/${id}`);
  }

  postCommentList(payload: Comentario) {
    return this.http.post(`${this.URL_API}/comments`, payload);
  }

  putCommentList(payload: Comentario) {
    return this.http.put(`${this.URL_API}/comments`, payload);
  }

  deleteCommentList(id: string | number) {
    return this.http.delete(`${this.URL_API}/comments/${id}`);
  }

  getProfileList() {
    return this.http.get(`${this.URL_API}/profile`);
  }

  getProfile(id: string | number) {
    return this.http.get(`${this.URL_API}/profile/${id}`);
  }

  postProfileList(payload: Profile) {
    return this.http.post(`${this.URL_API}/profile`, payload);
  }

  putProfileList(payload: Profile) {
    return this.http.put(`${this.URL_API}/profile`, payload);
  }

  deleteProfileList(id: string | number) {
    return this.http.delete(`${this.URL_API}/profile/${id}`);
  }

}
