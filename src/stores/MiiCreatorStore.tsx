import { Mii, MiiBody, MiiElement, MiiEyes, MiiFaceElement } from '@/r3f/mii/MiiRendered';
import { RecordModel } from 'pocketbase'
import { create } from 'zustand';



interface MiiCreatorStore {
    mii:Mii,
    selectedTypeID:string,
    selectedElement:(getType:(id:string) => (RecordModel|undefined))=>MiiElement|MiiFaceElement|MiiEyes|MiiBody,
    initMii: (getInit:(typeName:string)=>string, initTypeID:string) => void,
    setSelectedType:(newTypeID:string) => void,
    changeColor:(color:string,getType:(id:string) => (RecordModel|undefined))=>void,
    changeVerticalPos:(valuel:number,getType:(id:string) => (RecordModel|undefined)) => void,
    changeScale:(value:number,getType:(id:string) => (RecordModel|undefined))=>void,
    changeDistBetw:(value:number,getType:(id:string) => (RecordModel|undefined))=>void,
    changeRotation:(value:number,getType:(id:string) => (RecordModel|undefined))=>void,
    changeShrink:(value:number,getType:(id:string) => (RecordModel|undefined))=>void,
    changeElement:(value:string, getType:(id:string) => (RecordModel|undefined)) => void,
}

export const useMiiCreatorStore = create<MiiCreatorStore>((set,get) => ({
    mii:{
        mustache:{
            shrink:0.5,
            rotation:0.5,
            elementID:"",
            verticalPos: 0,
            scale: 0,
            color:'#6C7070',
        },
        glasses:{
            shrink:0.5,
            rotation:0.5,
            elementID:"",
            verticalPos: 0,
            scale: 0,
            color:'#6C7070',
        },
        mouth:{
            shrink:0.5,
            rotation:0.5,
            elementID:"",
            verticalPos: 0,
            scale: 0,
            color:'#6C7070',
        },
        nose:{            
            shrink:0.5,
            rotation:0.5,
            elementID:"",
            verticalPos: 0,
            scale: 0,
            color:'#6C7070',
        },
        eyebrows:{
            shrink:0.5,
            elementID:"",
            distanceBetween:0.5,
            rotation:0.5,
            verticalPos: 0,
            scale: 0,
            color:'#6C7070',
        },
        eyes: {
            shrink:0.5,
            elementID:"",
            distanceBetween:0.5,
            rotation:0.5,
            verticalPos: 0,
            scale: 0,
            color:'#6C7070',
        },
        head: {elementID:"", color: '#6C7070'},
        human:{elementID:"", upColor: '#b83d1b', downColor:'#34b9b7S'},
        hair: {elementID:"", color: '#6C7070'},
        bear: {elementID:"", color: '#6C7070'},
        makeups: {elementID:"", color: '#6C7070'},
        wrinkles: {elementID:"", color: '#6C7070'},

    },
    selectedTypeID:"",
    selectedElement:(getType:(id:string) => (RecordModel|undefined))=>{
        const {selectedTypeID, mii} = get();
        const selectedType = getType(selectedTypeID)
        const elementName = String(selectedType?.name).toLowerCase();
        console.log(mii)
        return (mii as Mii)[elementName as keyof Mii]
    },
    initMii: (getInit:(typeName:string)=>string, initTypeID:string) => { 
        //INIT MII
        const bodyID = getInit("Human");
        const noseID = getInit("Nose");
        const glassesID = getInit("Glasses");
        const headID = getInit("Head");
        const hairID = getInit("Hair");
        const eyebrowID = getInit("Eyebrows");
        const eyeID = getInit("Eyes");
        const makeupID = getInit("Makeups");
        const wrinkleID = getInit("Wrinkles");
        const bearID = getInit("Bear");
        const mustacheID = getInit("Mustache");
        const mouthID = getInit("Mouth");
        const initMii:Mii = {
        mustache:{
                shrink:0.5,
                rotation:0.5,
                elementID:mustacheID,
                verticalPos: 0.2,
                scale: 0.5,
                color:'#6C7070',
            },
        glasses:{
            shrink:0.5,
            rotation:0.5,
            elementID: glassesID,
            verticalPos: 0.45,
            scale: 0,
            color:'#6C7070',
        },
        nose:{            
            shrink:0.5,
            rotation:0.5,
            elementID: noseID,
            verticalPos: 0.2,
            scale: 0.25,
            color:'#6C7070',
        },
        mouth:{
            shrink:0.5,
            elementID:mouthID,
            verticalPos:0.1,
            rotation:0.5,
            scale:0.2,
            color:'#6C7070'
        },
        eyebrows:{
            shrink:0.5,
            elementID:eyebrowID,
            verticalPos:0.6,
            rotation:0.5,
            distanceBetween:0.3,
            scale:0.4,
            color:'#6C7070'
        },
        eyes:{
            shrink:0.5,
            elementID:eyeID,
            verticalPos:0.3,
            rotation:0.5,
            distanceBetween:0.3,
            scale:0.3,
            color:'#6C7070'
        },
        bear: {elementID: bearID, color: '#6C7070'},
        head:{elementID: headID, color: '#7f463c'},
        human:{elementID: bodyID, upColor: '#b83d1b', downColor:'#34b9b7S'},
        hair:{elementID: hairID, color: '#8ecaca'},
        makeups: {elementID: makeupID, color: '#6C7070'},
        wrinkles: {elementID: wrinkleID, color: '#6C7070'},

        }

        set({mii:initMii, selectedTypeID:initTypeID})
    },
    setSelectedType: (newTypeID:string) => {set({selectedTypeID:newTypeID})},
    changeColor:(color:string, getType:(id:string) => (RecordModel|undefined)) => {
        const {selectedElement ,mii} = get();
        (selectedElement(getType) as MiiElement).color = color;
        set({mii:mii})
    },
    changeVerticalPos:(value:number, getType:(id:string) => (RecordModel|undefined)) => {
        const {selectedElement,mii} = get();
        (selectedElement(getType) as MiiFaceElement).verticalPos = value;
        set({mii:mii})
    },
    changeScale:(value:number, getType:(id:string) => (RecordModel|undefined)) =>{
        const {selectedElement,mii} = get();
        (selectedElement(getType) as MiiFaceElement).scale = value;
        set({mii:mii})
    },
    changeDistBetw:(value:number, getType:(id:string) => (RecordModel|undefined)) =>{
        const {selectedElement,mii} = get();
        (selectedElement(getType) as MiiEyes).distanceBetween = value;
        set({mii:mii})
    },
    changeRotation:(value:number, getType:(id:string) => (RecordModel|undefined)) =>{
        const {selectedElement,mii} = get();
        (selectedElement(getType) as MiiFaceElement).rotation = value;
        set({mii:mii})
    },
    changeShrink:(value:number, getType:(id:string) => (RecordModel|undefined)) =>{
        const {selectedElement,mii} = get();
        (selectedElement(getType) as MiiFaceElement).shrink = value;
        set({mii:mii})
    },
    changeElement:(elementID:string, getType:(id:string) => (RecordModel|undefined)) => {
        const {selectedElement,mii} = get();

        const miiElement = selectedElement(getType)  as MiiElement | MiiFaceElement;
        miiElement.elementID = elementID;

        set({mii:mii})
    }
}))








































