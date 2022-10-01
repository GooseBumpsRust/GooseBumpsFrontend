import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {LearningPageComponent} from "./pages/learning-page/learning-page.component";

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'challenge/:challenge_id/:chapter_id', component: LearningPageComponent },
  { path: 'challenge/:challenge_id', component: LearningPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
