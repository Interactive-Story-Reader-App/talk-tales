import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Story} from '../home/story';
import { ActivatedRoute } from '@angular/router';

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
    story_category: new FormControl(''),
    author_id: new FormControl(this.route.snapshot.paramMap.get('id')),
    story_photo: new FormControl(),
    status: new FormControl('unpublished')
  });

  selectedFile: File

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.storyForm.value)
  }

  onSubmit(){
    console.log(this.storyForm.value);
    this.addNewStory(this.storyForm.value)
    .subscribe(console.log)
  }

  addNewStory(story: Story): Observable<Story>{
    return this.http.post<Story>(this._url, story);
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile)
  }

}
