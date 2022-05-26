import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeekmenuPageRoutingModule } from './weekmenu-routing.module';

import { WeekmenuPage } from './weekmenu.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeekmenuPageRoutingModule,
    SharedModule
  ],
  declarations: [WeekmenuPage]
})
export class WeekmenuPageModule {}
