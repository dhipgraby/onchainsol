"use client";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SliderButton } from '@typeform/embed-react'

export default function Contact() {
    const buttonStyle = {
        padding: '10px 40px',
        borderRadius: 50,
        border: 'none',
        background: '#594ce0',
        color: 'white',
        fontSize: 32,
        cursor: 'pointer',
    }


    return (
        <div className="ta-c mt-20 rounded-xl bg-main gradient-dark p-4 pt-10 pb-10">
            <h1 className="text-4xl">
                Lets Work <span className="text-main">Together <FontAwesomeIcon icon={faRocket} /></span>
            </h1>
            <p className="my-4 text-gray-300">We are always open to hear about your project</p>
            <div className="mt-10">

                <SliderButton
                    id="wjD4Fbq5"
                    position="right"
                    width="500"
                    style={buttonStyle}
                >
                    Contact
                </SliderButton>
            </div>
        </div>
    );
}