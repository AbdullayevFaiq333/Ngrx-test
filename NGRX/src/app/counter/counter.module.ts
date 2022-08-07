import { COUNTER_STATE_NAME } from './state/counter.selectors';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { CommonModule } from '@angular/common';
import { counterReducer } from './state/counter.reducer';

const routes:Routes=[
    {
        path:'',
        component:CounterComponent,
    }
]

@NgModule({
    declarations:[
        CounterComponent,
        CounterButtonsComponent,
        CounterOutputComponent,
        CustomCounterInputComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature(COUNTER_STATE_NAME,counterReducer)
    ]
})
export class CounterModule{}