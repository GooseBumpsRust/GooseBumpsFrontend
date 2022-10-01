import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import PythonJson from '../../../assets/challenges/python.json';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {SuccessModalComponent} from "../../modals/success-modal/success-modal.component";

@Component({
  selector: 'app-rust-console',
  templateUrl: './rust-console.component.html',
  styleUrls: ['./rust-console.component.scss']
})
export class RustConsoleComponent implements OnInit, AfterViewInit {
  @Input()
  code: string = "";
  @ViewChild('rustConsole') rustConsole: HTMLIFrameElement;

  codeUrl: string | undefined ;
  clicklistener:any;
  isLoading: boolean = false;
  consoleResult:string = "";

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.codeUrl = "https://play.rust-lang.org/?version=stable&mode=debug&edition=2021&code=" + this.code
  }

  ngAfterViewInit(): void {

    console.log(this.rustConsole)
  }

  async runScript(){

      const data = {
        version: 'stable',
        optimize: '0',
        code:this.code,
        edition:'2015',
      }
      try {
        this.isLoading =true;
        const resp = await fetch('https://play.rust-lang.org/evaluate.json',{
          body: JSON.stringify(data), // must match 'Content-Type' header
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, same-origin, *omit
          headers: {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36 Edg/89.0.774.68',
            'Content-type': 'application/json',
            'Sec-Fetch-Site': 'same-site',
          },
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // *client, no-referrer
        });

        const answer = await resp.json();

        let message = '';
        if (answer.error != null) {
          message = answer.error;
        } else {
          message = answer.result
          setTimeout(() =>{
            this.openModal();
          },1500);
        }
        this.consoleResult = message;
        if(message == PythonJson.questions[0].result_console) {
          console.log("You get a badge");
        } else {
          console.log("You did it wrong");
        }
        this.isLoading = false;
        console.log(answer)



      } catch (err) {
        console.log(err)
      }
    };



  openModal() {
    const dialogRef = this.dialog.open(SuccessModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

