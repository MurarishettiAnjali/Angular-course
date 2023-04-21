import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LinkComponent } from './base/link/link.component';
import { DialogcontentComponent } from './papers/dialogcontent/dialogcontent.component';
import { FormComponent } from './papers/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    DialogcontentComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
