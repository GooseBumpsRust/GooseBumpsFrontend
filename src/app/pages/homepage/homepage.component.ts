import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  languagesList: any = [
    {
      title: 'Python',
      iconPath: 'assets/images/python_logo.png',
      disabled: false,
      challenge_id: "python"
    },
    {
      title: 'JavaSrcript',
      iconPath: 'assets/images/javascript_logo.png',
      disabled: true,
      challenge_id: "js"
    },
    {
      title: 'Java',
      iconPath: 'assets/images/java_logo.png',
      disabled: true,
      challenge_id: 'java'
    },
    {
      title: 'C++',
      iconPath: 'assets/images/c++_logo.png',
      disabled: true,
      challenge_id: "c++",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
