import { ImagePickerModule } from '../../components/image-picker/image-picker.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpViewComponent } from './sign-up-view.component';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule, 
        MatToolbarModule, 
        MatCardModule, 
        MatInputModule, 
        MatButtonModule, 
        ReactiveFormsModule,
        ImagePickerModule],
    declarations: [SignUpViewComponent],
    exports: [SignUpViewComponent]
})
export class SignUpViewModule{}