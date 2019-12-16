import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Story} from '../home/story';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.css']
})
export class NewStoryComponent implements OnInit {

  private _url: string = "https://talk-tales-stories.herokuapp.com/api/v1/stories";

  storyForm = new FormGroup({
    story_title: new FormControl(''),
    story_description: new FormControl(''),
    category_id: new FormControl('fee68f8c7dbde6d2bcd837045a005e51'),
    author_id: new FormControl('fee68f8c7dbde6d2bcd837045a0092a2'),
    story_photo: new FormControl(),
    story_path: new FormControl([])
  });

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.storyForm.value);
    this.addNewStory(this.storyForm.value)
    .subscribe(console.log)
  }

  addNewStory(story: Story): Observable<Story>{
    return this.http.post<Story>(this._url, story);
  }

}
