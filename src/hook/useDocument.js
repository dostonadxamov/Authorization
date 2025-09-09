import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

 function useDocument(documentId, collectionName) {
    const [data, setData] = useState(null)

    useEffect(() => { 
        const unsub = onSnapshot(doc(db, collectionName, documentId), (doc)=>{
            setData({
                id:doc.id,
                ...doc.data(),
            })
            
        })

        return ()=> unsub()

    }, [documentId])


    return {data}
}

export default useDocument