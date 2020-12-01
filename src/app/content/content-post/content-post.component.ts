import { Component, OnInit } from '@angular/core';
import Post from 'src/app/shared/classes/post.class';
import {UserService} from '../../shared/services/data.service';

@Component({
  selector: 'app-content-post',
  templateUrl: './content-post.component.html',
  styleUrls: ['./content-post.component.scss']
})
export class ContentPostComponent implements OnInit {

  post: Post[];

  constructor(
   private userService: UserService
  ) { }

  ngOnInit(): void {
    this.fetchPost();
  }

  fetchPost() {
    this.userService.getPostList()
      .subscribe((post: Post[]) => {
        this.post = post;
        console.log();
      });
  }

  createPost() {
    const randomId = Math.random();
    const newPost = {
      id: randomId,
      title: `Post with id: ${randomId}`,
      author: "Jesus",
    };
    this.userService.postPostList(newPost)
    .subscribe((post: Post) => {
      // this.post = post;
      const newPosts = [...this.post];
      newPosts.push(post);
      this.post = newPosts;
      console.log(post);
    });
  }

  deletePost(id, index) {
    this.userService.deletePostList(id)
    .subscribe( () => {
      const newPosts = [...this.post];
      newPosts.splice(index, 1);
      this.post = newPosts
    });
  }

  updatePost(post: Post, index) {
    const updatedPost = {...post};
    updatedPost.author = "My updated author";
    this.userService.putPostList(updatedPost)
    .subscribe((newPostUpdated: Post) => {
      // this.post = post;
      const newPosts = [...this.post];
      newPosts[index] = newPostUpdated;
      this.post = newPosts;
      console.log(newPostUpdated);
    });
  }

}
