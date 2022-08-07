import { AppState } from './../../store/app.state';
import { increment, decrement, reset } from './../state/counter.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {


  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    console.log('sdlkf')
  }

  onIngrement(){
    this.store.dispatch(increment());
  }

  onDecrement(){
    this.store.dispatch(decrement());

  }

  onReset(){
    this.store.dispatch(reset());

  }

}
