import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { User } from '../redirect/user';
import { Story } from '../home/story';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})

export class AuthorsComponent implements OnInit {
  public user = {
    _id: '',
    _rev: '',
    user_name: '',
    user_email: '',
    role: ''
  };

  private story = {
    story_title: '',
    story_description: '',
    story_category: '',
    author_id: '',
    story_photo: '',
    status: ''
  }

  public stories = [];

  private _url: string = "https://talk-tales-users.herokuapp.com/api/v1/users/";
  private _story_url: string = "https://talk-tales-stories.herokuapp.com/api/v1/stories/";

  public aid = '';
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.aid = id;
    
    this.getAuthorDetails(id)
    .subscribe(user => {
      this.user = user;
    });

    this.getAuhtorStories(id).subscribe(stories => {
      this.stories = stories;
      console.log(this.stories);
    });
  }

  getAuthorDetails(id: string): Observable<User>{
    return this.http.get<User>(this._url + id);
  }

  getAuhtorStories(id: string): Observable<Story[]>{
    return this.http.get<Story[]>(this._story_url + "author/" + id);
  }

  publish(id: string, title: string, desc: string, cat: string, aid: string, status: string){
    this.storyObject(title, desc, cat, aid, "published");
    this.updateStoryStatus(id, this.story).subscribe();
    this.ngOnInit();
  }

  unpublish(id: string, title: string, desc: string, cat: string, aid: string, status: string){
    this.storyObject(title, desc, cat, aid, "unpublished");
    this.updateStoryStatus(id, this.story).subscribe();
    this.ngOnInit();
  }

  updateStoryStatus(id: string, update: object): Observable<Story>{
    return this.http.put<Story>(this._story_url + id, update);
  }

  storyObject(title: string, desc: string, cat: string, aid: string, status: string){
    this.story.story_title = title;
    this.story.story_description = desc;
    this.story.story_category = cat;
    this.story.author_id = aid;
    this.story.status = status;
  }

}
