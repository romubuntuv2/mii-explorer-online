import { pb } from "@/pocketbase/getPocketBase";
import { RecordModel } from "pocketbase";
import { create } from "zustand";

interface PocketBaseStore {
    isLoading: boolean;
    types:RecordModel[],
    assets:RecordModel[],
    fetch:()=>Promise<void>,
    getAsset:(id:string) => (RecordModel),
    getType:(id:string) => (RecordModel|undefined),
    getInitIdByElement:(elementType:string) => string,
    findAssetsByType:(typeName:string) => RecordModel[],
}


export const usePocketBaseStore = create<PocketBaseStore>((set, get) => ({
    isLoading:true,
    types:[],
    assets:[],
    fetch:async()=> {
        const fetechedTypes = await pb.collection('TypeElements').getFullList({sort: '+position'});
        const fetchedAssets = await pb.collection('AssetElements').getFullList();
        set({types:fetechedTypes, assets: fetchedAssets, isLoading:false})
    },
    getAsset: (id:string) => {
        const {assets} = get();
        const asset = assets.find(asset => asset.id === id);
        if(asset == undefined) return assets[0]
        return asset
    },
    getType: (id:string) => {
        const {types} = get();
        const type =types.find(type => type.id === id);
        return type
    },
    findAssetsByType:(typeName:string) => {
        const {types, assets} = get();
        const typeID = types.find((type) => type.name === typeName)?.id;
        const foundedAssets = assets.filter(asset => asset.type === typeID);
        return foundedAssets
    },
    getInitIdByElement:(typeName:string) => {
        const {findAssetsByType} = get();
        const assetID = findAssetsByType(typeName)[0].id
        return assetID
    },
}))