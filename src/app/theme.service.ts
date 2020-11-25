import { FormGroup, FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  darkModeForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.darkModeForm = fb.group({
      darkModeToggle: [true],
    });
  }

  getDarkMode = () => {
    return this.darkModeForm.get('darkModeToggle').value;
  };

  getClass = () => {
    if (this.getDarkMode()) return 'darkMode';
    else return 'lightMode';
  };
}
