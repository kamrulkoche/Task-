import React from 'react'
import Image from 'next/image'

const Picture = ({image,width,height}:any) => {
    return (
        <div>
            <Image
                src={image}
                width={width}
                height={height}
                alt="Picture of the author"
            />
        </div>
    )
}

export default Picture
