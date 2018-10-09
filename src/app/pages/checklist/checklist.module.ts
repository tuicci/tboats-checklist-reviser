import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ChecklistPage } from './checklist';
import { ChecklistFilterPage } from '../checklist-filter/checklist-filter';
import { ChecklistPageRoutingModule } from './checklist-routing.module';

@NgModule( {
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ChecklistPageRoutingModule
    ],
    declarations: [
        ChecklistPage,
        ChecklistFilterPage
    ],
    entryComponents: [
        ChecklistFilterPage
    ]
} )
export class ChecklistModule { }
