import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FbIdComponent } from '../fb-id/fb-id.component';
import { FacebookLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(<any>localStorage.getItem('fb_app_id'))
            //provider: new FacebookLoginProvider('643056750524188')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ]
})
export class FacebookAppIdModule {
  constructor(){console.log("env="+environment.fb_app_id)}
 }
