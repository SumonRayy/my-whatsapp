import { Avatar, IconButton } from '@material-ui/core'
import { AddCircle, Chat, DonutLargeOutlined, MoreVert, SearchOutlined } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
import SidebarChats from './SidebarChats'

function Sidebar() {

    const createChat = () => {
        const roomName = prompt("Please enter name for chat.");
        
    }

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar />
                <div className="sidebar-header-right">
                    <IconButton>
                        <DonutLargeOutlined />                      
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar-search">
                <div className="sidebar-search-container">
                <SearchOutlined />
                <input placeholder="Search or Start a Chat" type="text"/>
                </div>
            </div>
            <div className="sidebar-chats">
                <SidebarChats />
                <SidebarChats />
                <SidebarChats />
                <SidebarChats />
                <div className="add-chat" onClick={createChat}>
                    <AddCircle id="add-icon"/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
