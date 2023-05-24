import * as sgClient from '@sendgrid/client';

sgClient.setApiKey(process.env.SENDGRID_CLIENT_API_KEY!);

export async function POST(request: Request) {
  const { email } = (await request.json()) as { email: string }; // Get email from request body

  // Check if email is provided
  if (!email) {
    return new Response(JSON.stringify({ error: 'Email is required' }), {
      status: 400,
    });
  }

  // Check if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email))
    return new Response(JSON.stringify({ error: 'Invalid email' }), {
      status: 400,
    });

  // Add to SendGrid contact list
  try {
    const sgRes = await sgClient.request({
      method: 'PUT',
      baseUrl: 'https://api.sendgrid.com',
      url: '/v3/marketing/contacts',
      body: {
        list_ids: [process.env.SENDGRID_NEWSLETTER_ID!],
        contacts: [{ email }],
      },
    });

    // Check if email is already subscribed
    if (sgRes[0].statusCode !== 202) {
      return new Response(
        JSON.stringify({ error: 'Failed to add user to newsletter' }),
        { status: 500 },
      );
    }

    return new Response(JSON.stringify({ message: 'Success' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to add user to newsletter' }),
      { status: 500 },
    );
  }
}
