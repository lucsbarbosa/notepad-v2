import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { UiService } from './services/ui.service';
import { RoutesService } from './services/routes.service';

declare global {
  interface note {
    noteId?: string;
    title: string;
    text: string;
    data: string;
  }

  interface apiReturn {
    id: string;
    username: string;
    notes: note[];
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DataService, UiService, RoutesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
