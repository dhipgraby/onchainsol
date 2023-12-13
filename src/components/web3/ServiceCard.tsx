'use client'
import Image from "next/image";
import Flexsor from "../Flexsor";

interface ServiceProp {
    id: number;
    title: string;
    content: string;
    img: string | null;
    dir: string;
    size: number;
}

export default function ServiceCard({
    id,
    title,
    content,
    img,
    dir,
    size
}: ServiceProp) {

    img = (img !== null) ? "/images/" + img : img

    function renderContent(title: string, content: string) {
        return <div className="max-w-md">
            <h1 className="text-3xl">{title}</h1>
            <p className="mt-5 text-gray-400 text-xl">{content}</p>
        </div>
    }

    function renderImg(img: string | null, size: number) {
        return <div className="p-6">
            {img !== null && <Image src={img} alt={title} width={size} height={size} />}
        </div>
    }

    function renderFlex(dir: string, title: string, content: string, img: string | null, size: number) {

        return dir === "left" ?
            <Flexsor columns={2}>
                <div className="h-full valign-middle">
                    {renderContent(title, content)}
                </div>
                <div className="h-full valign-middle w-full ta-c">
                    {renderImg(img, size)}
                </div>
            </Flexsor>
            :
            <Flexsor columns={2}>
                <div className="h-full valign-middle w-full ta-c">
                    {renderImg(img, size)}
                </div>
                <div className="h-full valign-middle">
                    {renderContent(title, content)}
                </div>
            </Flexsor>
    }

    return (
        <>
            <div id={`service${id}`} className="mt-20">
                {
                    dir === "center"
                        ?
                        <div className="ta-c max-w-4xl mx-auto">
                            <div className="mt-10">
                                <h1 className="text-4xl ta-c">
                                    {title}
                                </h1>
                                <p className="text-xl text-gray-400 mt-10">
                                    {content}
                                </p>
                                <div className="mt-10">
                                    {img !== null && <Image src={img} alt={title} width={size} height={size} />}
                                </div>
                            </div>
                        </div>
                        :
                        dir === "left"
                            ?
                            renderFlex(dir, title, content, img, size)
                            :
                            renderFlex(dir, title, content, img, size)
                }
            </div>
        </>
    );
}
