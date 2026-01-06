# Creating Remaining Classroom Pages

The `infants.html` page has been created as a complete template. Use it to create the other 5 classroom pages.

## Pages to Create

1. **classrooms/toddlers.html** (12-24 months)
2. **classrooms/twos.html** (2-3 years)
3. **classrooms/preschool.html** (3-4 years)
4. **classrooms/vpk.html** (4-5 years) - Emphasize free VPK program
5. **classrooms/afterschool.html** (School age)

## How to Create Each Page

### Step 1: Copy the Template
Copy `classrooms/infants.html` and rename it to the appropriate classroom name.

### Step 2: Update Content
For each new page, update the following sections:

#### 1. Meta Tags & Title
```html
<meta name="description" content="[Age group] care at Small World Daycare...">
<title>[Classroom Name] | Small World Daycare & Learning Center</title>
```

#### 2. Breadcrumb
```html
<li aria-current="page">[Classroom Name]</li>
```

#### 3. Hero Section
- Change emoji icon (👶 → 🧸 → 🎨 → 📚 → 🎓 → ⚽)
- Update `<h1>` to classroom name
- Update age range and description

#### 4. Main Content Sections
Update all content to be age-appropriate:

**"Our [Classroom] Program"** - Overview of the classroom

**"Daily Activities & Learning"** - Age-appropriate activities:
- Toddlers: Walking, language explosion, independence
- Two's: Potty training, pretend play, social skills
- Preschool: Pre-reading, math concepts, science
- VPK: Kindergarten readiness, letter recognition, numbers
- Afterschool: Homework help, enrichment activities, sports

**"What Makes Our [Classroom] Special"** - Features specific to that age:
- Update teacher ratios (check FL DCF requirements)
- Curriculum specifics
- Daily schedule

**"Sample Daily Routine"** - Age-appropriate schedule

### Step 3: Update Navigation
Ensure the current page is marked with `aria-current="page"` in the dropdown menu.

## Content Guidelines by Classroom

### Toddlers (12-24 months)
- Focus: Growing independence, language development, motor skills
- Activities: Walking, climbing, simple art, music
- Ratio: Check FL DCF (typically 1:6 or 1:8)
- Transitions: From bottles to cups, moving to one nap

### Two's (2-3 years)
- Focus: Potty training, social skills, creativity
- Activities: Art projects, dramatic play, outdoor play, stories
- Ratio: Check FL DCF (typically 1:11)
- Milestones: Speaking in sentences, following directions

### Preschool (3-4 years)
- Focus: School readiness, literacy, math, science
- Activities: Letters, numbers, experiments, group projects
- Ratio: Check FL DCF (typically 1:15 or 1:20)
- Skills: Writing name, counting, colors, shapes

### VPK (4-5 years)
- **IMPORTANT**: Emphasize this is Florida's FREE Voluntary Prekindergarten program
- Focus: Kindergarten preparation, academic skills
- Activities: Letter/sound recognition, writing, math concepts
- Ratio: VPK requirements (typically 1:11)
- Assessment: VPK assessments 3x per year
- Special note: "Free for Florida residents"

### Afterschool (School age)
- Focus: Homework completion, enrichment, recreation
- Activities: Homework help, STEM activities, sports, arts
- Transportation: Mention if pickup from local schools available
- Schedule: Typically 2:30 PM or 3:00 PM - 6:00 PM
- Summer: Note summer camp availability

## Images to Request from Client

For each classroom page, you'll eventually want:
- Photos of the actual classroom
- Children engaged in activities (with photo releases)
- Staff photos
- Classroom environment

## Accessibility Checklist for Each Page

- [ ] All headings in logical order (H1 → H2 → H3)
- [ ] Breadcrumb navigation works
- [ ] Dropdown menu accessible with keyboard
- [ ] All links have descriptive text
- [ ] Page tested with screen reader
- [ ] Mobile responsive
- [ ] Focus indicators visible

## Quick Creation Workflow

For fastest creation:
1. Copy infants.html 5 times
2. Use find/replace to change:
   - "Infants" → new classroom name
   - "6 weeks - 12 months" → new age range
   - "👶" → new emoji
3. Rewrite the main content sections
4. Update navigation aria-current
5. Test all pages

## After Creating All Pages

Update these files to link to new classroom pages:
- [x] classrooms.html (landing page already links to them)
- [ ] index.html (update "Programs" section if needed)
- [ ] Update navigation dropdown in ALL existing pages

---

**Priority:** High - These are core content pages  
**Estimated Time:** 2-3 hours for all 5 pages  
**Dependencies:** Client input on specific curriculum details
