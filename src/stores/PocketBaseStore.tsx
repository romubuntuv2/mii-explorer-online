import { pb } from "@/pocketbase/getPocketBase";
import { create } from "zustand";




export const usePocketBaseStore = create((set) => ({
    isLoading:true,
    types:[],
    assets:[],
    fetch:async()=> {
        const fetechedTypes = await pb.collection('TypeElements').getFullList({sort: '+position'});
        const fetchedAssets = await pb.collection('AssetElements').getFullList();
        set({types:fetechedTypes, assets: fetchedAssets})
    }
}))