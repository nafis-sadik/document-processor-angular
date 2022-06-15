import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ScannerComponent } from './scanner/scanner.component';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'scanner', component: ScannerComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    IndexComponent,
    ScannerComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ScannerModule { }
