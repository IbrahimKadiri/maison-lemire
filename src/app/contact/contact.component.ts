import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private _toastr: ToastrService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {

      this._toastr.success('Message envoyé avec succès !');
      // CONFIGURATION EMAILJS A FAIRE !!
      /* emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
      }, 'YOUR_USER_ID').then(() => {
        this._toastr.success('Message envoyé avec succès !');
        form.reset();
      }).catch(() => {
        this._toastr.error('Erreur lors de l’envoi du message.');
      }); */ 
    } else {
      console.log('error')
      this._toastr.error('Veuillez remplir tous les champs.');
    }
  }
}
