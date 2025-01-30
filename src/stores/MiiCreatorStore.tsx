import { pb } from '@/pocketbase/getPocketBase';
import { Mii, MiiBody, MiiElement, MiiEyes, MiiFaceElement } from '@/r3f/mii/MiiRendered';
import { RecordModel } from 'pocketbase'
import { create } from 'zustand';



interface MiiCreatorStore {
    mii:Mii,
    types:RecordModel[],
    isLoading:boolean,
    selectedType:RecordModel|null,
    assets:RecordModel[],
    selectedElement:()=>MiiElement|MiiFaceElement|MiiEyes|MiiBody,
    fetchTypes: () => Promise<void>,
    setSelectedType:(newSelectedType:RecordModel) => void,
    findAssetByType:(typeName:string) => RecordModel[],
    changeColor:(color:string)=>void,
    changeVerticalPos:(valuel:number) => void,
    changeScale:(value:number)=>void,
    changeDistBetw:(value:number)=>void,
    changeRotation:(value:number)=>void,
    changeShrink:(value:number)=>void,
    changeElement:(value:RecordModel) => void,
}

export const useMiiCreatorStore = create<MiiCreatorStore>((set,get) => ({
    mii:{
        glasses:{
            shrink:0.5,
            rotation:0.5,
            element: {} as RecordModel,
            verticalPos: 0,
            scale: 0,
            color:'#6C7070',
        },
        mouth:{
            shrink:0.5,
            rotation:0.5,
            element: {} as RecordModel,
            verticalPos: 0,
            scale: 0,
            color:'#6C7070',
        },
        nose:{            
            shrink:0.5,
            rotation:0.5,
            element: {} as RecordModel,
            verticalPos: 0,
            scale: 0,
            color:'#6C7070',
        },
        eyebrows:{
            shrink:0.5,
            element: {} as RecordModel,
            distanceBetween:0.5,
            rotation:0.5,
            verticalPos: 0,
            scale: 0,
            color:'#6C7070',
        },
        eyes: {
            shrink:0.5,
            element: {} as RecordModel,
            distanceBetween:0.5,
            rotation:0.5,
            verticalPos: 0,
            scale: 0,
            color:'#6C7070',
        },
        head: {element: {} as RecordModel, color: '#6C7070'},
        human:{element: {} as RecordModel, upColor: '#b83d1b', downColor:'#34b9b7S'},
        hair: {element: {} as RecordModel, color: '#6C7070'},
        bear: {element: {} as RecordModel, color: '#6C7070'},
        makeups: {element: {} as RecordModel, color: '#6C7070'},
        wrinkles: {element: {} as RecordModel, color: '#6C7070'},
        mustache: {element: {} as RecordModel, color: '#6C7070'},
    },
    isLoading:true,
    types:[],
    selectedType:null,
    assets:[],
    selectedElement:()=>{
        const {selectedType, mii} = get();
        const elementName = String(selectedType?.name).toLowerCase();
        return (mii as Mii)[elementName as keyof Mii]
    },
    fetchTypes: async() => { 
        const {findAssetByType}=get();
        //FETCH ELEMENTS
        const fetechedTypes = await pb.collection('TypeElements').getFullList({sort: '+position'});
        const fetchedAssets = await pb.collection('AssetElements').getFullList();
        set({types:fetechedTypes, assets: fetchedAssets})


        //INIT MII
        const body = findAssetByType("Human")[0];
        const nose = findAssetByType("Nose")[0];
        const glasses = findAssetByType("Glasses")[0];
        const head = findAssetByType("Head")[0];
        const hair = findAssetByType("Hair")[0];
        const eyebrow = findAssetByType("Eyebrows")[0];
        const eye = findAssetByType("Eyes")[0];
        const makeup = findAssetByType("Makeups")[0];
        const wrinkle = findAssetByType("Wrinkles")[0];
        const bear = findAssetByType("Bear")[0];
        const mustache = findAssetByType("Mustache")[0];
        const mouth = findAssetByType("Mouth")[0];
        const initMii:Mii = {
        glasses:{
            shrink:0.5,
            rotation:0.5,
            element: glasses,
            verticalPos: 0,
            scale: 0,
            color:'#6C7070',
        },
        nose:{            
            shrink:0.5,
            rotation:0.5,
            element: nose,
            verticalPos: 0,
            scale: 0,
            color:'#6C7070',
        },
        mouth:{
            shrink:0.5,
            element:mouth,
            verticalPos:0,
            rotation:0.5,
            scale:0.5,
            color:'#6C7070'
        },
        eyebrows:{
            shrink:0.5,
            element:eyebrow,
            verticalPos:0.5,
            rotation:0.5,
            distanceBetween:0.5,
            scale:0.5,
            color:'#6C7070'
        },
        eyes:{
            shrink:0.5,
            element:eye,
            verticalPos:0.5,
            rotation:0.5,
            distanceBetween:0.5,
            scale:0.5,
            color:'#6C7070'
        },
        bear: {element: bear, color: '#6C7070'},
        head:{element: head, color: '#7f463c'},
        human:{element: body, upColor: '#b83d1b', downColor:'#34b9b7S'},
        hair:{element: hair, color: '#8ecaca'},
        makeups: {element: makeup, color: '#6C7070'},
        wrinkles: {element: wrinkle, color: '#6C7070'},
        mustache: {element: mustache, color: '#6C7070'},
        }

        set({isLoading:false, mii:initMii, selectedType:fetechedTypes[0]})
    },
    setSelectedType: (newSelectedType:RecordModel) => {set({selectedType:newSelectedType})},
    findAssetByType:(typeName:string) => {
        const {types, assets} = get();
        const typeID = types.find((type) => type.name === typeName)?.id;
        const foundedAssets = assets.filter(asset => asset.type === typeID);
        return foundedAssets
    },
    changeColor:(color:string) => {
        const {selectedType,mii} = get();

        const name = String(selectedType?.name).toLowerCase();
        (mii[name as keyof Mii] as MiiElement).color = color;

        set({mii:mii})
    },
    changeVerticalPos:(value:number) => {
        const {selectedType,mii} = get();

        const name = String(selectedType?.name).toLowerCase();
        (mii[name as keyof Mii] as MiiFaceElement).verticalPos = value;

        set({mii:mii})
    },
    changeScale:(value:number) =>{
        const {selectedType,mii} = get();

        const name = String(selectedType?.name).toLowerCase();
        (mii[name as keyof Mii] as MiiFaceElement).scale = value;

        set({mii:mii})
    },
    changeDistBetw:(value:number) =>{
        const {selectedType,mii} = get();

        const name = String(selectedType?.name).toLowerCase();
        (mii[name as keyof Mii] as MiiEyes).distanceBetween = value;

        set({mii:mii})
    },
    changeRotation:(value:number) =>{
        const {selectedType,mii} = get();

        const name = String(selectedType?.name).toLowerCase();
        (mii[name as keyof Mii] as MiiFaceElement).rotation = value;

        set({mii:mii})
    },
    changeShrink:(value:number) =>{
        const {selectedType,mii} = get();

        const name = String(selectedType?.name).toLowerCase();
        (mii[name as keyof Mii] as MiiFaceElement).shrink = value;

        set({mii:mii})
    },
    changeElement:(value:RecordModel) => {
        const {selectedType,mii} = get();

        const name = String(selectedType?.name).toLowerCase();
        const miiElement = mii[name as keyof Mii] as MiiElement | MiiFaceElement;
        miiElement.element = value;

        set({mii:mii})
    }
}))








































