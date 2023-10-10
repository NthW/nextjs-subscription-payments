import React from 'react';
import ChatButton from '@/components/ui/PreloadedChatButton/PreloadedChatButton';

interface ChatboxProps {
  text: string;
  button_values: string[] | undefined;
}

export function RipelineChat({ text, button_values }: ChatboxProps) {
  return (
    <div className="flex flex-row mt-4">
      <img src="/chatbot-logo.svg" alt="Logo" className="w-14 h-14 pr-2" />
      <div className="flex flex-col w-2/3">
        <div className="text-slate-700 font-medium font-['Inter']">Ripeline</div>
        <div className="max-h-100 overflow-y-auto shadow-md rounded-lg bg-gray-50 rounded-tr-lg rounded-bl-lg rounded-br-lg border border-gray-200 flex-col justify-center items-start gap-4 inline-flex p-4">
          {text}
          <div className="flex flex-wrap">
            {button_values?.map((button, index) => (
              <ChatButton key={index} buttonType={button} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export function UserChat({ text, button_values }: ChatboxProps) {
  return (
    <div className="flex flex-row-reverse mt-4">
      <div className="flex flex-col w-1/2">
        <div className="text-slate-700 font-medium font-['Inter']"></div>
        <div className="p-4 self-stretch text-white text-base font-normal font-['Inter'] leading-normal bg-teal-700 rounded-tl-lg rounded-bl-lg rounded-br-lg flex-col justify-center items-start gap-2 inline-flex">
          {text}
          <div className="flex flex-wrap">
            {button_values?.map((button, index) => (
              <ChatButton key={index} buttonType={button} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

