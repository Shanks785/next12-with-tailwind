import {getFeaturedEvents} from '../dummy-data';
import EventList from '../components/event/event-list';

function EventPage() {

    const featuredEvents = getFeaturedEvents();

    return (
        <div className='flex flex-col items-center justify-center w-full h-screen'>
            <h1>EventPage</h1>
            <EventList items={featuredEvents} />
        </div>
    )
}

export default EventPage