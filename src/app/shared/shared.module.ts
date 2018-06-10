import { NgModule } from '@angular/core';
import { CommonModule, PlatformLocation, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MonacoEditorModule, NgxMonacoEditorConfig, NGX_MONACO_EDITOR_CONFIG } from 'ngx-monaco-editor';
import { ShowdownModule } from 'ngx-showdown';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { ChallengeService } from './services/challenge.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    MonacoEditorModule,
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
    MonacoEditorModule,
    ShowdownModule
  ],
  providers: [
    UserService,
    AuthService,
    AuthGuard,
    ChallengeService,
    {
      provide: NGX_MONACO_EDITOR_CONFIG,
      useFactory: getMonacoConfig,
      deps: [PlatformLocation]
    }
  ]
})
export class SharedModule { }

export function getMonacoConfig(platformLocation: PlatformLocation): NgxMonacoEditorConfig {
  const baseHref = platformLocation.getBaseHrefFromDOM();

  return {
    baseUrl: Location.joinWithSlash(baseHref, '/assets')
  }
}
