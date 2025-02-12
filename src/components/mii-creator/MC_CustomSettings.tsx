import { FullParentContainer } from '@/styles/globalStyles'
import React from 'react'
import styled from 'styled-components'


import MC_CS_ListElements from './CustomSettings/MC_CS_ListElements'

import { useMiiCreatorStore } from '@/stores/MiiCreatorStore'
import MC_CS_Color from './CustomSettings/MC_CS_Color'
import MC_CS_Sliders from './CustomSettings/MC_CS_Sliders'
import { usePocketBaseStore } from '@/stores/PocketBaseStore'

const MC_CustomSettings = () => {


    const { getType, findAssetsByType} = usePocketBaseStore();
    const {selectedTypeID} = useMiiCreatorStore();



    const ShowCustomSettingByMenu = () => {


        switch (getType(selectedTypeID)?.name) {
            case 'Head':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetsByType('Head')} />
                    <SideContainer>
                    <MC_CS_Color/>
                    </SideContainer>
                </MainContainer>

            case 'Hair':
                return <MainContainer><MC_CS_ListElements list={findAssetsByType('Hair')} />
                    <SideContainer>
                    <MC_CS_Color/>
                    </SideContainer>
                 </MainContainer>
            case 'Eyebrows':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetsByType('Eyebrows')} />
                    <SideContainer>
                    <MC_CS_Color/>
                    <MC_CS_Sliders/>
                    </SideContainer>
                </MainContainer>
            case 'Eyes':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetsByType('Eyes')} />
                    <SideContainer>
                    <MC_CS_Color/>
                    <MC_CS_Sliders/>
                    </SideContainer>
                </MainContainer>
            case 'Nose':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetsByType('Nose')} />
                    <SideContainer>
                    <MC_CS_Color/>
                    <MC_CS_Sliders/>
                    </SideContainer>
                </MainContainer>
            case 'Mouth':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetsByType('Mouth')} />
                    <SideContainer>
                    <MC_CS_Sliders/>
                    </SideContainer>
                </MainContainer>
            case 'Glasses':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetsByType('Glasses')} />
                    <SideContainer>
                    <MC_CS_Sliders/>
                    </SideContainer>
                </MainContainer>
            case 'Bear':
                return <MainContainer><MC_CS_ListElements list={findAssetsByType('Bear')} />
                <SideContainer>
                <MC_CS_Color/>
                </SideContainer>
             </MainContainer>
            case 'Makeups':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetsByType('Makeups')} />
             </MainContainer>
            case 'Wrinkles':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetsByType('Wrinkles')} />
             </MainContainer>
            case 'Mustache':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetsByType('Mustache')} />
                <SideContainer>
                    <MC_CS_Sliders/>
                </SideContainer>
             </MainContainer>
            case 'Human':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetsByType('Human')} />
                <SideContainer>
                    <MC_CS_Color/>
                </SideContainer>
             </MainContainer>
            // default:
            //     return <></>
        }
    }

  return ShowCustomSettingByMenu()

}




const MainContainer = styled(FullParentContainer)`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-evenly;
    pointer-events: none;

> * {
pointer-events: auto;
}

`

const SideContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export default MC_CustomSettings