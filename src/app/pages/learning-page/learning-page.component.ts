import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-learning-page',
  templateUrl: './learning-page.component.html',
  styleUrls: ['./learning-page.component.scss']
})
export class LearningPageComponent implements OnInit {
  question: string = "What is the meaning of life?";
  code_rust: string = `<pre prism class="language-python">
    var x = 1;
    var y = 2;
  </pre>`
  code_challenge:string = `<pre prism class="dark">
    var x = 1;
    var y = 2;
  </pre>`;


  constructor() {
  }

  ngOnInit(): void {
  }

}
