import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  account: any;

  @Output() disconnectEvent = new EventEmitter();


  constructor() {
  }

  ngOnInit(): void {
  }

  disconnectWeb3() {
    this.disconnectEvent.emit();

  }

}
