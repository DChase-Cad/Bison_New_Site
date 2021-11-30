import React,{useEffect} from 'react'



export default function ThreeLive() {
    // page title
    let title='Bison 3 Jaw Live Body Chucks'
    
    useEffect(() => {
        document.title = title
    }, []);
    
    return (
        <>

            <div className="w-100 h-100">
                <h1 className="text-center p-0 w-100">3-JAW LIVE BODY CHUCKS</h1>

               
            </div>
        </>

    )
}
