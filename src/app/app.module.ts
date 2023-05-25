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
import { environment } from '../environments/environment';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { StatusPipe } from './pipe/status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewNoteComponent,
    InquiryDashboardComponent,
    SidenavComponent,
    DashboardComponent,
    BodyComponent,
    StatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase), // Initialize Firebase
    AngularFirestoreModule // Include the Firestore module

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
