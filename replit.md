# mObywatel - Polish ID Card Generator

## Overview
This is a static web application that simulates the Polish mObywatel (mobile citizen) ID card interface. The application is built with HTML, CSS, and JavaScript and serves as a demonstration/educational tool.

**Important:** This application does not generate real identity documents and is for personal use only.

## Project Structure
- **HTML Files**: Main pages for different features (gen.html, home.html, card.html, etc.)
- **assets/**: Core CSS and JavaScript files
  - CSS: main.css, bar.css, card.css, home.css, id.css, etc.
  - JS: bar.js, card.js, home.js, id.js, manifest.js, etc.
- **assetsdiff/**: Alternative/differential assets
- **Supporting folders**: more_files/, qr_files/, scanqr_files/, services_files/, showqr_files/
- **functions/**: Backend functions directory
- **server.py**: Python HTTP server configured for port 5000

## Technology Stack
- **Frontend**: Pure HTML, CSS, JavaScript
- **Backend**: Python 3.11 with built-in HTTP server
- **Server**: Runs on 0.0.0.0:5000 (required for Replit preview)

## Configuration
- **Development Server**: Python SimpleHTTPServer with cache control headers disabled
- **Port**: 5000 (frontend)
- **Cache Control**: Disabled to ensure updates are visible in Replit's iframe preview

## Entry Points
- **index.html**: Main entry point (redirects to gen.html)
- **gen.html**: ID generator page
- **home.html**: Home/documents page
- **card.html**: Card display page

## Recent Changes (Nov 25, 2025)
- Initial setup in Replit environment
- Extracted assets from mObywatelek_67-main.zip
- Created Python HTTP server with proper cache headers
- Configured workflow for web preview on port 5000
- Set up deployment configuration (VM deployment target)
- Added .gitignore for Python files

## Deployment
The project is configured for VM deployment using the Python HTTP server. The server runs continuously to serve the static files.
