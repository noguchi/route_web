import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { TagInputModule } from 'ngx-chips';
import { EditPage } from './edit.page';


const routes: Routes = [
  {
    path: '',
    component: EditPage,
  },
];

@NgModule({
  imports: [
    TagInputModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EditPage],
})
export class EditPageModule { }
