import { Post } from './../../models/post.model';
import { Observable } from 'rxjs';
import { PostService } from './../../post/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts$!: Observable<Post[]>;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.entities$;
  }

  onDeletePost(event:Event,id:any){
    event.preventDefault();
    if (confirm('Are you sure you want to delete the post')) {
      this.postService.delete(id);
    }
  }

}
