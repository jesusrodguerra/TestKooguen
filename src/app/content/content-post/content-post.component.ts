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

}
