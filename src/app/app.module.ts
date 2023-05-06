import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewNoteComponent } from './pages/new-note/new-note.component';
import { InquiryDashboardComponent } from './pages/inquiry-dashboard/inquiry-dashboard.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BodyComponent } from './pages/body/body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewNoteComponent,
    InquiryDashboardComponent,
    SidenavComponent,
    DashboardComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
