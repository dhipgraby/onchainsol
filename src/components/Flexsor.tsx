import React from 'react';

interface FlexsorProps {
    children: React.ReactNode[];
    columns: number;
    forced?: boolean;
}

const Flexsor: React.FC<FlexsorProps> = ({ children, columns, forced = false }) => {

    columns = columns > 5 ? 5 : columns

    return (
        <div className="flex flex-wrap">
            {children.map((child, index) => (
                <div
                    key={index}
                    className={`flexor-${columns} ${(forced) ? 'flexor-forced-2' : ''} `}
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

export default Flexsor;
