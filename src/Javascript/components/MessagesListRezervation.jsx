import axios from "axios";
import React, { useState, useEffect } from "react";


function MessagesListRezervation() {


    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/messages`);

            if(result.data.messages){
                let messagesArray = result.data.messages;
                messagesArray.reverse();
                setMessages(messagesArray);

            }
        
        };

        fetchData();

    }, []);


    return (
        <div id="MessagesListRezervation">
            <h2 className='text-2xl font-bold mb-4'>Recent Rezervations</h2>
            <ul>
                {
                    messages.length ? messages.map(messages =>
                        <li key={messages.entryID}>
                            <p>
                                <span className='text-gray-600'>{`${messages.messageContent}`}</span>
                            </p>
                        </li>
                    )
                        : <li>No rezervation yet</li>
                }
            </ul>
        </div>
    );

}

export default MessagesListRezervation;