"use client"
import React, { useState } from 'react';
import {RipelineChat, UserChat} from '@/components/ui/ChatComponents';


let sampleChatMessages = [
    { text: 'Ripeline can help you analyze and ask questions about any article or group of articles, and will show you where in the text to look for details. To get started, pick from the following:', 
    isBot: true, buttonsAvailable: ["upload_file", "link_url","copy_paste"] },
    // Add more chat messages as needed
  ];

interface ResponseData {
  responseValue: string;
}

interface ChatBoxProps {  
    session: any;
}

function ChatBox({ session }: ChatBoxProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);
  const [responseData, setResponseData] = useState<ResponseData | null>(null);

  const user = session?.user;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleKeyPress = (e:any) => {
    if (e.key === "Enter") {
      // Call your function here
      handleFetchData();
    }
  };

  const handleFetchData = async () => {
    sampleChatMessages.push({ text: inputValue, isBot: false, buttonsAvailable: [] });
    try {
      // Assuming you have a server endpoint to send data to
      const response = await fetch('api/', {
        method: 'GET', // Change the HTTP method as needed
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        // body: JSON.stringify({ data: inputValue }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      // Handle the response data as needed
      setResponseData({ responseValue: data.responseValue });
      setInputValue('');
      // Add a <div> to a section
      sampleChatMessages.push({ text: inputValue, isBot: false, buttonsAvailable: [] });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
        <div className="flex flex-col h-screen justify-between p-4 text-black">
            <div className="p-8 mb-auto overflow-y-scroll">
                <div className='text-2xl font-bold mb-2 text-gray-700'>Hi, {user?.email}</div>
                <div>Let us know how Ripeline can help</div>
                <section id="your_section_id">
                    { sampleChatMessages.map((message, index) => (
                        // conditionally render user chat or ripeline chat
                        message.isBot ? <RipelineChat key={index} text={message.text} button_values={message.buttonsAvailable} /> : 
                        <UserChat key={index} text={message.text} button_values={message.buttonsAvailable} />
                    ))}
                </section>
            </div>
            <div className="border-t h-28 ">
                <div className="flex w-100 p-8">
                  <input className={`grow h-10 w-4/5 relative p-4 border border-grey-400 rounded mr-2  border-2 ${
                    isFocused ? "border-teal-700" : "border-grey-400"
        } `} type="text" placeholder="Ask Ripeline Anything" value={inputValue} onChange={handleInputChange} onKeyUp={handleKeyPress} onFocus={handleFocus}
        onBlur={handleBlur}/>
                  <div onClick={handleFetchData} className="w-10 h-10 relative">
                    <img src="/send-03.svg" alt="Description of Image" className={`p-2 rounded-lg border justify-center items-center gap-2 inline-flex ${inputValue.length > 0 ? "shadow-md bg-teal-700 border-teal-700 transition-transform transform hover:scale-105" : "border-white bg-gray-400"  }`} />
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ChatBox;
