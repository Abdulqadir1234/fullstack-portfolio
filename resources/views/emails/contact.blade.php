<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #4f46e5, #7c3aed); padding: 30px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 22px; }
        .header p { color: #c7d2fe; margin: 8px 0 0; font-size: 14px; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; }
        .field-label { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; margin-bottom: 4px; font-weight: 600; }
        .field-value { font-size: 15px; color: #1e293b; line-height: 1.6; }
        .message-box { background: #f8fafc; border-left: 4px solid #4f46e5; padding: 16px; border-radius: 0 8px 8px 0; margin-top: 4px; }
        .footer { text-align: center; padding: 20px; background: #f8fafc; border-top: 1px solid #e2e8f0; }
        .footer p { color: #94a3b8; font-size: 12px; margin: 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Message</h1>
            <p>Someone reached out via your portfolio</p>
        </div>
        <div class="content">
            <div class="field">
                <div class="field-label">From</div>
                <div class="field-value">{{ $contact->name }}</div>
            </div>
            <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">
                    <a href="mailto:{{ $contact->email }}" style="color: #4f46e5; text-decoration: none;">{{ $contact->email }}</a>
                </div>
            </div>
            @if($contact->subject)
            <div class="field">
                <div class="field-label">Subject</div>
                <div class="field-value">{{ $contact->subject }}</div>
            </div>
            @endif
            <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">
                    <div class="field-value">{!! nl2br(e($contact->message)) !!}</div>
                </div>
            </div>
        </div>
        <div class="footer">
            <p>This message was sent from your portfolio contact form.</p>
        </div>
    </div>
</body>
</html>
