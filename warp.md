# LearnKhmer Project Documentation

## Project Overview
LearnKhmer is a web application designed to help users learn the Khmer (Cambodian) alphabet. The application provides an interactive learning experience with audio pronunciation guides for consonants, vowels, and independent vowels.

## Project Structure

### Root Directory: `E:\LearnKhmer`

```
E:\LearnKhmer/
├── .vscode/                    # VS Code configuration
│   └── settings.json
├── HTML/                       # HTML pages
│   ├── index.html             # Main homepage
│   ├── constant.html          # Consonants learning page
│   ├── vowel.html             # Vowels learning page
│   ├── independent.html       # Independent vowels page
│   └── contact.html           # Contact page
├── CSS/                        # Stylesheets
│   ├── bootstrap.min.css      # Bootstrap framework
│   ├── header_footer.css      # Header and footer styles
│   ├── consonant.css          # Consonants page styles
│   ├── vowel.css              # Vowels page styles
│   ├── independent.css        # Independent vowels styles
│   └── contact.css            # Contact page styles
├── JS/                         # JavaScript files
│   ├── jquery-3.6.1.js        # jQuery library
│   ├── index.js               # Homepage functionality
│   ├── constant.js            # Consonants page logic
│   ├── vowel.js               # Vowels page logic
│   ├── independent.js         # Independent vowels logic
│   └── contact.js             # Contact page functionality
├── Image/                      # Image assets
│   ├── G6_Logo.png            # Application logo
│   ├── cate1.png              # Consonants category image
│   ├── cate2.png              # Vowels category image
│   ├── cate3.png              # Independent vowels category image
│   ├── khmer_alphabet_grey2.jpg.jpg  # Khmer alphabet background
│   ├── languageoldkhmer-For-Web.jpg  # Historical Khmer language image
│   └── monument.jpg           # Cambodian monument image
├── constant/                   # Consonant audio files (33 files)
│   ├── c1.mp3 - c33.mp3       # Individual consonant pronunciations
├── vowel/                      # Vowel audio files (24 files)
│   ├── v1.mp3 - v24.mp3       # Individual vowel pronunciations
├── special/                    # Independent vowel audio files
│   ├── in1.mp3 - in13.mp3     # Independent vowel pronunciations
├── category2/                  # Additional consonant audio (15 files)
│   ├── cc1.mp3 - cc15.mp3     # Secondary consonant pronunciations
├── category3/                  # Extended consonant audio (19 files)
│   ├── ccc1.mp3 - ccc19.mp3   # Extended consonant pronunciations
└── warp.md                     # This documentation file
```

## Application Features

### 1. Homepage (`index.html`)
- **Navigation**: Responsive navigation with mobile menu support
- **Carousel**: Image slideshow featuring Khmer alphabet and cultural images
- **Categories**: Three main learning sections:
  - **Consonants**: 33 Khmer consonants with pronunciation guide
  - **Vowels**: 24 vowels that work with consonants
  - **Independent Vowels**: 13 vowels that can stand alone

### 2. Learning Sections
- **Consonants Page**: Interactive learning for Khmer consonants
- **Vowels Page**: Vowel pronunciation and usage
- **Independent Vowels**: Standalone vowel characters
- **Contact Page**: Information and contact details

### 3. Audio System
- **Total Audio Files**: 104+ pronunciation files
  - 33 basic consonants (`c1.mp3` - `c33.mp3`)
  - 24 vowels (`v1.mp3` - `v24.mp3`)
  - 13 independent vowels (`in1.mp3` - `in13.mp3`)
  - 15 additional consonants (`cc1.mp3` - `cc15.mp3`)
  - 19 extended consonants (`ccc1.mp3` - `ccc19.mp3`)

## Technology Stack

### Frontend
- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with Bootstrap 5.2.2 framework
- **JavaScript**: Interactive functionality with jQuery 3.6.1
- **Bootstrap**: Responsive design framework
- **Font Awesome**: Icon library
- **Google Fonts**: Hanuman font for Khmer text

### External Resources
- Bootstrap CDN
- Font Awesome CDN
- Google Fonts (Hanuman)
- jQuery library

## Key Components

### Navigation System
- Responsive design with mobile hamburger menu
- Sticky header with logo and navigation links
- Social media integration (Twitter, Instagram, Facebook, Telegram)

### Learning Interface
- Category-based learning approach
- Audio pronunciation for each character
- Visual representation with images
- Interactive user interface

### Educational Content
- **Consonants**: Foundation characters that determine vowel pronunciation
- **Vowels**: Characters used with consonants (2 possible pronunciations)
- **Independent Vowels**: Characters that can be used without consonants

## File Naming Conventions

### Audio Files
- **Consonants**: `c[number].mp3` (c1.mp3, c2.mp3, ...)
- **Vowels**: `v[number].mp3` (v1.mp3, v2.mp3, ...)
- **Independent**: `in[number].mp3` (in1.mp3, in2.mp3, ...)
- **Category 2**: `cc[number].mp3` (cc1.mp3, cc2.mp3, ...)
- **Category 3**: `ccc[number].mp3` (ccc1.mp3, ccc2.mp3, ...)

### HTML/CSS/JS Files
- Consistent naming matching page functionality
- Modular approach with separate files for each section

## Development Environment
- **OS**: Windows
- **Shell**: PowerShell 5.1
- **IDE**: Visual Studio Code (configured)
- **Current Directory**: `E:\LearnKhmer`

## Purpose & Goals
This application serves as an educational tool to:
1. Teach Khmer alphabet fundamentals
2. Provide authentic pronunciation guides
3. Offer structured learning progression
4. Support Khmer language preservation and learning

## Notes for Development
- All paths use absolute references (`/CSS/`, `/JS/`, `/Image/`)
- Mobile-first responsive design approach
- Modular file structure for maintainability
- Audio-first learning methodology
- Cultural context integration through imagery

---
*This documentation provides a comprehensive overview of the LearnKhmer project structure and components for development reference.*
