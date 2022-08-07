import { CustomSerializer } from './store/router/custom-serializer';
import { AuthTokenInterceptor } from './services/AuthToken.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthEffects } from './auth/state/auth.effects';
import { appReducer } from './store/app.state';
import { AppRountingModule } from './app-rounting.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { SinglePostComponent } from './posts/single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    SinglePostComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    StoreRouterConnectingModule.forRoot({
      serializer:CustomSerializer,
    }),
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthTokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
