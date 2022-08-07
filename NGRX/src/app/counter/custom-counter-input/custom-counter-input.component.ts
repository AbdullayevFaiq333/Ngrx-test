import { AppState } from './../../store/app.state';
import { getText } from './../state/counter.selectors';
import { changeText } from './../state/counter.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  value!:number;
  text$!:Observable<string>;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.text$=this.store.select(getText);
  }

  onAdd(){
    this.store.dispatch(customIncrement({count:+this.value}))
  }
  
  onChangeText(){
    this.store.dispatch(changeText());
  }
}
