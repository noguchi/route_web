import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';
import {SearchBarComponent} from '../search-bar/search-bar.component';
import {MdcCheckboxModule, MdcSliderModule} from '@angular-mdc/web';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ]),
        MdcSliderModule,
        MdcCheckboxModule
    ],
  declarations: [
    HomePage,
    SearchBarComponent
  ],
  entryComponents: [
    SearchBarComponent
  ]

})
export class HomePageModule {
}
