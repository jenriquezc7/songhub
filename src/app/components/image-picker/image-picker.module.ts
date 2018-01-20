import { ImagePickerComponent } from './image-picker.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';

@NgModule({
    imports: [CommonModule, FlexLayoutModule, MatButtonModule],
    declarations: [ImagePickerComponent],
    exports: [ImagePickerComponent]
})
export class ImagePickerModule{}