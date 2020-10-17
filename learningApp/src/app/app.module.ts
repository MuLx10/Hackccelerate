import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { ResourceComponent } from './resource/resource.component';
import { ForumComponent } from './forum/forum.component';
import { PostComponent } from './forum/post/post.component';
import { ArticleComponent } from './forum/article/article.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule} from './app-routing.module';

import { AuthInterceptor} from './interceptors/auth-interceptor';
import { AuthService} from './services/auth.service';

export function appInitializerFactory(authService: AuthService) {
  return () => authService.checkUserOnFirstLoad();
}


@NgModule({
  declarations: [
    AppComponent,
    ResourceComponent,
    HomeComponent,
    ForumComponent,
    PostComponent,
    ArticleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatExpansionModule,
    MatDividerModule,
    MatCheckboxModule,
    DragDropModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }, {
    provide: APP_INITIALIZER,
    useFactory: appInitializerFactory,
    multi: true,
    deps: [AuthService],
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
