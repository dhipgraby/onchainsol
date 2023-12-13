"use client";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
        <div className="ta-c mt-20 rounded-xl bg-main gradient-dark p-4 pt-10 pb-10">
            <h1 className="text-4xl">
                Lets Work <span className="text-main">Together <FontAwesomeIcon icon={faRocket} /></span>
            </h1>
            <p className="my-4 text-gray-300">We are always open to hear about your project</p>
            <div className="mt-10">
                <button className="btn-primary text-4xl font-medium px-5">
                    Contact us
                </button>
            </div>
        </div>
    );
}