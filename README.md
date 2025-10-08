# 🇰🇭 LearnKhmer - Interactive Khmer Alphabet Learning Platform

![LearnKhmer Banner](./Image/G6_Logo.png)

A modern, interactive web application designed to help users learn the Khmer (Cambodian) alphabet with authentic pronunciation guides and engaging visual design.

## ✨ Features

- **🎵 Audio Pronunciation**: 104+ high-quality MP3 files for accurate pronunciation
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **🎨 Modern UI/UX**: Beautiful gradients, glass morphism, and smooth animations
- **📚 Comprehensive Learning**: Complete coverage of consonants, vowels, and independent vowels
- **🌐 Multi-Category**: Organized learning with different consonant and vowel categories
- **💨 Fast Loading**: Optimized for quick loading and smooth performance

## 🚀 Live Demo

**Deployed on Vercel**: [https://learn-khmer.vercel.app](https://learn-khmer.vercel.app)

## 📁 Project Structure

```
LearnKhmer/
├── HTML/                    # HTML pages
│   ├── index.html          # Homepage
│   ├── constant.html       # Consonants learning
│   ├── vowel.html          # Vowels learning  
│   ├── independent.html    # Independent vowels
│   └── contact.html        # Contact page
├── CSS/                     # Stylesheets
│   ├── theme.css           # Modern theme system
│   ├── header_footer.css   # Layout styles
│   ├── consonant.css       # Consonant page styles
│   ├── vowel.css           # Vowel page styles
│   ├── independent.css     # Independent vowel styles
│   ├── contact.css         # Contact page styles
│   └── bootstrap.min.css   # Bootstrap framework
├── JS/                      # JavaScript functionality
│   ├── index.js            # Homepage interactions
│   ├── constant.js         # Consonant page logic
│   ├── vowel.js            # Vowel page logic
│   ├── independent.js      # Independent vowel logic
│   ├── contact.js          # Contact form logic
│   └── jquery-3.6.1.js     # jQuery library
├── Image/                   # Visual assets
│   ├── G6_Logo.png         # Application logo
│   ├── cate1.png           # Consonants category
│   ├── cate2.png           # Vowels category
│   ├── cate3.png           # Independent vowels
│   └── ...                 # Cultural images
├── Audio Files/             # Pronunciation guides
│   ├── constant/           # 33 consonant sounds
│   ├── vowel/              # 24 vowel sounds
│   ├── special/            # 13 independent vowels
│   ├── category2/          # Additional consonants
│   └── category3/          # Extended consonants
├── vercel.json             # Vercel deployment config
├── package.json            # Project metadata
└── README.md               # This file
```

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Variables, Bootstrap 5.2.2
- **Fonts**: Google Fonts (Hanuman for Khmer text)
- **Icons**: Font Awesome 5.15.4
- **Audio**: MP3 format for cross-browser compatibility
- **Deployment**: Vercel Static Site Hosting

## 📊 Audio Content

| Category | Count | Description |
|----------|-------|-------------|
| **Basic Consonants** | 33 files | Core Khmer consonants (c1.mp3 - c33.mp3) |
| **Vowels** | 24 files | Khmer vowels (v1.mp3 - v24.mp3) |
| **Independent Vowels** | 13 files | Standalone vowels (in1.mp3 - in13.mp3) |
| **Category 2** | 15 files | Additional consonants (cc1.mp3 - cc15.mp3) |
| **Category 3** | 19+ files | Extended consonants (ccc1.mp3 - ccc19.mp3) |
| **Total** | 104+ files | Complete pronunciation library |

## 🚀 Deployment Guide

### Prerequisites
- Node.js (v14 or higher)
- Git
- Vercel CLI (optional)

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Prepare your repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: LearnKhmer application"
   ```

2. **Push to GitHub**:
   ```bash
   # Create a new repository on GitHub first
   git remote add origin https://github.com/yourusername/learn-khmer.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration from `vercel.json`
   - Click "Deploy"

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from project directory**:
   ```bash
   cd E:\LearnKhmer
   vercel --prod
   ```

### Method 3: Drag & Drop Deployment

1. **Prepare files**:
   - Zip the entire project folder (excluding .git if present)
   - Or prepare the folder for drag & drop

2. **Deploy**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Drag and drop your project folder
   - Vercel will automatically configure and deploy

## ⚙️ Configuration Files

### vercel.json
Pre-configured for optimal static site hosting with:
- Custom routing for clean URLs
- Proper MIME types for audio files
- Caching headers for performance
- Static file serving for all assets

### package.json
Includes:
- Project metadata and keywords
- Development scripts
- Browser compatibility settings
- SEO-friendly information

## 🎨 Design Features

### Visual Design
- **Modern Gradients**: Purple-to-blue gradient backgrounds
- **Glass Morphism**: Semi-transparent headers with blur effects
- **3D Card Effects**: Interactive learning cards with hover animations
- **Smooth Animations**: Fade-ins, slide-ins, and micro-interactions

### User Experience
- **Mobile-First**: Responsive design starting from mobile devices
- **Touch-Friendly**: Large touch targets for mobile users
- **Fast Loading**: Optimized images and efficient CSS
- **Accessibility**: Proper contrast ratios and focus states

## 📱 Browser Support

- ✅ Chrome (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Edge (90+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/learn-khmer.git
   cd learn-khmer
   ```

2. **Install dependencies** (optional):
   ```bash
   npm install
   ```

3. **Start local server**:
   ```bash
   # Using npm script
   npm run dev
   
   # Or using Python
   python -m http.server 8000
   
   # Or using Live Server (VS Code extension)
   # Right-click on HTML/index.html -> Open with Live Server
   ```

4. **Access the application**:
   - Open `http://localhost:3000` (if using npm script)
   - Or `http://localhost:8000` (if using Python)

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/AmazingFeature`
3. **Commit your changes**: `git commit -m 'Add some AmazingFeature'`
4. **Push to the branch**: `git push origin feature/AmazingFeature`
5. **Open a Pull Request**

### Areas for Contribution
- 🎵 Additional audio pronunciations
- 🌐 Translations to other languages
- 🎨 UI/UX improvements
- 📱 Mobile app version
- 🔧 Performance optimizations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Khmer Language Experts**: For pronunciation guidance and cultural accuracy
- **Audio Sources**: Authentic Khmer pronunciation recordings
- **Design Inspiration**: Modern web design principles and Cambodian cultural elements
- **Educational Resources**: 
  - [MyLanguages.org](https://mylanguages.org/learn_khmer.php)
  - [Ling App](https://ling-app.com/km/khmer-alphabet/)
  - [Wikipedia Khmer Script](https://en.wikipedia.org/wiki/Khmer_script)

## 📞 Contact

- **Email**: contact@learnkhmer.com
- **Location**: Phnom Penh, Cambodia
- **Project Link**: [https://github.com/yourusername/learn-khmer](https://github.com/yourusername/learn-khmer)

## 🎯 Educational Mission

LearnKhmer aims to preserve and promote the beautiful Khmer language and script through modern web technology. Our goal is to make learning accessible, engaging, and culturally authentic for learners worldwide.

---

**Made with ❤️ for the Khmer language learning community**

*Ready to deploy! 🚀*
