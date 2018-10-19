import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  imports:      [ BrowserModule, FormsModule, Ng2CarouselamosModule, 
  RouterModule.forRoot([
    { path : 'Home', component : HomeComponent },
    { path : 'About', component : AboutComponent },
    { path : 'Contact', component : ContactComponent }
  ])
   ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
