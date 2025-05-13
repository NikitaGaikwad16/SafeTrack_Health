import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { PatientComponent } from './components/patient/patient.component';
import { RegisterComponent } from './components/register/register.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { BillingComponent } from './components/billing/billing.component';
import { UserComponent } from './components/user/user.component';

import { ViewUserComponent } from './components/view-user/view-user.component';
import { RegisterDoctorComponent } from './components/doctor/register-doctor/register-doctor.component';
import { RegisterPatientComponent } from './components/patient/register-patient/register-patient.component';
import { AllPatientComponent } from './components/patient/all-patient/all-patient.component';
import { ViewPatientComponent } from './components/patient/view-patient/view-patient.component';
import { RegisterAppointmentComponent } from './components/appointment/register-appointment/register-appointment.component';
import { AllAppointmentComponent } from './components/appointment/all-appointment/all-appointment.component';
import { ViewAppointmentComponent } from './components/appointment/view-appointment/view-appointment.component';
import { AddBillComponent } from './components/billing/add-bill/add-bill.component';
import { AllDoctorsComponent } from './components/doctor/all-doctors/all-doctors.component';
import { EditDoctorComponent } from './components/doctor/edit-doctor/edit-doctor.component';
import { ViewDoctorComponent } from './components/doctor/view-doctor/view-doctor.component';
import { EditAppointmentComponent } from './components/appointment/edit-appointment/edit-appointment.component';
import { EditPatientComponent } from './components/patient/edit-patient/edit-patient.component';
import { ViewBillComponent } from './components/billing/view-bill/view-bill.component';
import { SingleBillComponent } from './components/billing/single-bill/single-bill.component';
import { EditBillComponent } from './components/billing/edit-bill/edit-bill.component';
import { AddMedicalRecordComponent } from './components/medical-record/add-medical-record/add-medical-record.component';
import { AllMedicalRecordComponent } from './components/medical-record/all-medical-record/all-medical-record.component';
import { ViewMedicalRecordComponent } from './components/medical-record/view-medical-record/view-medical-record.component';
import { MedicalRecordComponent } from './components/medical-record/medical-record.component';
import { EditMedicalRecordComponent } from './components/medical-record/edit-medical-record/edit-medical-record.component';
import { EditUserComponent } from './components/register/edit-user/edit-user.component';
import { AllUserComponent } from './components/register/all-user/all-user.component';



const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
  path:'login',
  component:LoginComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'doctor',
    component:DoctorComponent
  },
  {
    path:'all-doctors',
    component:AllDoctorsComponent
  },
  {
    path:'edit-doctor',
    component:EditDoctorComponent
  },
  {
    path:'view-doctor',
    component:ViewDoctorComponent
  },
  {
    path:'all-appointment',
    component:AllAppointmentComponent
  },
  {
    path:'allmedical-record',
    component:AllMedicalRecordComponent
  },
  {
    path:'patient',
    component:PatientComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  { path: 'billing',
    component: BillingComponent },

  { path: 'appointment',
   component: AppointmentComponent
  },
  {
    path:'edit-user',
    component:EditUserComponent
  },
  {
    path:'all-users',
    component:AllUserComponent
  },
  {
    path:'view-user',
    component:ViewUserComponent
  },
  {
    path:'register-doctor',
    component:RegisterDoctorComponent
  },
  {
    path:'register-patient',
    component:RegisterPatientComponent
  },
  {
    path:'all-patients',
    component:AllPatientComponent
  },
  {
    path:'view-patient',
    component:ViewPatientComponent
  },
  {
    path:'edit-patient',
    component:EditPatientComponent
  },
  {
    path:'register-appointment',
    component:RegisterAppointmentComponent
  },
  {
    path:'all-appointments',
    component:AllAppointmentComponent
  },
  {
    path:'view-appointment',
    component:ViewAppointmentComponent
  },
  {
    path:'edit-appointment',
    component:EditAppointmentComponent
  },
  {
    path:'add-billing',
  component: AddBillComponent
},
{
  path:'all-billings',
  component:ViewBillComponent
},
{
  path:'view-billing',
  component:SingleBillComponent
},
{
  path:'edit-bill',
  component:EditBillComponent
},
{
  path:'medical',
  component:MedicalRecordComponent
},
{
  path:'add-medical-record',
  component:AddMedicalRecordComponent
},
{
  path:'all-medical-records',
  component:AllMedicalRecordComponent
},
{
  path:'view-medical-record',
  component:ViewMedicalRecordComponent
},
{
  path:'edit-medicalrecord',
  component:EditMedicalRecordComponent
},
{
  path:'medical-record',
  component:MedicalRecordComponent
},

{ path: 'edit-user/:username',
  component: EditUserComponent
 }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
