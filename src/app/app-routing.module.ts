import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewStoryComponent } from './components/new-story/new-story.component';
import { NewChapterComponent } from './components/new-chapter/new-chapter.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { HomeComponent } from './components/home/home.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { LoginComponent } from './components/login/login.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { PublishComponent } from './components/publish/publish.component';
import { UnpublishComponent } from './components/unpublish/unpublish.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'authors/:id', component: AuthorsComponent},
  {path: 'index', component: HomeComponent},
  {path: 'stories/:id', component: ChapterComponent},
  {path: 'authors/:id/story', component: NewStoryComponent},
  {path: 'chapters/story/:id/:aid', component: NewChapterComponent},
  {path: 'redirect/:email', component: RedirectComponent},
  {path: 'story/:id/publish', component: PublishComponent},
  {path: 'story/:id/unpublish', component: UnpublishComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
