import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-language-card',
  templateUrl: './language-card.component.html',
  styleUrls: ['./language-card.component.scss']
})
export class LanguageCardComponent implements OnInit {

  @Input()
  title: string | undefined ;

  @Input()
  iconPath: string | undefined;

  @Input()
  disabled: boolean = false;

  @Input()
  challenge_id: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo(challenge_id: string) {
    if(this.disabled) {
    return;
    }
    this.router.navigate(['/challenge', challenge_id]);
  }
}
