import { Routes } from '@angular/router';
import { CreatePostComponent } from './features/post/pages/create-post/create-post.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
   {
    path: 'create-post',
    component:CreatePostComponent
  }
];
