import React,{useEffect} from 'react'



export default function ThreeHD() {
    // page title
    let title='Bison 3 Jaw Oil Country Chucks'
    useEffect(() => {
        document.title = title
    }, []);
    
    return (
        <>

            <div className="w-100 h-100">
                <h1 className="text-center p-0 w-100">3-JAW EXTRA HEAVY DUTY FORGED STEEL BODY CHUCKS</h1>

               
            </div>
        </>

    )
}
