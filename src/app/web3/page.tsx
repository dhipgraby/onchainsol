'use client'
import BlockchainServices from "@/components/web3/BlockchainServices"
import Services from "../../data/blockchain.json"
import ServiceCard from "@/components/web3/ServiceCard"
import Contact from "@/components/Contact"
import { SliderButton } from '@typeform/embed-react'

export default function Web3() {

    return (
        <>
            <div className="ta-c max-w-2xl mx-auto">
                <div className="pt-20 pb-20 blue-gradient-center">
                    <h1 className="text-5xl">
                        Blockchain <span className="text-main"> Development</span>
                    </h1>
                    <hr className="divider" />
                    <p className="text-gray-200 text-xl">
                        Empowering businesses and individuals to turn ideas into reality through cutting-edge blockchain technology.
                    </p>             
                </div>
            </div>

            <div className="mt-10">
                <h1 className="text-4xl ta-c">
                    Browse Through Our Services
                </h1>
                <BlockchainServices />
            </div>
            <div className="pt-20 blue-gradient-big">
                <div className="mt-20 max-w-5xl mx-auto services">
                    {Services.map((service) => {
                        return <div key={service.id}>
                            <ServiceCard
                                id={service.id}
                                title={service.title}
                                content={service.content}
                                img={service.img}
                                dir={service.dir}
                                size={service.size}
                            />
                        </div>
                    })}
                </div>
            </div>
            <Contact />
        </>
    )
}