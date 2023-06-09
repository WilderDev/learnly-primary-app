const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_MAIL_API_KEY);

export async function POST(request: Request) {
  const { email, browser, problem, emotionalState } =
    (await request.json()) as {
      email: string;
      browser: string;
      problem: string;
      emotionalState: string;
    };

  if (!email || !browser || !problem || !emotionalState) {
    return new Response('Missing required fields', { status: 400 });
  }

  // Check if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email))
    return new Response(JSON.stringify({ error: 'Invalid email' }), {
      status: 400,
    });

  // Add to SendGrid contact list
  try {
    const msg = {
      to: 'support@learnly.ai',
      from: 'will@learnly.ai',
      subject: 'SUPPORT TICKET: ' + emotionalState,
      text: `
	Email: ${email}
	Browser: ${browser}
	Emotional State: ${emotionalState}
	Problem: ${problem}
	`,
      html: `
	<p>Email: ${email}</p>
	<p>Browser: ${browser}</p>
	<p>Emotional State: ${emotionalState}</p>
	<p>Problem: ${problem}</p>
	`,
    };

    const emailRes = await sgMail.send(msg);

    console.log('emailRes:', emailRes);

    // Check if email is already subscribed
    if (emailRes[0].statusCode !== 202) {
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ message: 'Success' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
    });
  }
}
