import Link from "next/link";

function EventItem(props) {

    const { title, image, date, location, id } = props;

    const dateFormat = new Date(date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const formattedAddress = location.replace(', ', '<br/>');

    return (
        <li>
            <Link href={`/occasions/${id}`}>
                <a className="flex flex-col items-center bg-white rounded-lg border mb-3 shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={'/' + image} alt=""></img>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{formattedAddress}</p>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default EventItem