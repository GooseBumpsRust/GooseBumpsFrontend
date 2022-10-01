import {Component, OnInit} from '@angular/core';
import PythonJson from '../../../assets/challenges/python.json';

@Component({
  selector: 'app-learning-page',
  templateUrl: './learning-page.component.html',
  styleUrls: ['./learning-page.component.scss']
})
export class LearningPageComponent implements OnInit {
  question: string = '';
  code_rust: string = ''
  code_challenge:string = ''
  title: string = '';
  pythonJson = PythonJson
  init_console: string= '';

  constructor() {
    console.log(this.pythonJson);

    this.question = this.pythonJson.questions[0].question;
    this.code_rust = this.pythonJson.questions[0].code_rust;
    this.code_challenge = this.pythonJson.questions[0].code_challenge;
    this.title = this.pythonJson.questions[0].title;
    this.init_console = this.pythonJson.questions[0].init_console;

  }

  ngOnInit(): void {
  }

}
