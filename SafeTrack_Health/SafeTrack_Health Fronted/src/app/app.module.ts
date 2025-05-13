import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { MedicalRecordComponent } from './components/medical-record/medical-record.component';
import { BillingComponent } from './components/billing/billing.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { PatientComponent } from './components/patient/patient.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

// ✅ Form and HTTP modules (Important for ngModel and API calls)
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// ✅ Admin Components
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';

// ✅ Doctor Components
import { DoctorMenuComponent } from './components/doctor-menu/doctor-menu.component';
import { RegisterDoctorComponent } from './components/doctor/register-doctor/register-doctor.component';
import { ViewDoctorComponent } from './components/doctor/view-doctor/view-doctor.component';
import { AllDoctorsComponent } from './components/doctor/all-doctors/all-doctors.component';

// ✅ User Components
import { UserComponent } from './components/user/user.component';
import { AllUserComponent } from './components/register/all-user/all-user.component';

import { ViewUserComponent } from './components/view-user/view-user.component';

// ✅ Patient Components
import { AllPatientComponent } from './components/patient/all-patient/all-patient.component';
import { PatientMenuComponent } from './components/patient/patient-menu/patient-menu.component';
import { ViewPatientComponent } from './components/patient/view-patient/view-patient.component';
import { RegisterPatientComponent } from './components/patient/register-patient/register-patient.component';
import { AppointmentMenuComponent } from './components/appointment/appointment-menu/appointment-menu.component';
import { RegisterAppointmentComponent } from './components/appointment/register-appointment/register-appointment.component';
import { ViewAppointmentComponent } from './components/appointment/view-appointment/view-appointment.component';
import { AllAppointmentComponent } from './components/appointment/all-appointment/all-appointment.component';
import { BillingMenuComponent } from './components/billing/billing-menu/billing-menu.component';
import { AddBillComponent } from './components/billing/add-bill/add-bill.component';
import { EditDoctorComponent } from './components/doctor/edit-doctor/edit-doctor.component';
import { EditAppointmentComponent } from './components/appointment/edit-appointment/edit-appointment.component';
import { EditPatientComponent } from './components/patient/edit-patient/edit-patient.component';
import { EditBillComponent } from './components/billing/edit-bill/edit-bill.component';
import { ViewBillComponent } from './components/billing/view-bill/view-bill.component';
import { SingleBillComponent } from './components/billing/single-bill/single-bill.component';
import { AddMedicalRecordComponent } from './components/medical-record/add-medical-record/add-medical-record.component';
import { AllMedicalRecordComponent } from './components/medical-record/all-medical-record/all-medical-record.component';
import { EditMedicalRecordComponent } from './components/medical-record/edit-medical-record/edit-medical-record.component';
import { ViewMedicalRecordComponent } from './components/medical-record/view-medical-record/view-medical-record.component';
import { MedicalMenuComponent } from './components/medical-record/medical-menu/medical-menu.component';
import { EditUserComponent } from './components/register/edit-user/edit-user.component';
import { UserMenuComponent } from './components/register/user-menu/user-menu.component';
import { CommonModule } from '@angular/common';



// ✅ Appointment Components


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AdminComponent,
    MedicalRecordComponent,
    BillingComponent,
    AppointmentComponent,
    PatientComponent,
    DoctorComponent,
    ContactComponent,
    AboutComponent,
    AdminMenuComponent,
    DoctorMenuComponent,
    RegisterDoctorComponent,
    ViewDoctorComponent,
    AllDoctorsComponent,
    UserComponent,
    AllUserComponent,
    ViewUserComponent,
    AllPatientComponent,
    PatientMenuComponent,
    ViewPatientComponent,
    RegisterPatientComponent,
    AppointmentMenuComponent,
    RegisterAppointmentComponent,
    ViewAppointmentComponent,
    AllAppointmentComponent,
    BillingMenuComponent,
    AddBillComponent,
    EditDoctorComponent,
    EditAppointmentComponent,
    EditPatientComponent,
    EditBillComponent,
    ViewBillComponent,
    SingleBillComponent,
    AddMedicalRecordComponent,
    AllMedicalRecordComponent,
    EditMedicalRecordComponent,
    ViewMedicalRecordComponent,
    MedicalMenuComponent,
    EditUserComponent,
    UserMenuComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,               // ✅ ngModel ke liye FormsModule import karo
    ReactiveFormsModule,       // ✅ Reactive Form ke liye ReactiveFormsModule import karo
    HttpClientModule,   // ✅ API ke liye HttpClientModule import karo
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
