import { CommonModule } from '@angular/common';
import { UserFormModule } from '../../components/user-form/user-form.module';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatCardModule } from '@angular/material';

@NgModule({
    imports: [
        FlexLayoutModule,
        MatToolbarModule,
        MatCardModule,
        UserFormModule,
        CommonModule
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule { }