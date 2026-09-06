import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDarkTheme = true;
  navOpen = false;
  contactMessage = '';
  isSubmitting = false;

  ngOnInit() {
    this.loadTheme();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark-theme' : 'light-theme';
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }

  loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark-theme';
    this.isDarkTheme = savedTheme === 'dark-theme';
    document.body.className = savedTheme;
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  closeNav() {
    this.navOpen = false;
  }

  onSubmit() {
    this.isSubmitting = true;
    const formData = {
      name: (document.querySelector('input[name="name"]') as HTMLInputElement)?.value,
      email: (document.querySelector('input[name="email"]') as HTMLInputElement)?.value,
      message: (document.querySelector('textarea[name="message"]') as HTMLTextAreaElement)?.value
    };

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill all fields');
      this.isSubmitting = false;
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      this.contactMessage = 'Thank you! Your message has been sent successfully.';
      this.isSubmitting = false;
      
      // Reset form
      (document.querySelector('.contact-form') as HTMLFormElement)?.reset();
      
      // Clear message after 3 seconds
      setTimeout(() => {
        this.contactMessage = '';
      }, 3000);
    }, 1000);
  }
}
