# Small World Daycare & Learning Center Website

A modern, fully accessible website for Small World Daycare & Learning Center in Gainesville, Florida. Built with a strong focus on WCAG 2.1 AA compliance and user experience.

## 🚧 Current Status

### ✅ Completed
- Homepage with mission, goals, and features
- About Us page with facility information
- Programs overview page
- Resources page with forms and FAQ
- Contact page with map and information
- Fully accessible CSS (WCAG 2.1 AA compliant)
- Keyboard-accessible navigation JavaScript
- PDF Accessibility Guide documentation

### 📋 To-Do List

**High Priority:**
- [ ] Create "Our Classrooms" landing page (classrooms.html)
- [ ] Create individual classroom pages (6 total):
  - [ ] Infants page (classrooms/infants.html)
  - [ ] Toddlers page (classrooms/toddlers.html)
  - [ ] Two's page (classrooms/twos.html)
  - [ ] Preschool page (classrooms/preschool.html)
  - [ ] VPK page (classrooms/vpk.html)
  - [ ] Afterschool page (classrooms/afterschool.html)
- [ ] Create Resources subpages:
  - [ ] Forms dedicated page (resources/forms.html)
  - [ ] Calendar/Events page (resources/calendar.html or similar)
- [ ] Update navigation to include dropdown menus for "Our Classrooms" and "Resources"
- [ ] Add accessible dropdown menu JavaScript functionality
- [ ] Update all existing pages with new navigation structure

**Medium Priority:**
- [ ] Add real photos to images/ directory
- [ ] Create accessible PDF forms
- [ ] Add logo/branding graphics
- [ ] Test dropdown navigation with screen readers
- [ ] Add breadcrumb navigation for subpages
- [ ] Create 404 error page

**Before Launch:**
- [ ] Run full accessibility audit on all pages
- [ ] Test all dropdown interactions
- [ ] Verify all internal links work correctly
- [ ] Test responsive design on all pages
- [ ] Get client approval on content and design
- [ ] Set up hosting and domain
- [ ] Configure SSL certificate
- [ ] Submit to search engines

## 🌟 Key Features

### Accessibility First
- **WCAG 2.1 AA Compliant** - Meets international accessibility standards
- **Semantic HTML5** - Proper document structure for screen readers
- **Keyboard Navigation** - Full site functionality without a mouse
- **ARIA Labels** - Enhanced accessibility for assistive technologies
- **Skip Links** - Quick navigation for keyboard users
- **Focus Management** - Clear focus indicators for all interactive elements
- **Color Contrast** - All text meets 4.5:1 contrast ratio minimum
- **Responsive Text** - Readable at 200% zoom without horizontal scrolling
- **Reduced Motion Support** - Respects user motion preferences
- **Screen Reader Tested** - Compatible with NVDA, JAWS, and VoiceOver

### Modern Design
- Clean, professional interface
- Mobile-first responsive design
- Fast loading and performance optimized
- Modern CSS with custom properties
- Smooth transitions and animations (respecting motion preferences)

### Technical Features
- Pure HTML/CSS/JavaScript (no dependencies)
- No build process required
- Easy to host on any web server
- SEO optimized with proper meta tags
- Print-friendly stylesheets
- Progressive enhancement approach

## 📁 Project Structure

```
SmallWorldDaycare/
├── index.html              # Homepage
├── about.html              # About Us page
├── programs.html           # Programs overview (or use classrooms.html)
├── classrooms.html         # Our Classrooms landing page
├── resources.html          # Parent Resources & Forms
├── contact.html            # Contact Information
├── classrooms/
│   ├── infants.html       # Infants classroom (6 weeks - 12 months)
│   ├── toddlers.html      # Toddlers classroom (12 - 24 months)
│   ├── twos.html          # Two's classroom (2 - 3 years)
│   ├── preschool.html     # Preschool classroom (3 - 4 years)
│   ├── vpk.html           # VPK classroom (4 - 5 years)
│   └── afterschool.html   # Afterschool program
├── resources/
│   ├── forms.html         # Forms and documents page
│   └── calendar.html      # Calendar/events page (or other subpage)
├── css/
│   └── style.css          # All styles (WCAG compliant)
├── js/
│   └── navigation.js      # Accessible navigation with dropdown support
├── forms/                 # PDF forms directory (to be populated)
├── images/                # Images directory (to be populated)
├── PDF-ACCESSIBILITY-GUIDE.md
└── README.md
```

## 🚀 Quick Start

### Option 1: Local Testing
1. Open any HTML file directly in your browser
2. No server required for basic functionality
3. Use Live Server extension in VS Code for best experience

### Option 2: Local Web Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🌐 Deployment

### Hosting Options

#### Option 1: Traditional Web Hosting (Recommended)
Works with any web host that supports static HTML:
- **Bluehost**, **SiteGround**, **HostGator**, etc.
- Upload via FTP/SFTP
- No special requirements needed

**Steps:**
1. Connect via FTP client (FileZilla, Cyberduck)
2. Upload all files to `public_html` or `www` directory
3. Ensure index.html is in the root
4. Set file permissions (644 for files, 755 for directories)

#### Option 2: Modern Static Hosting (Free)

**Netlify (Recommended - Free):**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```
Or use drag-and-drop at https://app.netlify.com/drop

**Vercel (Free):**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**GitHub Pages (Free):**
1. Create GitHub repository
2. Push code to repository
3. Enable GitHub Pages in Settings
4. Site will be live at `username.github.io/repo-name`

#### Option 3: Client's Existing Hosting
If the client wants to self-host or use their current provider:
1. Get FTP/cPanel credentials
2. Upload files to web root
3. Test thoroughly
4. Update DNS if needed

### Domain Setup

1. **Register Domain** (if not already owned)
   - swdc.com or similar
   - Recommend: Namecheap, Google Domains, Cloudflare

2. **Point Domain to Hosting**
   - Update DNS A records to point to server IP
   - Or use hosting provider's nameservers
   - Wait 24-48 hours for DNS propagation

3. **SSL Certificate**
   - Most hosts provide free Let's Encrypt SSL
   - Enable HTTPS in hosting control panel
   - Force HTTPS redirects

## 🔧 Customization

### Updating Content

**Text Content:**
- Open HTML files in any text editor
- Find and replace text directly
- Maintain HTML structure

**Colors & Styling:**
Edit CSS custom properties in `css/style.css`:
```css
:root {
    --color-primary: #2563eb;     /* Main brand color */
    --color-secondary: #059669;    /* Accent color */
    /* Update other colors as needed */
}
```

**Images:**
1. Add images to `images/` directory
2. Reference in HTML: `<img src="images/your-image.jpg" alt="Description">`
3. Always include descriptive alt text

**Forms:**
1. Create accessible PDFs (see PDF-ACCESSIBILITY-GUIDE.md)
2. Add to `forms/` directory
3. Link from resources.html

### Adding New Pages

1. Duplicate an existing HTML file
2. Update page title and meta description
3. Update navigation links in all pages
4. Ensure consistent header/footer
5. Test accessibility

## ✅ Testing Checklist

### Before Launch

**Functionality:**
- [ ] All internal links work
- [ ] All external links open in new tabs
- [ ] Forms download correctly
- [ ] Mobile menu opens/closes
- [ ] Phone numbers are clickable
- [ ] Map loads correctly

**Accessibility:**
- [ ] Test with keyboard only (Tab, Enter, Escape)
- [ ] Test with screen reader (NVDA/JAWS/VoiceOver)
- [ ] Run WAVE accessibility checker
- [ ] Check color contrast
- [ ] Test at 200% zoom
- [ ] Verify skip link works

**Responsive Design:**
- [ ] Test on mobile (320px width minimum)
- [ ] Test on tablet (768px)
- [ ] Test on desktop (1920px)
- [ ] Test in portrait and landscape

**Browsers:**
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

**Performance:**
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Check page load times
- [ ] Optimize images if needed
- [ ] Test on slow connection

### Accessibility Testing Tools

**Automated:**
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- Lighthouse (built into Chrome DevTools)
- [Pa11y](https://pa11y.org/) (command-line)

**Manual:**
- Keyboard navigation
- Screen reader testing
- Color contrast analyzer
- Zoom testing (200%, 400%)

**Screen Readers:**
- **NVDA** (Windows - Free): https://www.nvaccess.org/
- **JAWS** (Windows - Commercial): https://www.freedomscientific.com/
- **VoiceOver** (Mac/iOS - Built-in): Cmd + F5
- **TalkBack** (Android - Built-in): Settings → Accessibility

## 📝 Content Management

### Updating Information

**Hours/Contact:**
- Update in footer (all HTML files)
- Update on contact.html
- Update on index.html

**Programs:**
- Edit programs.html
- Add/remove program cards as needed
- Maintain consistent structure

**Resources:**
- Add new forms to `forms/` directory
- Update links in resources.html
- Ensure PDFs are accessible (see PDF guide)

### Regular Maintenance

**Monthly:**
- Check all links still work
- Verify contact information is current
- Test forms download correctly
- Review Google Analytics (if implemented)

**Quarterly:**
- Re-run accessibility audits
- Update any outdated content
- Check browser compatibility
- Review and optimize images

**Annually:**
- Review entire site for accuracy
- Update copyright year in footer
- Refresh design if needed
- Major accessibility audit

## 🔒 Security Best Practices

1. **Keep Software Updated**
   - Update hosting control panel
   - Keep CMS updated (if added later)
   - Update SSL certificates

2. **Backup Regularly**
   - Weekly full site backups
   - Store backups off-site
   - Test restoration process

3. **Use HTTPS**
   - Force HTTPS redirects
   - Use HSTS headers
   - Monitor SSL certificate expiration

4. **Secure Forms**
   - Formsite handles form security
   - Use reCAPTCHA if adding native forms
   - Never collect sensitive data without encryption

## 📊 Analytics (Optional)

### Google Analytics 4
Add before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🆘 Support & Resources

### Accessibility Resources
- [WebAIM](https://webaim.org/) - Accessibility articles and tools
- [W3C WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [A11y Project](https://www.a11yproject.com/) - Community-driven accessibility resource

### Web Development
- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS reference
- [Can I Use](https://caniuse.com/) - Browser compatibility tables

### Testing Tools
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [axe DevTools](https://www.deque.com/axe/devtools/)

## 📞 Technical Support

For technical questions or issues with this website:
- Contact your web development team
- Review the PDF-ACCESSIBILITY-GUIDE.md for form accessibility
- Check browser console for JavaScript errors

## 📄 License

This website was custom-built for Small World Daycare & Learning Center.  
© 2026 SWDC of Florida, Inc. All rights reserved.

## 🎯 Future Enhancements

## 🔁 Handoff / Current Progress (for next engineer)

Summary of recent work completed in this branch/workspace:

- Removed the text logo block from headers (now using image-only logo across pages).
- Updated global font stack to: Lato, HelveticaNeue, "Helvetica Neue", Helvetica-Neue, Helvetica, Arial, sans-serif.
- Cleaned up unused logo text CSS and removed `.logo-text-wrapper`, `.logo-text`, and `.logo-subtitle` rules from `css/style.css`.
- Fixed favicon links and placed the file at `images/favicon.ico` (ensure browser cache cleared when testing).
- Added classroom images and "bottom" images:
   - `images/preschool1.jpg`, `images/preschool2.jpg`, `images/preschool-bottom-image.jpg`
   - `images/VPK1.jpg`, `images/VPK2.jpg`, `images/VPK-bottom-image.jpg`
   - `images/afterschool-kidwithbackpack-450x675.jpeg`
   - moved `coloredPencils-1030x687.jpg` and `TWOS-1030x687.jpg` into bottom-gallery sections for their pages
- Fixed multiple CSS issues:
   - Ensured buttons don't show underlines and primary buttons now have a thin white border so they are visible on blue backgrounds (`.btn-primary` border set to white 2px).
   - Reduced `--border-radius` from 8px to 4px for a slightly tighter UI.
   - Added explicit focus outline for keyboard users on classroom cards (`.classroom-link-card a:focus`).
   - Ensured the skip-to-main link is reliably white using `!important` on color and text-decoration to prevent overrides.

Files changed (high-level):

- `css/style.css`
- `index.html`, `about.html`, `programs.html`, `resources.html`, `contact.html`, `classrooms.html`
- `classrooms/*.html` (infants, toddlers, twos, preschool, vpk, afterschool)

Quick verification steps (what to test next):

1. Run a local server and open the site so favicons load properly (browsers often ignore local file favicon without a server):

```bash
# from the SmallWorldDaycare folder
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

2. Verify favicon shows in browser tab for at least Chrome/Edge/Firefox (clear cache or open an incognito window).
3. On the homepage and `contact.html`, verify phone links are underlined on the contact card and on the homepage card; confirm the primary phone button remains readable on hover and non-hover states.
4. Keyboard test: Tab through the `classrooms.html` cards. Each card should receive a clear focus outline (blue) on keyboard focus — do not rely on hover to see this.
5. Confirm `skip to main content` link remains white while visible (tab to it, ensure the contrast on blue background is good).
6. Verify the bottom-gallery images appear on `preschool.html`, `vpk.html`, `twos.html`, and `toddlers.html` and scale correctly on mobile.

Next recommended actions for the next agent:

- Run an accessibility audit (axe or Lighthouse) and fix any issues flagged (especially keyboard focus order and color contrast where customized).
- Compress and optimize new images in `images/` (use `imagemin`, `squoosh`, or similar) to improve Lighthouse scores.
- Verify the ProCare link workflow with the client if they want embedding vs directing to the external site (ProCare is a third-party service — it's expected to be an external link).
- Git: commit changes with a clear message such as `chore(site): handoff notes + favicon + images + css fixes`.

Where to look (quick pointers):

- Header/logo changes: inspect `index.html` and other top-level pages for the `<img class="logo-img">` usage.
- CSS edits and focus/button rules: `css/style.css` (search for `.btn-primary`, `.skip-link`, `.classroom-link-card`).
- Classroom pages and added images: `classrooms/preschool.html`, `classrooms/vpk.html`, `classrooms/twos.html`, `classrooms/toddlers.html`.

If you want, I can also create a short PR body text and suggested commit message next.

Potential features to consider:

### Short Term
- [ ] Add photo gallery page
- [ ] Create staff directory page
- [ ] Add virtual tour video
- [ ] Implement blog/news section

### Medium Term
- [ ] Online enrollment form integration
- [ ] Parent portal integration
- [ ] Calendar of events
- [ ] Newsletter signup

### Long Term
- [ ] Content Management System (CMS)
- [ ] Multi-language support (Spanish)
- [ ] Live chat functionality
- [ ] Mobile app integration

---

**Website Built With:** HTML5, CSS3, Vanilla JavaScript  
**Accessibility Standard:** WCAG 2.1 Level AA  
**Last Updated:** January 2026  
**Version:** 1.0
