import React from 'react'
import ImageOne from '../images/egg-2.jpg'
import ImageTwo from '../images/egg.jpg'

export default function Content() {
    return (
        <>
        <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
            <img src={ImageOne} alt="egg" className="h-full rounded mb-20 shadow"></img>
            <div className="flex flex-col justife-center items-center">
            <h2 className="text-2xl mb-2">Egg Myffins</h2>
            <p className="mb-2">Cripcy,delicius, and natures </p>
            <span>$16</span>
        </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
            <img src={ImageTwo} alt="egg" className="h-full rounded mb-20 shadow"></img>
            <div className="flex flex-col justife-center items-center">
            <h2 className="text-2xl mb-2">Egg Myffins</h2>
            <p className="mb-2">Cripcy,delicius, and natures </p>
            <span>$25</span>
        </div>
        </div>
        </>
    )
}