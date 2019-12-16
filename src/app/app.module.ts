import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewStoryComponent } from './components/new-story/new-story.component';
import { NewChapterComponent } from './components/new-chapter/new-chapter.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NewStoryComponent,
    NewChapterComponent,
    ChapterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
