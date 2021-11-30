import React, { useEffect } from 'react'



export default function SixForged() {
    let title='Bison 6 Jaw Forged Scroll Chucks'
    
    useEffect(() => {
        document.title = title
    }, []);

    console.log('HI ITS GETTING TO SIXFORGED')
    return (
        <>

            <div className="w-100 h-100">
                <h1 className="text-center p-0 w-100">6-JAW FORGED STEEL BODY SCROLL CHUCKS</h1>


            </div>
        </>

    )
}