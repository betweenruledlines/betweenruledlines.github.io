import React from 'react'
import {SidebarContainer, Icon, CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink} from "./SidebarElem";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
         <SidebarContainer isOpen={isOpen} onClick={toggle}>
             <Icon onClick={toggle}>
                 <CloseIcon/>
             </Icon>
             <SidebarWrapper>
                 <SidebarMenu>
                     <SidebarLink to="/">
                         Home
                     </SidebarLink>
                     <SidebarLink to="/works">
                         Works
                     </SidebarLink>
                     <SidebarLink to="/about">
                         About
                     </SidebarLink>
                 </SidebarMenu>
             </SidebarWrapper>
        </SidebarContainer>   
        </>
    )
}

export default Sidebar;