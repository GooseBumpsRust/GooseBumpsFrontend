import {Component, ElementRef, Input, AfterViewInit, ViewChild} from '@angular/core';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss']
})
export class SnippetComponent implements AfterViewInit {

  @Input() code: string = "";
  @Input() language = 'rust';
  @ViewChild('snippetCode') snippetCode: ElementRef ;

  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    const code = (this.code || this.el.nativeElement.innerText)
    const grammar = Prism.languages[this.language];
    const html = Prism.highlight(code, grammar, this.language);
    this.snippetCode.nativeElement.innerHTML = html;
  }

}

