import { PostService } from './post.service';
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, tap, first } from "rxjs";

@Injectable()
export class PostsResolver implements Resolve<boolean> {
  constructor(private PostService: PostService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.PostService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.PostService.getAll();
        }
      }),
      first()
    );
  }
}