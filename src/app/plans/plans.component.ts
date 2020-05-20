import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/validators';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

registerForm: FormGroup;
submitted = false;
titles = ['Mr', 'Mrs', 'Miss', 'Ms'];
genders = ['Male', 'Female', 'Others'];
states = ['Kerala', 'Other States'];
plans = ['1A', '2A', '2A1C', '2A2C', '1A1C', '1A2C'];
sum_insured = ['300000', '500000', '1000000', '1500000', '2500000'];

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {

  	this.registerForm = this.formBuilder.group({
            title: ['Mr', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            gender: ['Male', Validators.required],
            dob: ['', Validators.required],
            mobile: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            policy_start_date: ['', Validators.required],
            policy_end_date: ['', Validators.required],
            state: ['Kerala', Validators.required],
            plan: ['1A', Validators.required],
            amount_insure: ['300000', Validators.required],
            premimum_inclusive_tax: ['', Validators.required]
        });

  }

	// convenience getter for easy access to form fields
	get f() { return this.registerForm.controls; }

	onSubmit() {
	    this.submitted = true;

	    // stop here if form is invalid
	    if (this.registerForm.invalid) {
	        return;
	    }

	    // display form values on success
	    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
	}

	onReset() {
	    this.submitted = false;
	    this.registerForm.reset();
	}

}
