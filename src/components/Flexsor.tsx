import React from 'react';

interface FlexsorProps {
    children: React.ReactNode[];
    columns: number;
}

const Flexsor: React.FC<FlexsorProps> = ({ children, columns }) => {
    const calculateColumnWidth = () => {
        return `1/${columns}`;
    };

    return (
        <div className="flex flex-wrap">
            {children.map((child, index) => (
                <div
                    key={index}
                    className={`w-full lg:w-${calculateColumnWidth()} md:w-1/2 sm:w-full my-10`}
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

export default Flexsor;
