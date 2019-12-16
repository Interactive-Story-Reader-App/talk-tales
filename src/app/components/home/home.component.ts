import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Story } from './story';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private _url: string = "https://talk-tales-stories.herokuapp.com/api/v1/stories";
    public stories = [];


  constructor(private http: HttpClient) { }

  getStories(): Observable<Story[]>{
    return this.http.get<Story[]>(this._url);
}

  ngOnInit() {
    this.getStories()
    .subscribe(data => this.stories = data )
  }

}
