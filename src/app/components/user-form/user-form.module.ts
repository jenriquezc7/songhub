import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [ReactiveFormsModule, FlexLayoutModule, MatCardModule, MatInputModule, MatButtonModule],
    declarations: [UserFormComponent],
    exports: [UserFormComponent]
})
export class UserFormModule{}