import React,{useEffect} from 'react'



export default function TwoForged() {
    // page title
    let title='Bison 2 Jaw Forged Scroll Chucks'
    useEffect(() => {
        document.title = title
    }, []);
    
    return (
        <>

            <div className="w-100 h-100">
                <h1 className="text-center p-0 w-100">2-JAW FORGED STEEL BODY CHUCKS</h1>

               
            </div>
        </>

    )
}
