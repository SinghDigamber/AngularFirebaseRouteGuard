import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

// Auth service
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './shared/auth.service';

// Import canActivate guard
import { AuthGuard } from './shared/auth.guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [AppComponent, UserProfileComponent, SignInComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
