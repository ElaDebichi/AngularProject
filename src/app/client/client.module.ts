import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    ClientComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
