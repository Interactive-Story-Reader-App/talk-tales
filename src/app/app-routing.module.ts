import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewStoryComponent } from './components/new-story/new-story.component';
import { NewChapterComponent } from './components/new-chapter/new-chapter.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: HomeComponent},
  {path: 'reader', component: ChapterComponent},
  {path: 'new_story', component: NewStoryComponent},
  {path: 'new_chapter', component: NewChapterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
