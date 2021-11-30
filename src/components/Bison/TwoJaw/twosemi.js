import React,{useEffect} from 'react'



export default function TwoSemi() {
    // page title
    let title='Bison 2 Jaw Semi-Steel Scroll Chucks'
    useEffect(() => {
        document.title = title
    }, []);
    
    return (
        <>
            <div className="w-100 h-100">
                <h1 className="text-center p-0 w-100">2-JAW SEMI-STEEL BODY CHUCKS</h1>
            </div>
        </>

    )
}
