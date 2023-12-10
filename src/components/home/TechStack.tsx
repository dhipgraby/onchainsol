import Backend from "./Backend";
import Design from "./Design";
import Frontend from "./Frontend";

export default function TechStack() {

    return (
        <div className="mt-40">
            <h1 className="text-3xl uppercase leading-normal">
                Our tech tools to make <span className="text-main">your business more valuable.</span>
            </h1>
            <hr className="divider-left" />
            <Design />
            <Frontend />
            <Backend />

        </div>
    )
}