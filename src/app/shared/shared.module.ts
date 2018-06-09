import { AuthGuard } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { ShowdownModule } from 'ngx-showdown';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { ChallengeService } from './services/challenge.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    MonacoEditorModule.forRoot(),
    ShowdownModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot().ngModule,
    MonacoEditorModule.forRoot().ngModule,
    ShowdownModule
  ],
  providers: [
    UserService,
    AuthService,
    AuthGuard,
    ChallengeService
  ]
})
export class SharedModule { }
