import { Router } from '@angular/router';
import { updatePost } from './../state/posts.action';
import { getPostById } from './../state/posts.selector';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from 'src/app/models/posts.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit,OnDestroy {

  post!:Post;
  postForm!:FormGroup;
  postSubscription!:Subscription;

  constructor(private store:Store<AppState>,private router:Router) { }

  ngOnInit(): void {
    this.createForm();
    this.store.select(getPostById).subscribe((post) => {
      if (post) {
        this.post = post;
        this.postForm.patchValue({
          title: post.title,
          description: post.description,
        });
      }
    });
  }

  onSubmit(){
    if(!this.postForm.valid){
      return;
    }

    const title=this.postForm.value.title;
    const description=this.postForm.value.description;

    const post:Post={
      id:this.post.id,
      title,
      description,
    }

    this.store.dispatch(updatePost({post}));
    this.router.navigate(['posts']);
  }

  createForm(){
    this.postForm=new FormGroup({
      title:new FormControl(null,[
        Validators.required,
        Validators.minLength(6),
      ]),
      description:new FormControl(null,[
        Validators.required,
        Validators.minLength(10),
      ]),
    })
  }

  ngOnDestroy(): void {
    if(this.postSubscription){
      this.postSubscription.unsubscribe();
    }
  }

  showTitleErrors():any{
    const titleForm=this.postForm.get('title');
    if(titleForm?.touched && !titleForm.valid){
      if(titleForm.errors?.['required']){
        return 'Title is required';
      }

      if(titleForm.errors?.['minlength']){
        return 'Title should be of minimum 6 character lenght'
      }
    }
  }

  showDescriptionErrors():any{
    const descriptionForm=this.postForm.get('description');
    if(descriptionForm?.touched && !descriptionForm.valid){
      if(descriptionForm.errors?.['required']){
        return 'Description is required';
      }

      if(descriptionForm.errors?.['minlength']){
        return 'Description should be of minimum 10 character lenght'
      }
    }
    
  }

}
