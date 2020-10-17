import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResourceComponent } from './resource/resource.component';
import { ForumComponent } from './forum/forum.component';
import { PostComponent } from './forum/post/post.component';
import { ArticleComponent } from './forum/article/article.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  { path: 'forum', component: ForumComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'resource', component: ResourceComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
