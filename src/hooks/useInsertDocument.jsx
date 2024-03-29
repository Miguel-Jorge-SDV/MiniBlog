import { useState, useEffect, useReducer } from "react";
import { db } from '../firebase/config'
import { collection, addDoc, Timestamp } from "firebase/firestore";

const initialState = {
    loading: null,
    error: null,
}

const insertReducer = (state, action) => {
    switch(action.type) {
        case 'LOADING':
            return {loading: true, error: null}
        case 'INSERTED_DOC':
            return {loading: false, error: null}
        case 'ERROR':
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const useInsertDocument = (docCollection) => {
    const [response, dispath] = useReducer(insertReducer, initialState)

    //Deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const checkCancelBeforeDispath = (action) => {
        if(!cancelled) {
            dispath(action)
        }
    }

    const insertDocument = async (document) => {
        //console.log('teste1')

        checkCancelBeforeDispath({
            type: 'LOADING',
        })

        try {
            //console.log('teste2')
            const newDocument = {...document, createdAt: Timestamp.now()}
            //console.log('teste3')
            const insertedDocument = await addDoc(
                collection(db, docCollection),
                newDocument
            )

            checkCancelBeforeDispath({
                type: 'INSERTED_DOC',
                payload: insertedDocument
            })
            

        } catch (error) {
            checkCancelBeforeDispath({
                type: 'ERROR',
                payload: error.message
            })
        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return { insertDocument, response }

}