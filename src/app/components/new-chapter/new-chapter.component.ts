import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import {Chapter} from '../home/chapter';
import {Story} from '../home/story';


@Component({
  selector: 'app-new-chapter',
  templateUrl: './new-chapter.component.html',
  styleUrls: ['./new-chapter.component.css']
})
export class NewChapterComponent implements OnInit {

  private _url: string = "https://talk-tales-chapters.herokuapp.com/api/v1/chapters/";
  private story_url: string = "https://talk-tales-stories.herokuapp.com/api/v1/stories/";

  public chapters = [];
  public numberOfChapters = 0;
  public story = {
    story_title: ''
  };
  public aid = '';
  public deps = [];

  chapterForm = new FormGroup({
    story_id: new FormControl(this.route.snapshot.paramMap.get('id')),
    chapter_title: new FormControl(''),
    chapter_content: new FormControl(''),
    candidate: new FormControl(''),
    choices: new FormControl([])
  });

  private chapterToAdd = {
    story_id: this.route.snapshot.paramMap.get('id'),
    chapter_title: '',
    chapter_content: '',
    candidates: [],
    choices: []
  }

  

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.aid = this.route.snapshot.paramMap.get('aid');
    this.doGet();
  }

  onSubmit(){
    
  }

  doGet(){
    this.getAllChapters()
    .subscribe(data => {
      this.chapters = data
      this.numberOfChapters = this.chapters.length;
    });

    this.getStory().subscribe(data => {this.story = data});
  }

  getAllChapters(): Observable<Chapter[]>{
    return this.http.get<Chapter[]>(this._url + "story/" + this.route.snapshot.paramMap.get('id') + "/all");
  }

  getChapterById(): Observable<Chapter>{
    return this.http.get<Chapter>(this._url + this.chapterForm.value.candidate);
  }

  getStory(): Observable<Story>{
    return this.http.get<Story>(this.story_url + this.route.snapshot.paramMap.get('id'));
  }

  addDeps(){
    this.chapterToAdd.candidates.push(this.chapterForm.value.candidate);
    this.getChapterById().subscribe(data => this.deps.push(data.chapter_title));
  }

  newChapter(){
    return this.http.post<Chapter>(this._url,  this.chapterToAdd);
  }

  addChapter(){
    this.newChapter().subscribe();
    console.log('Chapter Added...')
    this.doGet();
  }

  onTitleChange(title: string){
    this.chapterToAdd.chapter_title = title
  }

  onContentChange(content: string){
    this.chapterToAdd.chapter_content = content
  }


}
