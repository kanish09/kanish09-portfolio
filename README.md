# Kanish Singha - Portfolio Website

A professional portfolio website built with the **MEAN Stack** (MongoDB, Express, Angular, Node.js) featuring a modern dark/light theme toggle.

## 🌟 Features

- ✨ **Dark/Light Theme Toggle** - Switch between themes with persistent localStorage
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🚀 **Fast Performance** - Optimized Angular app with efficient server
- 🎨 **Modern UI** - Clean, professional design with smooth animations
- 📊 **Project Showcase** - Display your projects with links and tech stack
- 💼 **Experience Timeline** - Chronological display of work history
- 🛠️ **Skills Section** - Organized by categories
- 📮 **Contact Form** - Get in touch with visitors
- 🔍 **SEO Friendly** - Meta tags and structured data

## 🛠️ Tech Stack

**Frontend:**
- Angular 15+
- HTML5 & CSS3
- Bootstrap 5
- Responsive Design

**Backend:**
- Node.js
- Express.js
- MongoDB
- RESTful APIs

**Deployment:**
- GitHub Pages
- Node.js Server

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (for local development)
- Angular CLI

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/kanish09/kanish09-portfolio.git
cd kanish09-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Update with your configuration:

```env
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=3000
GH_PAGES_URL=https://kanish09.github.io/kanish09-portfolio
```

### 4. Start MongoDB (if using locally)

```bash
mongod
```

### 5. Run Development Server

**Terminal 1 - Backend:**
```bash
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run serve
```

Visit `http://localhost:4200` in your browser.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This will build the Angular app and deploy to GitHub Pages.

## 📂 Project Structure

```
kanish09-portfolio/
├── backend/
│   ├── models/          # MongoDB schemas
│   ├── routes/          # Express routes
│   └── ...
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.component.css
│   ├── index.html
│   ├── styles.css       # Global styles with theme variables
│   └── main.ts
├── angular.json
├── package.json
├── server.js            # Express server entry point
├── tsconfig.json
└── README.md
```

## 🎨 Theme Customization

Colors are defined as CSS variables in `src/styles.css`:

```css
:root {
  --primary-color: #1a1a1a;
  --secondary-color: #2d2d2d;
  --accent-color: #00d4ff;
  --text-light: #e0e0e0;
  --bg-dark: #0a0e27;
}
```

Modify these values to customize the theme colors.

## 📝 Update Content

### Add Projects

Edit `src/app/app.component.html` and add new project cards in the projects section.

### Update Experience

Edit the timeline section in `src/app/app.component.html`.

### Modify Skills

Update the skills grid in `src/app/app.component.html`.

## 🔗 Important Links

- **Portfolio:** https://kanish09.github.io/kanish09-portfolio
- **GitHub:** https://github.com/kanish09
- **LinkedIn:** https://www.linkedin.com/in/kanishsingha09/
- **Email:** kanishsnh@gmail.com

## 📞 Contact

For inquiries or collaborations:

- Email: kanishsnh@gmail.com
- Phone: +91 8794642279
- LinkedIn: [Kanish Singha](https://www.linkedin.com/in/kanishsingha09/)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

Built with passion using the MEAN stack.

---

**Made with ❤️ by Kanish Singha**
