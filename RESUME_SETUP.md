# Resume Setup Instructions

## How to Add Your Resume PDF

1. **Create your resume PDF**
   - Export your resume as a PDF file
   - Name it exactly: `resume.pdf`

2. **Place the PDF in the public folder**
   - Copy `resume.pdf` to: `public/resume.pdf`
   - This makes it accessible at: `http://yoursite.com/resume.pdf`

3. **Update your contact information**
   - Open `resources/js/Pages/Resume.jsx`
   - Update the following details:
     - Email address (line 73)
     - Phone number (line 80)
     - Location (line 87)
     - Stats section (lines 118-121) - Update numbers as needed

4. **Test it**
   - Run your development server: `npm run dev`
   - Visit: `http://localhost:5173/resume`
   - Click the "Resume" button in the navbar
   - Verify the PDF loads and download works

## File Structure
```
public/
  └── resume.pdf  ← Place your PDF here

resources/js/Pages/
  └── Resume.jsx  ← Resume page component (update your info here)
```

## Features
✅ Resume icon in navbar (desktop & mobile)
✅ Dedicated resume page
✅ PDF viewer embedded
✅ Download button with animation
✅ Responsive design
✅ Quick stats section
