import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

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

  ngOnInit() {
    this.loadTheme();
    // Initialize EmailJS
    emailjs.init('5NhRmTa1sZI3xS0vR'); // Public Key
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
    
    const templateParams = {
      to_email: 'kanishsnh@gmail.com',
      from_email: this.contactForm.value.email,
      from_name: this.contactForm.value.name,
      message: this.contactForm.value.message
    };

    emailjs.send('service_portfolio', 'template_portfolio', templateParams)
      .then((response) => {
        console.log('Email sent successfully:', response);
        this.contactMessage = 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.';
        this.messageType = 'success';
        this.isSubmitting = false;
        this.contactForm.resetForm();
        
        // Clear message after 5 seconds
        setTimeout(() => {
          this.contactMessage = '';
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        this.contactMessage = 'Error sending message. Please try again or contact me directly at kanishsnh@gmail.com';
        this.messageType = 'error';
        this.isSubmitting = false;
        
        // Clear message after 5 seconds
        setTimeout(() => {
          this.contactMessage = '';
        }, 5000);
      });
  }
}
