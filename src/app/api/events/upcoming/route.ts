import { Database } from '@/assets/typescript/db';
import { ICalendarEvent } from '@/assets/typescript/schedule';
import { supabaseServer } from '@/lib/auth/supabaseServer';

// * Handlers
// Get User's Upcoming Events (Props)
export interface IUpcomingEventsGetRes {
  events: ICalendarEvent[];
}
// Get User's Upcoming Events (Handler)
export async function GET(request: Request) {
  // Grab the data from the request
  const { searchParams } = new URL(request.url); // Get the search params from the URL
  const filterDateParam = searchParams.get('date'); // Get the date filter param
  const filterDate = new Date(new Date(filterDateParam!).setHours(0, 0, 0, 0)); // Create a date object from the date filter param
  let filterDateISOStr = filterDate.toISOString().split('T')[0]; // Convert the date object to an ISO string

  try {
    const supabase = supabaseServer(); // Create Supabase Server Client

    // Get Event Data
    const { data, error } = await supabase.rpc('get_upcoming_events', {
      input_date: filterDateISOStr,
    });

    if (error) return new Response('Error', { status: 500 });

    // Transform Data
    const transformedData: ICalendarEvent[] = data.map((event) => ({
      id: event.id!,
      name: event.name!,
      description: event.description || '',
      imagePath:
        event.image_path || 'https://source.unsplash.com/800x800/?nature',
      url: event.url!,
      type: event.type as Database['public']['Enums']['event'],
      datetime: event.datetime!,
      location: event.location || 'N/A',
      lengthInMin: event.length_in_min!,
      attendees:
        (event.attendees as {
          id: string;
          firstName: string;
          lastName: string;
          avatarUrl: string;
        }[]) || [],
    }));

    return new Response(JSON.stringify({ events: transformedData }), {
      status: 200,
    });
  } catch (e) {
    return new Response('Error', { status: 500 });
  }
}
