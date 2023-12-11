"use client"
import React from "react";
import Flexsor from "../Flexsor";
import ProductData from "@/data/workflow.json";

export default function Workflow() {

    function renderContent(title: string, content: string) {
        return (
            <div className="p-3 mx-4" key={`data-${title}`}>
                <h3 className="text-purple font-normal my-6 text-2xl">{title}</h3>
                <p className="font-normal text-xl text-gray-100">{content}</p>
            </div>
        );
    }

    function renderBoxes(data: any) {

        return (
            <div className="bg-slate-700 shadow-xl gradient-clear p-5 pb-10 rounded-xl my-10" key={data.title}>
                <div className="mt-5">
                    <h1 className="text-3xl text-main">{data.title}</h1>
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
            <h1 className="text-5xl mb-10">
                Our <span className="text-main">Workflow</span>
            </h1>
            <hr className="divider-left" />
            {ProductData.map((el: any) => renderBoxes(el))}
        </div>
    )

}
