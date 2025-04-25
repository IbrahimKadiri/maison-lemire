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
    if (form.value.honeypot) {
      // Spam détecté : champ honeypot rempli.
      return;
    }else {
      if (form.valid) {
      emailjs.send('service_z4iekcb', 'template_r0hgacd', {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message
      }, 'CntIaCD8Mo8x-2YsK').then(() => {
        this._toastr.success('Message envoyé avec succès !');
        form.reset();
      }).catch(() => {
        this._toastr.error('Erreur lors de l’envoi du message.');
      }); 
      } else {
        this._toastr.warning('Veuillez remplir tous les champs.');
      }
    }
   
  }
}
