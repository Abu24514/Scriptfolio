import React from 'react'

const Title = ({title ,description}) => {
    return (
        <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-medium">
               {title}
            </h2>
            <p className="mt-4 text-gray-600">
                {description}
            </p>
        </div>

    )
}

export default Title