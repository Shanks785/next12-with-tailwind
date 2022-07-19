import EventItem from "./event-item";

function EventList(props) {

    const { items } = props;

    return (
        <ul>
            {items.map(item => <EventItem 
                key={item.id}
                {...item}
                // id = {item.id}
                // title = {item.title}
                // image = {item.image}
                // date = {item.date}
                // location = {item.location}
                // isFeatured = {item.isFeatured}
            ></EventItem>)}
        </ul>
    )
}

export default EventList