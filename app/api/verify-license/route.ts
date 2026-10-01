import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { licenseKey } = body;

        if (!licenseKey) {
            return NextResponse.json({ valid: false, message: "License key is missing" }, { status: 400 });
        }

        // 🚀 FIX: 'test' की जगह 'live' कर दिया है!
        const dodoApiUrl = `https://live.dodopayments.com/licenses/validate`; 
        
        const dodoResponse = await fetch(dodoApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // सुनिश्चित करें कि Cloudflare में Variable का नाम बिल्कुल यही (DODO_SECRET_KEY) हो 
                'Authorization': `Bearer ${process.env.DODO_SECRET_KEY}` 
            },
            body: JSON.stringify({
                license_key: licenseKey
            })
        });

        if (!dodoResponse.ok) {
            return NextResponse.json({ valid: false, message: "Invalid or expired license key" }, { status: 401 });
        }

        const data = await dodoResponse.json();

        // 🚀 Dodo API का रिस्पॉन्स चेक करें
        if (data.valid === true) {
            return NextResponse.json({ valid: true, message: "License Activated Successfully!" });
        } else {
            return NextResponse.json({ valid: false, message: "License key is invalid or inactive" }, { status: 401 });
        }

    } catch (error) {
        console.error("Verification Error:", error);
        return NextResponse.json({ valid: false, message: "Server error occurred" }, { status: 500 });
    }
}