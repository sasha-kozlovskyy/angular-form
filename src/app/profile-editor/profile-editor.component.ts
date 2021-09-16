import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    birthday: ['', Validators.required],
    email: ['', Validators.required],
    hobbies: this.fb.array([
      this.fb.control('')
    ])
  });

  frameworks = [
    "Angular",
    "React",
    "Vue"
  ];

  get hobbies() {
    return this.profileForm.get('hobbies') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  addHobbie() {
    this.hobbies.push(this.fb.control(''));
  }
}
