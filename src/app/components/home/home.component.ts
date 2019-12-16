import { Component, OnInit } from '@angular/core';
import { StoryService } from './story.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public stories = [];

  constructor(private _storyService: StoryService) { }

  ngOnInit() {
    this._storyService.getAllStories()
    .subscribe(story => this.stories = story )
  }

}
