import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDarkTheme = true;
  navOpen = false;
  contactMessage = '';
  messageType: 'success' | 'error' = 'success';
  isSubmitting = false;
  @ViewChild('contactForm') contactForm!: NgForm;

  constructor(private http: HttpClient) {}

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
    if (!this.contactForm.valid) {
      this.contactMessage = 'Please fill all fields correctly';
      this.messageType = 'error';
      return;
    }

    this.isSubmitting = true;
    const formData = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message
    };

    // Send to backend
    this.http.post('/api/contact/send', formData).subscribe(
      (response: any) => {
        this.contactMessage = 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.';
        this.messageType = 'success';
        this.isSubmitting = false;
        this.contactForm.resetForm();
        
        // Clear message after 5 seconds
        setTimeout(() => {
          this.contactMessage = '';
        }, 5000);
      },
      (error) => {
        console.error('Error sending message:', error);
        this.contactMessage = 'Error sending message. Please try again or contact me directly at kanishsnh@gmail.com';
        this.messageType = 'error';
        this.isSubmitting = false;
        
        // Clear message after 5 seconds
        setTimeout(() => {
          this.contactMessage = '';
        }, 5000);
      }
    );
  }
}
