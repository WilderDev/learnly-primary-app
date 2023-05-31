import * as sgClient from '@sendgrid/client';
sgClient.setApiKey(process.env.SENDGRID_CLIENT_API_KEY!);

export async function POST(request: Request) {
  // 1. Get request body
  const { email, first_name, last_name } = await request.json();

  // 2. Validate request body
  if (!email || !first_name || !last_name) {
    return new Response(
      JSON.stringify({
        error: 'Email, first name, and last name are required',
      }),
      { status: 400 },
    );
  }

  // 3a. Add to App Users List
  const sgRes = await sgClient.request({
    method: 'PUT',
    baseUrl: 'https://api.sendgrid.com',
    url: '/v3/marketing/contacts',
    body: {
      list_ids: [process.env.SENDGRID_APP_USERS_ID!],
      contacts: [
        {
          email,
          first_name,
          last_name,
          // custom_fields: { level: level },
        },
      ],
    },
  });

  // 3b. Check if email is already subscribed to App Users List
  if (sgRes[0].statusCode !== 202) {
    return new Response(
      JSON.stringify({ error: 'Failed to add user to app users list' }),
      { status: 500 },
    );
  }

  // 3c. Get contact id
  const sgRes2 = await sgClient.request({
    method: 'POST',
    baseUrl: 'https://api.sendgrid.com',
    url: '/v3/marketing/contacts/search/emails',
    body: {
      emails: [email],
    },
  });

  // 3d. Remove from Facebook Group List
  const sgRes3 = await sgClient.request({
    method: 'DELETE',
    baseUrl: 'https://api.sendgrid.com',
    url: `/v3/marketing/lists/${process.env.SENDGRID_FACEBOOK_WELCOME_LIST_ID}/contacts`,
    qs: {
      contact_ids: (sgRes2[0].body as any).result[email].contact.id,
    },
  });

  // 8. Return success response
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
