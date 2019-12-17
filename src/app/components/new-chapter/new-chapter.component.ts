import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Chapter} from '../new-chapter/chapter';

@Component({
  selector: 'app-new-chapter',
  templateUrl: './new-chapter.component.html',
  styleUrls: ['./new-chapter.component.css']
})
export class NewChapterComponent implements OnInit {

  private _url: string = "https://talk-tales-chapters.herokuapp.com/api/v1/chapters";

  chapterForm = new FormGroup({
    chapter_id: new FormControl(1),
    story_id: new FormControl('659585ea700e4610890589af0fe117dc'),
    chapter_title: new FormControl(''),
    chapter_content: new FormControl(''),
    candidates: new FormControl([]),
    choices: new FormControl([])
  });

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    this.addNewStory(this.chapterForm.value)
    .subscribe()
  }

  addNewStory(chapter: Chapter): Observable<Chapter>{
    return this.http.post<Chapter>(this._url, chapter);
  }

}
