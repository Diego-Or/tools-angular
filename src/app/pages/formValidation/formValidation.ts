import { Component, OnInit, signal } from '@angular/core';

@Component({
  // selector: 'counter',
  templateUrl: './formValidation.html',
  styleUrls: ['./formValidation.scss', './../../app.scss']
})

export class formValidationPageComponent{

  contador = signal(0);

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  submitForm() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        // if (!form.checkValidity()) {
        //   event.preventDefault()
        //   event.stopPropagation()
        // }

        form.classList.add('was-validated')
      }, false)
    })
  }
}
