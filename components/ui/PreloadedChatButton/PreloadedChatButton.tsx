import React from 'react';

interface Message {
  text: string;
}

interface ChatboxProps {
  messages: Message[];
}

export default function ChatButton({ buttonType }: {buttonType: string}) {

  const buttonTypeParams: Record<string, { img_url: string; text: string }> = {
    'upload_file': {
      'img_url': '/upload-cloud-02.svg',
      'text': 'Upload Documents',
    },
    'link_url': {
      'img_url': '/link-01.svg',
      'text': 'Fetch from Link',
    },
    'copy_paste': {
      'img_url': '/copy-02.svg',
      'text': 'Copy and Paste Article Text',
    }
  }

  const buttonTypeParam = buttonTypeParams[buttonType];
  
  return (
    <div className="flex-shrink-0 m-1 h-9 px-3 py-2 bg-white rounded-lg shadow border border-teal-400 justify-center items-center gap-1 inline-flex hover:bg-teal-100 hover:border-teal-500 cursor-pointer transition duration-100 ease-in-out">
      <div className="px-0.5 items-center flex">
        <img className="pr-1 h-7 w-7" src={buttonTypeParam.img_url} alt="Description of Image" />
        <div className="text-emerald-700 text-sm font-semibold font-['Inter']">{buttonTypeParam.text}</div>
      </div>
    </div>
  );
};

