import {Routes, RouterModule} from '@angular/router';
import { PublicViewsComponent } from "./public-views.component"
import { IndexComponent } from "./index/index.component"
import { LoginComponent } from "./login/login.component"
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component"
import { ProfileComponent } from "./profile/profile.component"
import { SignupComponent } from "./signup/signup.component"
import { TransactionHistoryComponent } from "./transaction-history/transaction-history.component"
import { PointsCalculatorComponent } from "./points-calculator/points-calculator.component"
import { ContactComponent } from "./contact/contact.component"


export const ROUTES:Routes = [
    {
        path: '', component: <any>PublicViewsComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', component: IndexComponent },
            { path: 'login', component: LoginComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'signup', component: SignupComponent },
            { path: 'transaction-history', component: TransactionHistoryComponent },
            { path: 'points-calculator', component: PointsCalculatorComponent },
            { path: 'contact', component: ContactComponent },             
        ]
    }
];

export const publicViewsProviders: any[] = [
];
export const publicRoute = RouterModule.forRoot(ROUTES);
