import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { Test2Component } from './test2/test2.component';
import { TestComponent } from './test/test.component';
import { PasswardGeneratorLectureComponent } from './passward-generator-lecture/passward-generator-lecture.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { CountryStateComponent } from './country-state/country-state.component';
import { NgForCountryDropDownComponent } from './ng-for-country-dropdown/ng-for-country-dropdown.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { CustomDirective } from './custom.directive';
import { StructuralDirectiveAssignComponent } from './structural-directive-assign/structural-directive-assign.component';
import { TemplateFromComponent } from './template-from/template-from.component';
import { TemplateFrom01Component } from './template-from01/template-from01.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFroms1Component } from './reactive-froms1/reactive-froms1.component';
// import { UserFormComponent } from './user-form/user-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileComponent } from './user-profile/user-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    DatabindingComponent,
    PasswordGeneratorComponent,
    NgIfComponent,
    NgForComponent,
    PasswardGeneratorLectureComponent,
    NgSwitchComponent,
    CountryStateComponent,
    NgForCountryDropDownComponent,
    NgStyleComponent,
    NgClassComponent,
    CustomDirective,
    StructuralDirectiveAssignComponent,
    TemplateFromComponent,
    TemplateFrom01Component,
    ContactUsComponent,
    ContactComponent,
    ReactiveFroms1Component,
    // UserFormComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
