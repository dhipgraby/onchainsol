import React from 'react';

interface FlexsorProps {
    children: React.ReactNode[];
    columns: number;
}

const Flexsor: React.FC<FlexsorProps> = ({ children, columns }) => {

    columns = columns > 5 ? 5 : columns

    return (
        <div className="flex flex-wrap">
            {children.map((child, index) => (
                <div
                    key={index}
                    className={`flexor-${columns}`}
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

export default Flexsor;
