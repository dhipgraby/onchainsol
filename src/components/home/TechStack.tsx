import Backend from "./Backend";
import Design from "./Design";
import Frontend from "./Frontend";

export default function TechStack() {

    return (
        <div className="mt-40">
            <h1 className="text-3xl uppercase leading-normal">
                Our tech tools to make
                <br />
                <span className="text-main">your business more valuable.</span>
            </h1>

            <Design />
            <Frontend />
            <Backend />

        </div>
    )
}