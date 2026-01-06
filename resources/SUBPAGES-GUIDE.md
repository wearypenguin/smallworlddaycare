# Resources Subpages Guide

The main resources.html page currently combines forms and FAQ. Based on the original site structure, Resources may have had dedicated subpages.

## Potential Subpage Structure

### Option 1: Separate Forms Page (Recommended)
Create `resources/forms.html` as a dedicated forms download page, keeping the main resources.html as a hub.

**Benefits:**
- Cleaner organization
- Easier to find forms
- Can add more detailed form instructions

### Option 2: Keep Current Structure
Keep everything on resources.html with anchor links (#forms, #faq), which is simpler and works well for SEO.

**Current implementation uses this approach.**

## If Creating Subpages

### resources/forms.html
Move the forms grid from resources.html to dedicated page:
- All PDF form downloads
- Instructions for completing forms
- Link to online Formsite alternatives
- Contact info for help

### resources/calendar.html (or similar)
Possible additional resources page:
- School calendar
- Holiday closures
- Special events
- Parent nights
- Field trips

## Current Implementation

The main `resources.html` page currently includes:
1. Forms section (#forms)
2. Online services (ProCare, Formsite)
3. Community resources
4. FAQ section (#faq)

## Navigation Update Needed

In all HTML files, the Resources dropdown currently links to:
```html
<li><a href="resources.html#forms">Forms</a></li>
<li><a href="resources.html#faq">FAQ</a></li>
```

**If creating subpages, update to:**
```html
<li><a href="resources/forms.html">Forms</a></li>
<li><a href="resources/calendar.html">Calendar</a></li>
```

## Recommendation

**For Now:** Keep current structure with anchor links - it's simpler and fully accessible.

**Future:** If client needs more resources content, create subpages then.

## Pages to Create (Optional)

- [ ] resources/forms.html - Dedicated forms page
- [ ] resources/calendar.html - Events and calendar
- [ ] resources/handbook.html - Parent handbook online version
- [ ] resources/policies.html - Policies and procedures

**Priority:** Low - Current structure works well  
**Estimated Time:** 1-2 hours if needed  
**Dependencies:** Client request for expanded resources section
