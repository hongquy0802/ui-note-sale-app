import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewNoteComponent } from './pages/new-note/new-note.component';
import { InquiryDashboardComponent } from './pages/inquiry-dashboard/inquiry-dashboard.component';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'note', component: NewNoteComponent},
  {path: 'inquiry', component: InquiryDashboardComponent},
  {path: 'customer/:id', component: CustomerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
