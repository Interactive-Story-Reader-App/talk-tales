import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewStoryComponent } from './components/new-story/new-story.component';
import { NewChapterComponent } from './components/new-chapter/new-chapter.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { HomeComponent } from './components/home/home.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { LoginComponent } from './components/login/login.component';
import { RedirectComponent } from './components/redirect/redirect.component';

@NgModule({
  declarations: [
    AppComponent,
    NewStoryComponent,
    NewChapterComponent,
    ChapterComponent,
    HomeComponent,
    AuthorsComponent,
    LoginComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
