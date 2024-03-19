import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BackgroundComponent } from './components/background/background.component';
import { ChecklistinfoComponent } from './components/checklistinfo/checklistinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackgroundComponent,
    ChecklistinfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
