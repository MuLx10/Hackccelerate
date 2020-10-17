import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { ArticleComponent } from './article/article.component';
import { ComposeComponent } from './compose/compose.component';


@NgModule({
  declarations: [PostComponent, ArticleComponent, ComposeComponent],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class ForumModule { }
