import { useEffect, useState } from "react";
import {Storage} from "@ionic/storage"
export function useStorage(){
    const [storage,setStorage]=useState<Storage>()
    useEffect(()=>{
        const initStorage =async()=>{
         const newStorage= new Storage({
            name:"aguileraapp"
         });
         const store=await newStorage.create();
         setStorage(store);
        }
        initStorage();
    },[])
    const addValuesKey = async (keyValue:string,dataValue:any)=>{
        const values=await storage?.get(keyValue) || []
        const newValue=[...values,dataValue]
        storage?.set(keyValue,newValue)
        return newValue;
    }
    const getValuesKey= async (keyvalue:string)=>{
        return  await storage?.get(keyvalue) || []
    }
    const updateValuesKey= async (id:string,keyvalue:string,dataValue:any)=>{
        const values=await storage?.get(keyvalue) || []
        if (values[id]){
            values[id]=dataValue;
            storage?.set(keyvalue,dataValue)
            return values;
        }else{
            return  await storage?.get(keyvalue) || []
        }
    }
    const deleteValuesKey= async (id:string,keyvalue:string)=>{
        const values=await storage?.get(keyvalue) || []
        if (values[id]){
            let valorViejo=values.slice(id,1)
            storage?.set(keyvalue,values)
            return values;
        }else{
            return  await storage?.get(keyvalue) || []
        }
    }
    const deleteAllKey= async (keyvalue:string)=>{
        let dato=null
        storage?.set(keyvalue,dato)
    }
    return {
deleteValuesKey,
deleteAllKey,
addValuesKey,
getValuesKey,
updateValuesKey,
storage
    }
}