import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
// import {OpenCVConfig} from 'ngx-document-scanner';
// import {NgxDocumentScannerModule} from 'ngx-document-scanner';

// set the location of the OpenCV files
// const openCVConfig: OpenCVConfig = {
//   openCVDirPath: '/assets/opencv.js'
// };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // NgxDocumentScannerModule.forRoot(openCVConfig),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
