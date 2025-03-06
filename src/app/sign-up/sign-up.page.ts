import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterModule], // Agrega RouterModule si usas [routerLink]
})
export class SignUpPage implements OnInit{

  ngOnInit(): void {
  }

  email: string = '';
  password: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async onSubmit() {
  try {
    await this.auth.register(this.email, this.password);
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Your account has been created',
      buttons: ['OK']
    });
    await alert.present();
    this.router.navigate(['/login']);
  } catch (error: any) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: error.message,
      buttons: ['OK']
    });
    await alert.present();
  }
  }
}
