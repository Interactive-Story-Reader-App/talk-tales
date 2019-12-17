import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewStoryComponent } from './components/new-story/new-story.component';
import { NewChapterComponent } from './components/new-chapter/new-chapter.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { HomeComponent } from './components/home/home.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { LoginComponent } from './components/login/login.component';
import { RedirectComponent } from './components/redirect/redirect.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'authors/:id', component: AuthorsComponent},
  {path: 'index', component: HomeComponent},
  {path: 'stories/:id', component: ChapterComponent},
  {path: 'new_story', component: NewStoryComponent},
  {path: 'new_chapter', component: NewChapterComponent},
  {path: 'redirect/:email', component: RedirectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
