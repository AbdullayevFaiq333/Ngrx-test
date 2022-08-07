import { getPosts, getCount } from './../state/posts.selector';
import { Post } from './../../models/posts.model';
import { Observable } from 'rxjs';
import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { deletePost,loadPosts } from '../state/posts.action';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts!:Observable<Post[]| null>;
  count!:Observable<number>;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.posts=this.store.select(getPosts);
    this.count=this.store.select(getCount)
    this.store.dispatch(loadPosts());
  }

  onDeletePost(id:any){
    if(confirm('Are you sure Delete')){
      this.store.dispatch(deletePost({id}));
    }
  }

}
