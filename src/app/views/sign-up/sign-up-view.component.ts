import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'sign-up-view',
    templateUrl: './sign-up-view.component.html',
    providers: [AuthService]
})
export class SignUpViewComponent{

    form: FormGroup;

    constructor(private auth: AuthService, fb: FormBuilder){
        this.form = fb.group({
            avatar: '',
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });
    }

    onSubmit(){
        this.auth.signUp(this.form.value)
            .then(success => console.log('success', success))
            .catch(error => console.log('error', error))
    }

    onAvatarChanged(avatar: string){
        this.form.get('avatar').setValue(avatar);
    }
}