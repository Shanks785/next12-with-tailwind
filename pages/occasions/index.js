import { getAllEvents, getFilteredEvents } from '../../dummy-data';
import { useRouter } from 'next/router';
import { useState } from "react";
import EventList from '../../components/event/event-list';
import EventsSearch from '../../components/event/event-search';
//TODO: Passing Value from Parent to Child
function occasionPage() {

    const router = useRouter();
    var filteredEvents = [];


    const [events, setEvents] = useState(getAllEvents());

    function handleFilter(filterVal) {
        // this.setState({language: langValue});
        console.log(filterVal, "occasionPage");

        if (filterVal) {

            const fullpath = `/occasions/${filterVal.year}/${filterVal.month}`;
            router.push(fullpath);

            filteredEvents = getFilteredEvents({ year: parseInt(filterVal.year), month: parseInt(filterVal.month) });

            setEvents(filteredEvents);

        }

    }

    return (
        <div className='flex flex-col items-center justify-center w-full h-screen'>
            <h1>occasionPage</h1>
            <EventsSearch onSelectFilter={handleFilter} />
            <EventList items={events} />
        </div>
    )
}

export default occasionPage