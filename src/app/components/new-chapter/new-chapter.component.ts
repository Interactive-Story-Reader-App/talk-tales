import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-chapter',
  templateUrl: './new-chapter.component.html',
  styleUrls: ['./new-chapter.component.css']
})
export class NewChapterComponent implements OnInit {

  chapterForm = new FormGroup({
    story_title: new FormControl(''),
    story_description: new FormControl(''),
    category_id: new FormControl('fee68f8c7dbde6d2bcd837045a005e51'),
    author_id: new FormControl('fee68f8c7dbde6d2bcd837045a0092a2'),
    story_photo: new FormControl(),
    story_path: new FormControl([])
  });

  constructor() { }

  ngOnInit() {
  }

}
