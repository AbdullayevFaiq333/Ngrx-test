import { addPost } from './../state/posts.action';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postForm!:FormGroup;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
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

  onAddPost(){
    if(!this.postForm.valid){
      return;
    }
    console.log(this.postForm.value)

    const post:Post={
      title:this.postForm.value.title,
      description:this.postForm.value.description,
    }

    this.store.dispatch(addPost({post}))
  }

}
