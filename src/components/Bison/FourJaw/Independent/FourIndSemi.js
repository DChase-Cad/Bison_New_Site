import React,{useEffect} from 'react'



export default function TwoSemi() {
    // page title
    let title='Bison 4 Jaw Semi-Steel Independent Chucks'
    useEffect(() => {
        document.title = title
    }, []);
    
    return (
        <>
            <div className="w-100 h-100">
                <h1 className="text-center p-0 w-100">4 JAW SEMI-STEEL BODY INDEPENDENT CHUCKS</h1>
            </div>
        </>

    )
}
