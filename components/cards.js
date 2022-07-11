import { useState } from "react";
import Modal from "./modal";

export default function Cards(props) {
    const [isClicked, setIsClicked] = useState(false);
    function pressMe() {
        console.log(props.text)
        setIsClicked(true);
    }
    function closeModalHandler() {
        console.log("props.text")
        setIsClicked(false);
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -mx-4 -my-8">
                    <div className="py-8 px-4 lg:w-1/2">
                        <div className="h-full flex items-start">
                            <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                                <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                            </div>
                            <div className="flex-grow pl-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
                                <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{props.text}</h1>
                                <p className="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                <a className="inline-flex items-center">
                                    <img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                                    <span className="flex-grow flex flex-col pl-3">
                                        <button onClick={pressMe} className="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-200 rounded text-base mt-4 md:mt-0">{props.text}
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { isClicked && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> }
        </section>
    )
}