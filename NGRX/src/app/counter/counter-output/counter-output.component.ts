import { AppState } from './../../store/app.state';
import { Observable } from 'rxjs';
import { getCounter } from './../state/counter.selectors';
import { Component,  OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  
  counter$!:Observable<number>; 

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.counter$=this.store.select(getCounter);
    
  }

}
