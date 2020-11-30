import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { ContentPostComponent } from './content/content-post/content-post.component';
import {AppRoutingModule} from '../app/app.route';

@NgModule({
  declarations: [
    AppComponent,
    ContentPostComponent
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        RouterModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
