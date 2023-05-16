import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  { path: 'contact-us', component: ContactUsComponent },
  // { path: '**', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
