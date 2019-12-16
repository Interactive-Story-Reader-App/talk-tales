import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.css']
})
export class NewStoryComponent implements OnInit {

  storyForm = new FormGroup({
    customer_name: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

}
