import { Post } from 'src/app/models/post.model';
import { PostService } from './../post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post!:Post| undefined;

  constructor(private route:ActivatedRoute,private PostService:PostService) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params['id'];
    this.PostService.entities$.subscribe((posts) => {
      this.post = posts.find((post) => post.id === id);
      
    });
  }

}
