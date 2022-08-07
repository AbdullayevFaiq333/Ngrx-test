 import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
      path: 'posts',
      loadChildren: () =>
        import('./post/posts.module').then((m) => m.PostsModule),
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}