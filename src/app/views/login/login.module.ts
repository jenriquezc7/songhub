import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [FlexLayoutModule, MatToolbarModule, MatCardModule, MatInputModule, MatButtonModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule{}