"use client";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="footer mt-20">
                <div className="flex">
                    <div className="w-1/2 ta-l">
                        <p>
                            <Link href="/" target="_black">Onchain Solutions</Link>
                        </p>
                    </div>
                    <div className="w-1/2 ta-r">
                        <p>Copyright © 2023. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
}