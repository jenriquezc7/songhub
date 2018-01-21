import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        MatToolbarModule,
        FlexLayoutModule,
        MatButtonModule,
        RouterModule,
        FormsModule,
        CommonModule
    ],
    declarations: [NavbarComponent],
    exports: [NavbarComponent]
})
export class NavbarModule{}