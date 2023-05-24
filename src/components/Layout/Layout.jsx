import {Header} from 'components/Header'
import styled from 'styled-components'
import { Sidebar } from 'components/Sidebar'

const StyledLayout = styled.div`
    background-color: #1c233d;
    min-height: 100vh;
    .right {
        float: right;
        width: 80%;
    }
`
const StyledContent = styled.div`
    background-color: #f23412;
    margin-top: 64px;
    height: 100vh;
`
const StyledSidebar = styled.div`
    float: left;
    width: 20%;
`


export const Layout =({children}) =>{
    return (
    <StyledLayout>
        <StyledSidebar>
           <Sidebar></Sidebar>
        </StyledSidebar>
        <div className='right'>
            <Header/>
            <StyledContent>{children}</StyledContent>
        </div>
    </StyledLayout>
    )
}