import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import {Chapter} from '../home/chapter';
import {Story} from '../home/story';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  public start = '0';

  public path = [
  "233a4c4eb39f4265af14c21f0394931a",
   "4619a309fc6249709d3d8149ad775ed5",
   "5ce16115b7cb45fa89b4611b2efeb940",
   "6b5eabbd4d1f4effbba18e33ed94cdee",
   "6f7be4583b274e7e94559662ce21368e",
   "a7cbd12bc1a544b4bad32516b332de61",
   "a9d653043e47498ba8ca159312a1945a"
  ];

  public chapters = [];
  
  public currentChapter = {
    _id: '',
    chapter_title: '',
    chapter_content: '',
  };

  public trackPath = 0;

  public count = 0;

  private _url: string = "https://talk-tales-chapters.herokuapp.com/api/v1/chapters/";
  private _story_url: string = "https://talk-tales-stories.herokuapp.com/api/v1/stories/";

  story = {
    story_title: ''
  };

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getAllChapters();
    this.getStory().subscribe(data => this.story = data);
  }

  getStory(): Observable<Story>{
    return this.http.get<Story>(this._story_url + this.route.snapshot.paramMap.get('id'));
  }

  getChapter(id: string): Observable<Chapter>{
    return this.http.get<Chapter>(this._url + id);
  }

  getAllChapters(){
    this.path.map(cid => {
      this.getChapter(cid).subscribe(data => {
        this.chapters.push(data);
      })
    })
    console.log(this.chapters);
    this.currentChapter = this.chapters[0];
  }

  nextChapter(){
    this.start += 1;
    if(this.trackPath == this.chapters.length){
      console.log("End of Story");
      this.trackPath = 0;
      this.currentChapter = this.chapters[this.trackPath];
    }else{
      this.currentChapter = this.chapters[this.trackPath];
    }
    this.trackPath += 1;
  }

}
