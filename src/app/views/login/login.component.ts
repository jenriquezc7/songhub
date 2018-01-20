import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [AuthService]
})
export class LoginComponent {

    form: FormGroup;

    constructor(private auth: AuthService, fb: FormBuilder) {
        this.form = fb.group({
            email: '',
            password: ''
        });

        this.auth.user.subscribe(user => console.log('user',user))
    }

    login() {
        this.auth.login(this.form.value.email, this.form.value.password)
            .then((success) => console.log('success',success))
            .catch(error => console.log('error', error))
    }
}