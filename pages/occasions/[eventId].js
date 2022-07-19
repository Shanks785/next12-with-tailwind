import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data'

function EventPost() {
    const router = useRouter()
    let val = router.query.eventId
    const event = getEventById(val)
    console.log(router.query)

    if(!event) {
        return <p>No Event Found</p>
    }

    return (
        <div>
            <h1>The Event {val}</h1>
        </div>
    )
}

export default EventPost