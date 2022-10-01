import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LanguageCardComponent } from './components/language-card/language-card.component';
import { SnippetComponent } from './components/snippet/snippet.component';
import { QuestionComponent } from './components/question/question.component';
import { RustConsoleComponent } from './components/rust-console/rust-console.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LearningPageComponent } from './pages/learning-page/learning-page.component';

import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python.min';
import 'prismjs/components/prism-rust.min';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LanguageCardComponent,
    SnippetComponent,
    QuestionComponent,
    RustConsoleComponent,
    HomepageComponent,
    LearningPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
