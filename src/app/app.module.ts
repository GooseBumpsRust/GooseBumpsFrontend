import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LanguageCardComponent } from './components/language-card/language-card.component';
import { SnippetComponent } from './components/snippet/snippet.component';
import { QuestionComponent } from './components/question/question.component';
import { RustConsoleComponent} from './components/rust-console/rust-console.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LearningPageComponent } from './pages/learning-page/learning-page.component';

import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python.min';
import 'prismjs/components/prism-rust.min';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import {SafePipe} from "./utils/safe-pipe";
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { RewardComponent } from './pages/reward/reward.component';
import {HttpClientModule} from "@angular/common/http";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import { SuccessModalComponent } from './modals/success-modal/success-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LanguageCardComponent,
    SnippetComponent,
    QuestionComponent,
    RustConsoleComponent,
    HomepageComponent,
    LearningPageComponent,
    SafePipe,
    HeaderComponent,
    RewardComponent,
    SuccessModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
