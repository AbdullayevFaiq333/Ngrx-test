import { getPostById } from './../state/posts.selector';
import { Store } from '@ngrx/store';
import { AppState } from './../../store/app.state';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/posts.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post!:Observable<Post| null| undefined>;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.post=this.store.select(getPostById);
  }

}
