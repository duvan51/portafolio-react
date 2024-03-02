import React from 'react'
import PocketBase from 'pocketbase'



const URL = "http://127.0.0.1:8090/"


export const getTutorials = async ()=>{


    try{
        const pb = new PocketBase(`${URL}`)
        const records = await pb.collection('courses').getFullList({
            sort: '-created',
        });
        return records
    }
    catch(err){
        console.error("error al obtener los productos: ", err)
        throw err;
    }
}
export const getTutorialsId = async ()=>{


    try{
        const pb = new PocketBase(`${URL}`)
        const records = await pb.collection('tutorials').getFullList({
            sort: '-created',
        });
        return records
    }
    catch(err){
        console.error("error al obtener los productos: ", err)
        throw err;
    }
}