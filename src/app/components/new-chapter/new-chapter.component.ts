import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-chapter',
  templateUrl: './new-chapter.component.html',
  styleUrls: ['./new-chapter.component.css']
})
export class NewChapterComponent implements OnInit {

  chapterForm = new FormGroup({
    customer_name: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

}
