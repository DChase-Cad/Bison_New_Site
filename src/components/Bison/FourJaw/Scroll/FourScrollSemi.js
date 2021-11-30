import React,{useEffect} from 'react'



export default function FourScrollSemi() {
    // page title
    let title='Bison 4 Jaw Semi-Steel Scroll Chucks'
    useEffect(() => {
        document.title = title
    }, []);
    
    return (
        <>

            <div className="w-100 h-100">
                <h1 className="text-center p-0 w-100">4-JAW SEMI-STEEL BODY SCROLL CHUCKS</h1>

               
            </div>
        </>

    )
}
