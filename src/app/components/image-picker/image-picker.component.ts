import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'image-picker',
    templateUrl: './image-picker.component.html'
})
export class ImagePickerComponent {

    @Output() change = new EventEmitter<string>();

    image: string;


    onChange(file: File) {
        if (file) {
            const reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = () => {
                this.image = reader.result
                this.change.emit(reader.result);
            };
        }
    }
}