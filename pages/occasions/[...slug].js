import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/event/event-list';

function FilteredEventPage() {
    const router = useRouter()
    const filterData  = router.query.slug
    console.log(filterData, "SLUG");
    console.log(router.query)


    if(!filterData) {
        return <p className='center'>Loding...</p>
    }

    const numYear = +filterData[0];
    const numMonth = +filterData[1];

    const events = getFilteredEvents({year:numYear, month:numMonth});

    if(events.length === 0) {
        return <p>No events found</p>
    }

    return (
        <div className='flex flex-col items-center justify-center w-full h-screen'>
            <h1>Filtered Events Page</h1>
            <EventList items={events} />
        </div>
    )
}

export default FilteredEventPage