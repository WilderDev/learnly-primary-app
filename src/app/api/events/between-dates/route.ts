import { supabaseServer } from '@/lib/auth/supabaseServer';

export async function GET(request: Request) {
  // Grab the data from the request
  const { searchParams } = new URL(request.url); // Get the search params from the URL
  const startDate = searchParams.get('start-date'); // Get the date filter param
  const endDate = searchParams.get('end-date'); // Get the date filter param
  //   const filterDate = new Date(new Date(filterDateParam!).setHours(0, 0, 0, 0)); // Create a date object from the date filter param
  //   let filterDateISOStr = filterDate.toISOString().split('T')[0]; // Convert the date object to an ISO string

  if (!startDate || !endDate) return new Response('Error', { status: 400 });

  try {
    const supabase = supabaseServer(); // Create Supabase Server Client

    // Get Event Data
    const { data, error } = await supabase.rpc('get_events_by_date_range', {
      start_date: startDate,
      end_date: endDate,
    });

    if (error) return new Response('Error', { status: 500 });

    return new Response(JSON.stringify({ eventDays: data }), {
      status: 200,
    });
  } catch (e) {
    return new Response('Error', { status: 500 });
  }
}
