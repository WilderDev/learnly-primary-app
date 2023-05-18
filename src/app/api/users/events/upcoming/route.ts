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

//  try {

//    // Get Event Data
//    const { data, error } = await supabase
//      .from('upcoming_events')
//      .select('*, host:profiles (full_name, avatar_url)')
//      .filter('datetime', 'gte', toTimestampz(filterDate))
//      .order('date', { ascending: true })
//      .limit(7);

//    if (error) {
//      return new Response('Error', { status: 500 });
//    }

//    // Get Attendees
//    const { data: attendees } = await supabase
//      .from('profiles')
//      .select('id, full_name, avatar_url')
//      .in(
//        'id',
//        data.flatMap((event) => event?.attendees),
//      );

//    // Transform Data
//    const transformedData: IEvent[] = data.map((event) => ({
//      id: event.id!,
//      date: new Date(event.date!),
//      time: event.time!,
//      datetime: event.datetime!,
//      type: event.type as EventT,
//      name: event.name!,
//      description: event.description || '',
//      imageUrl: event.image_url || 'https://source.unsplash.com/800x800/?nature',
//      location: event.location || 'N/A',
//      url: event.url!,
//      host: {
//        name: (event.host as any).full_name!,
//        imageUrl: (event.host as any).avatar_url!,
//      },
//      attendees:
//        attendees
//          ?.filter((attendee) => event?.attendees?.includes(attendee.id))
//          ?.map((a) => ({
//            id: a.id,
//            name: a.full_name,
//            imageUrl: a.avatar_url,
//          })) || [],
//      metadata: JSON.stringify(event.metadata),
//    }));

//    return new Response(
//      JSON.stringify({
//        events: transformedData,
//      }),
//      {
//        status: 200,
//      },
//    );
//  } catch (e) {
//    return new Response('Error', { status: 500 });
//  }
