import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule}  from '@angular/http';
import { FormsModule }        from '@angular/forms';

import {chatModule} from './Components/Chat/chat.components';
import {searchPageComponent} from './ViewsAndControllers/searchPage/searchPage';
import { routes} from './app.router';

import {SpotifyService} from './Services/SpotifyService';

//import HttpClientModule imported AFTER browsermodule
@NgModule({
  declarations: [
    AppComponent,
    chatModule,
    searchPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers:[SpotifyService], 
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {

 
 }
