import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useState, useEffect} from 'react'
import "./Chatbox.css";

function Chatbox() {

    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);


    return (
        <div className="chatbox">
            <div className="chatbox-container">
                <div className="chatbox-header">
                    <Avatar src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`}/>
                    <div className="chatbox-header-info">
                        <h3>Room Name</h3>
                        <p>Last Seen at ....</p>
                    </div>
                    <div className="chatbox-header-icons">
                        <IconButton>
                            <SearchOutlined/>
                        </IconButton>
                        <IconButton>
                            <AttachFile/>
                        </IconButton>
                        <IconButton>
                            <MoreVert/>
                        </IconButton>
                    </div>
                </div>
                <div className="chatbox-body">
                <p className={`chatbox-msg-sender ${true && "chatbox-msg-user"}`}>
                    <span className="chatbox-msg">Sumon Roy</span>
                        Hey What's Up?
                    <span className="chatbox-msg-time">09:58am</span>    
                    </p>
                </div>
                <div className="chatbox-footer">
                    Footer
                </div>
            </div>
        </div>
    )
}

export default Chatbox
