import { Avatar } from '@material-ui/core'
import React, { useEffect, useState} from 'react'

function SidebarChats() {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    return (
        <div className="sidebar-chatheads">
        <Avatar src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`}/>
            <div className="chathead-messages">
            <h2>Hello There</h2>
            <p>Last Message</p>
            </div>
        </div>
    )
}

export default SidebarChats
