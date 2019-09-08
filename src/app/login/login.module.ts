import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxLoadingModule } from 'ngx-loading';


const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'forgotpassword',
        component: ForgotpasswordComponent
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule, ReactiveFormsModule,
        NgxLoadingModule.forRoot({})
    ],
    declarations:[
        LoginComponent,
        ForgotpasswordComponent
    ]
})

export class LoginModule {

}