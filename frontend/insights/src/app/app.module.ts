import { NgModule } from '@angular/core';
import { AvatarModule } from 'ngx-avatar';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReachComponent } from './reach/reach.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import {NgChartsModule} from 'ng2-charts';
import { LoginWithFacebookComponent } from './login-with-facebook/login-with-facebook.component';
import { TestComponent } from './test/test.component';
import { ProfileVisitsVisualsComponent } from './profile-visits-visuals/profile-visits-visuals.component';
import { FollowersDetailsVisualsComponent } from './followers-details-visuals/followers-details-visuals.component';
import { NewfollwersComponent } from './newfollwers/newfollwers.component';
import { FollowerDetailsInsightsComponent } from './follower-details-insights/follower-details-insights.component';
import { ReachCalenderComponent } from './reach-calender/reach-calender.component';
import { ImpressionCalenderComponent } from './impression-calender/impression-calender.component';
import { NewpostCalenderComponent } from './newpost-calender/newpost-calender.component';
import { WebsiteClicksInsightsComponent } from './website-clicks-insights/website-clicks-insights.component';
import { ProfileVisitsCalenderComponent } from './profile-visits-calender/profile-visits-calender.component';
import { PricingComponent } from './pricing/pricing.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgxStripeModule} from 'ngx-stripe';
import { SuccessComponent } from './success/success.component';
import { CancelComponent } from './cancel/cancel.component';
import { NgToastModule } from 'ng-angular-popup';
import { ProfileComponent } from './profile/profile.component';
import { environment } from 'src/environments/environment';
import { FacebookAppIdModule } from './facebook-app-id/facebook-app-id.module';
import { NewPasswordComponent } from './new-password/new-password.component';
import { OtpPageComponent } from './otp-page/otp-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ReachComponent,
    SignupComponent,
    NotfoundComponent,
    ForgotPasswordComponent,
    LoginWithFacebookComponent,
    TestComponent,
    ProfileVisitsVisualsComponent,
    FollowersDetailsVisualsComponent,
    NewfollwersComponent,
    FollowerDetailsInsightsComponent,
    ReachCalenderComponent,
    ImpressionCalenderComponent,
    NewpostCalenderComponent,
    WebsiteClicksInsightsComponent,
    ProfileVisitsCalenderComponent,
    PricingComponent,
    SidebarComponent,
    NavbarComponent,
    SuccessComponent,
    CancelComponent,
    ProfileComponent,
    NewPasswordComponent,
    OtpPageComponent,
    PrivacyPolicyComponent,
    Navbar2Component,
    HomeComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    NgChartsModule,
    NgToastModule,
    AvatarModule,
    FacebookAppIdModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
