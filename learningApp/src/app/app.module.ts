import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResourceComponent } from './resource/resource.component';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'resource', component: ResourceComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ResourceComponent,
    HomeComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDividerModule,
    MatCheckboxModule,
    DragDropModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
