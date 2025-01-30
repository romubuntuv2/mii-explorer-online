import { FullParentContainer } from '@/styles/globalStyles'
import React from 'react'
import styled from 'styled-components'


import MC_CS_ListElements from './CustomSettings/MC_CS_ListElements'

import { useMiiCreatorStore } from '@/stores/MiiCreatorStore'
import MC_CS_Color from './CustomSettings/MC_CS_Color'
import MC_CS_Sliders from './CustomSettings/MC_CS_Sliders'

const MC_CustomSettings = () => {


  const { selectedType, findAssetByType} = useMiiCreatorStore();




    const ShowCustomSettingByMenu = () => {


        switch (selectedType?.name) {
            case 'Head':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetByType('Head')} />
                    <SideContainer>
                    <MC_CS_Color/>
                    </SideContainer>
                </MainContainer>

            case 'Hair':
                return <MainContainer><MC_CS_ListElements list={findAssetByType('Hair')} />
                    <SideContainer>
                    <MC_CS_Color/>
                    </SideContainer>
                 </MainContainer>
            case 'Eyebrows':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetByType('Eyebrows')} />
                    <SideContainer>
                    <MC_CS_Color/>
                    <MC_CS_Sliders/>
                    </SideContainer>
                </MainContainer>
            case 'Eyes':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetByType('Eyes')} />
                    <SideContainer>
                    <MC_CS_Color/>
                    <MC_CS_Sliders/>
                    </SideContainer>
                </MainContainer>
            case 'Nose':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetByType('Nose')} />
                    <SideContainer>
                    <MC_CS_Color/>
                    <MC_CS_Sliders/>
                    </SideContainer>
                </MainContainer>
            case 'Mouth':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetByType('Mouth')} />
                    <SideContainer>
                    <MC_CS_Sliders/>
                    </SideContainer>
                </MainContainer>
            case 'Glasses':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetByType('Glasses')} />
                    <SideContainer>
                    <MC_CS_Sliders/>
                    </SideContainer>
                </MainContainer>
            case 'Bear':
                return <MainContainer><MC_CS_ListElements list={findAssetByType('Bear')} />
                <SideContainer>
                <MC_CS_Color/>
                </SideContainer>
             </MainContainer>
            case 'Makeups':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetByType('Makeups')} />
             </MainContainer>
            case 'Wrinkles':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetByType('Wrinkles')} />
             </MainContainer>
            case 'Mustache':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetByType('Mustache')} />
             </MainContainer>
            case 'Human':
                return <MainContainer>
                <MC_CS_ListElements list={findAssetByType('Human')} />
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

`

const SideContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export default MC_CustomSettings