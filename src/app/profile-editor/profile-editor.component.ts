import { Component } from '@angular/core';
import { FormBuilder,  FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthday: ['', Validators.required],
    email: new FormControl('', Validators.compose([
      Validators.email,
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    hobbies: this.fb.array([
      this.fb.control('')
    ])
  });

  frameworks = [
    "Angular",
    "React",
    "Vue"
  ];

  angularVersions = [
    "1.1.1",
    "1.2.1",
    "1.3.3"
  ];

  reactVersions = [
    "2.1.2",
    "3.2.4",
    "4.3.1"
  ];

  vueVersions = [
    "3.3.1",
    "5.2.1",
    "5.1.3"
  ];

  select = ""

  public change( event: any ) {
    this.select = event.target.value;
  }

  get hobbies() {
    return this.profileForm.get('hobbies') as FormArray;
  }

  get email() {
    return this.profileForm.get('email');
  }

  constructor(private fb: FormBuilder) { }

  addHobbie() {
    this.hobbies.push(this.fb.control(''));
  }

  email_validation = [
    { type: 'required', message: 'Email is required' },
    { type: 'pattern', message: 'Enter a valid email' }
  ]
}
