import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

export function matchPasswordValidator(password: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const match = password.test(control.value);
    return !match ? {match: {value: control.value}} : null;
  };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router) { }

  get f() { return this.signUpForm.controls; }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required,
        matchPasswordValidator(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))])],
    });
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }

    this.authService.putSignUp(this.f.email.value, this.f.password.value)
      .subscribe(token => token.toString());
  }

}
