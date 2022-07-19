import { useRef } from 'react';
import classes from './event-search.module.css';
//TODO: Passing Value from Child to Parent
function EventsSearch(props) {
    const yearInput = useRef();
    const monthInput = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const year = yearInput.current.value;
        const month = monthInput.current.value;
        console.log(year, month, "Event-search");
        props.onSelectFilter({ year, month });
    }

    return (
        <form className={classes.form}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInput}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthInput}>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
                <button onClick={submitHandler} className="dark:bg-gray-800 dark:hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                    Button
                </button>
            </div>

        </form>
    )
}

export default EventsSearch