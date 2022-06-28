import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { WrongrouteComponent } from './wrongroute/wrongroute.component';

const routes: Routes = [
  {path:'',component:TechnologiesComponent},
  {path: 'technologies',component: TechnologiesComponent},
  {path: 'books',component: BooksComponent},
  {path: '**',component:WrongrouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
