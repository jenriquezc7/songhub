import { User } from '../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
    selector: 'user-form',
    templateUrl: './user-form.component.html'
})
export class UserFormComponent{

    @Input() isLoading: boolean;

    @Output() save = new EventEmitter<User>();

    form: FormGroup;
    
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit(){
        this.save.emit(this.form.value);
    }
}