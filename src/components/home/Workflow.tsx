"use client"
import React from "react";
import Flexsor from "../Flexsor";
import ProductData from "@/data/workflow.json";

export default function Workflow() {

    function renderContent(title: string, content: string) {
        return (
            <div className="p-2" key={`data-${title}`}>
                <h3 className="text-purple font-medium text-xl">{title}</h3>
                <p className="font-normal text-lg text-gray-200">{content}</p>
            </div>
        );
    }

    function renderBoxes(data: any) {

        return (
            <div className="bg-slate-700 p-5 rounded-xl mt-10 mb-20" key={data.title}>
                <div className="mt-5">
                    <h1 className="text-2xl">{data.title}</h1>
                </div>
                <Flexsor columns={data.content.length}>
                    {data.content.map((el: any) => {
                        return renderContent(el.title, el.content);
                    })}
                </Flexsor>
            </div>
        );
    }

    return (
        <div className="mt-40">
            <h1 className="text-3xl">
                Our Workflow
            </h1>
            {ProductData.map((el: any) => renderBoxes(el))}
        </div>
    )

}
