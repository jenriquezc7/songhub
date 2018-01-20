import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'sign-up-view',
    templateUrl: './sign-up-view.component.html'
})
export class SignUpViewComponent{

    form: FormGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            avatar: '',
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });
    }

    onAvatarChanged(avatar: string){
        this.form.get('avatar').setValue(avatar);
    }
}