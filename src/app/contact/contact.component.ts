import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


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
    // Spam détecté
    return;
  }

  if (form.valid) {
    // Préparer les données à envoyer
    const payload = {
      access_key: '1932e8c9-f31d-4a77-a223-21416bf9c1cd', // clé Web3Forms
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    };

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then((data) => {
      if (data.success) {
        this._toastr.success('Message envoyé avec succès !');
        form.reset();
      } else {
        this._toastr.error('Erreur lors de l’envoi du message.');
        console.error('Web3Forms error:', data);
      }
    })
    .catch((err) => {
      this._toastr.error('Erreur lors de l’envoi du message.');
      console.error(err);
    });

  } else {
    this._toastr.warning('Veuillez remplir tous les champs.');
  }
}

}
