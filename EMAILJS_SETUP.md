# EmailJS Setup Instructions

## How to Configure EmailJS for Your Portfolio Contact Form

### Step 1: Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up Free" and create your account
3. Verify your email address

### Step 2: Add an Email Service
1. After logging in, go to **Email Services** in the left sidebar
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account (the one that will receive messages)
5. Click **Create Service**
6. Copy the **Service ID** (e.g., `service_xxxxxxx`)

### Step 3: Create an Email Template
1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Design your email template:
   - **To Email**: {{to_email}}
   - **From Name**: {{from_name}}
   - **From Email**: {{from_email}}
   - **Subject**: {{subject}}
   - **Message**: {{message}}
4. Example template:
   ```
   You got a new message from your portfolio!

   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}

   Message:
   {{message}}
   ```
5. Save the template
6. Copy the **Template ID** (e.g., `template_xxxxxxx`)

### Step 4: Get Your Public Key
1. Go to **Account** (click your profile icon)
2. Scroll down to **API Keys** section
3. Copy your **Public Key**

### Step 5: Update Your Code
Open `resources/js/Components/Sections/Contact.jsx` and replace:
- `YOUR_SERVICE_ID` with your actual Service ID
- `YOUR_TEMPLATE_ID` with your actual Template ID
- `YOUR_PUBLIC_KEY` with your actual Public Key

Example:
```javascript
const serviceID = 'service_abc123';
const templateID = 'template_xyz789';
const publicKey = 'user_YourPublicKeyHere';
```

### Step 6: Test It!
1. Run your development server: `npm run dev`
2. Fill out the contact form
3. Submit it
4. Check your email - you should receive the message!

## Important Notes:
- The free tier allows 200 emails per month
- Make sure to use the correct variable names in your template: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- Keep your Public Key safe (it's okay to have it in frontend code for EmailJS)
