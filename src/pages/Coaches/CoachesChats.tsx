import React, { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import { BsMicFill, BsThreeDotsVertical } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { BsCheck2All } from 'react-icons/bs';
import { IoAddCircle, IoClose } from 'react-icons/io5';
import { MdAttachFile } from 'react-icons/md';
import Image from '@/assets/hero-image.jpg';
import NoChat from '@/assets/Chat.png';
import '@/styles/Athlete.css';
import { IoArrowBackOutline } from 'react-icons/io5';

import { LuPlus } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import ChatAisideBar from '@/components/CoachesChatAsidebar';

export const chatList = [
  {
    id: 1,
    name: 'John Doe',
    lastMessage: 'Ecco il miei obiett…',
    time: '3:00 PM',
    unread: 1,
    avatar: 'https://i.pravatar.cc/150?img=1',
    messages: [
      {
        from: 'them',
        text: 'Ciao Coach! 👋 Mi alleno a periodi…',
        time: '2:05 am',
      },
      {
        from: 'me',
        image: Image,
        time: '3:12 am',
      },
    ],
  },
  {
    id: 2,
    name: 'Mitchel Johnson',
    lastMessage: 'Giochiamo intelligente—aggiung 2,5 kg…',
    time: '2:00 PM',
    unread: 3,
    avatar: 'https://i.pravatar.cc/150?img=2',
    messages: [
      {
        from: 'them',
        text: 'Ciao Coach! 👋 Mi alleno a periodi…',
        time: '2:05 am',
      },
      {
        from: 'me',
        text: 'Ciao 👋 Raccontami un po’ dei tuoi obiettivi…',
        time: '3:12 am',
      },
      {
        from: 'them',
        text: 'Ciao Coach! 👋 Mi alleno a periodi…',
        time: '2:05 am',
      },
      {
        from: 'me',
        text: 'Ciao 👋 Raccontami un po’ dei tuoi obiettivi…',
        time: '3:12 am',
      },
      {
        from: 'them',
        text: 'Ciao Coach! 👋 Mi alleno a periodi…',
        time: '2:05 am',
      },
      {
        from: 'me',
        text: 'Ciao 👋 Raccontami un po’ dei tuoi obiettivi…',
        time: '3:12 am',
      },
    ],
  },
  {
    id: 3,
    name: 'Max William',
    lastMessage: 'Sent photo 📸',
    time: '2:00 PM',
    unread: 0,
    avatar: 'https://i.pravatar.cc/150?img=3',
    messages: [],
  },
];

const CoachesChat = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [search, setSearch] = useState('');
  const [headerSearch, setHeaderSearch] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [openSearch, setOpenSearch] = useState(false);
  const navigate = useNavigate();
  const filteredChats = chatList.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const clearMessages = () => {
    if (!selectedChat) return;
    selectedChat.messages = [];
    setSelectedChat({ ...selectedChat });
    setDropdownOpen(false);
  };

  const sendMessage = () => {
    if (!message && !imageFile) return;

    const newMsg = {
      from: 'me',
      text: message || '',
      image: imageFile ? URL.createObjectURL(imageFile) : null,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      seen: false,
    };

    selectedChat.messages.push(newMsg);
    setSelectedChat({ ...selectedChat });
    setMessage('');
    setImageFile(null);
  };

  return (
    <section className='h-[100vh] w-full flex p-0 text-white'>
      <ChatAisideBar />
      {/* CHAT LIST */}
      <div
        className={`w-full relative lg:w-[30rem] h-full border-r border-[#1E1E1E] py-4 flex flex-col
      ${selectedChat ? 'hidden lg:flex' : 'flex'}
    `}
      >
        <div className='flex items-start pl-3 gap-2'>
          <button
            onClick={() => navigate(-1)} // go back to previous page
            className='text-3xl'
          >
            <IoArrowBackOutline />
          </button>
          <h1 className='text-2xl font-semibold mb-4'>Chats</h1>
        </div>
        <div className='px-3 mb-3'>
          <div className='flex items-center gap-2 bg-[#1A1A1A] px-4 py-2 rounded-full'>
            <CiSearch className='text-xl text-gray-400' />
            <input
              className='bg-transparent w-full outline-none text-sm'
              placeholder='Search…'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className='flex flex-col gap-1 overflow-y-auto no-scrollbar'>
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`relative flex mx-2 border-b border-[#1A1A1A] rounded-md items-center gap-3 py-3 px-3 cursor-pointer transition
            ${
              selectedChat?.id === chat.id
                ? 'bg-[#1A1A1A]'
                : 'hover:bg-[#151515]'
            }
          `}
            >
              <img
                src={chat.avatar}
                className='w-12 h-12 rounded-full object-cover'
              />
              <div className='flex flex-col w-full'>
                <div className='flex items-center justify-between'>
                  <h2 className='font-semibold'>{chat.name}</h2>
                </div>
                <p className='text-sm text-gray-400 truncate'>
                  {chat.lastMessage}
                </p>
              </div>
              <span className='text-xs text-gray-400 absolute right-3 top-3'>
                {chat.time}
              </span>
              {chat.unread > 0 && (
                <span className='text-xs absolute right-3 bottom-3 bg-red-600 px-2 py-0.5 rounded-full'>
                  {chat.unread}
                </span>
              )}
            </div>
          ))}
        </div>
        <button className='bg-red-600 absolute bottom-4 right-2 mt-auto p-5 w-20 h-20 rounded-full text-4xl hover:bg-red-700 transition'>
          <IoAddCircle />
        </button>
      </div>

      {/* CHAT WINDOW */}
      <div
        className={`flex-1 h-[100%] flex-col ${
          selectedChat ? 'flex' : 'hidden lg:flex'
        }`}
      >
        {/* HEADER */}
        <div className='h-20 border-b border-[#1E1E1E] px-4 flex items-center justify-between'>
          <div className='h-20 border-b border-[#1E1E1E] sm:px-4 px-0 flex items-center justify-between'>
            {selectedChat ? (
              <div className='flex items-center gap-3'>
                <button
                  onClick={() => setSelectedChat(null)}
                  className='lg:hidden text-2xl mr-2'
                >
                  <IoArrowBackOutline />
                </button>
                <img
                  src={selectedChat.avatar}
                  className='w-12 h-12 rounded-full'
                  alt={selectedChat.name}
                />
                <div>
                  <h2 className='text-lg font-semibold'>{selectedChat.name}</h2>
                  <p className='text-sm text-green-400'>• Online</p>
                </div>
              </div>
            ) : (
              <h2 className='text-gray-300 text-2xl font-normal'>
                Seleziona una chat
              </h2>
            )}
          </div>
          <div className='flex items-center gap-2'>
            {/* SEARCH BOX */}
            <div
              className='flex  items-center bg-[#1A1A1A] px-3 py-2 rounded-full cursor-pointer'
              onClick={() => setOpenSearch(true)}
            >
              <CiSearch className='text-lg text-gray-400 mr-1' />

              {/* Input sirf tab show hoga jab openSearch = true */}
              {openSearch && (
                <input
                  placeholder='Search in chat…'
                  value={headerSearch}
                  onChange={(e) => setHeaderSearch(e.target.value)}
                  autoFocus
                  className='bg-transparent outline-none text-sm text-gray-200  w-20 sm:w-60'
                />
              )}

              {/* Close button (X) — sirf jab open ho */}
              {openSearch && (
                <IoClose
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenSearch(false);
                    setHeaderSearch('');
                  }}
                  className='text-lg text-gray-400 ml-2 cursor-pointer'
                />
              )}
            </div>
            <div className='relative'>
              <BsThreeDotsVertical
                className='text-xl cursor-pointer'
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div className='absolute right-0 mt-2 bg-[#1A1A1A] border border-[#333] rounded-lg w-40 p-2'>
                  <button
                    onClick={clearMessages}
                    className='w-full text-left px-3 py-2 hover:bg-[#222] rounded-md text-sm'
                  >
                    Clear All Chat
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* MESSAGES */}
        <div className='flex-1 py-4 px-4 overflow-y-auto no-scrollbar'>
          {!selectedChat ? (
            <div className='flex flex-col items-center justify-center h-full text-gray-400 gap-3'>
              <div className='bg-[#141414] rounded-full w-40 h-40 flex items-center justify-center p-4'>
                <img
                  src={NoChat}
                  alt='No Chat'
                  className='h-full w-full object-contain'
                />
              </div>
              <h1>Benvenuto in Chat!</h1>
              <p>
                Sentiti libero di iniziare una nuova conversazione con il tuo
                coach.
              </p>
              <button className='flex items-center gap-2 border border-[#141414] px-6 py-2 rounded-full hover:bg-[#1A1A1A]'>
                <LuPlus /> Aggiungi un coach
              </button>
            </div>
          ) : (
            selectedChat.messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  msg.from === 'me' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[60%] p-3 rounded-xl text-sm ${
                    msg.from === 'me'
                      ? 'bg-[#FDFFFC] text-[#333]'
                      : 'bg-[#333] text-white'
                  }`}
                >
                  {msg.image && (
                    <img
                      src={msg.image}
                      className='rounded-lg mb-2 max-h-40 object-cover'
                    />
                  )}
                  {msg.text}
                  <div className='text-sm text-gray-400 mt-2 flex items-center gap-1'>
                    {msg.time}
                    {msg.from === 'me' && (
                      <BsCheck2All
                        className={`text-lg ${
                          msg.seen ? 'text-blue-500' : 'text-gray-500'
                        }`}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* INPUT */}
        {selectedChat && (
          <div className='p-4 border-t border-[#1E1E1E] flex items-center gap-2'>
            <input
              type='file'
              className='hidden'
              id='imagePicker'
              onChange={(e) => setImageFile(e.target.files[0])}
            />
            <label
              htmlFor='imagePicker'
              className='bg-[#1A1A1A] px-4 py-4 rounded-full cursor-pointer text-lg'
            >
              <MdAttachFile />
            </label>

            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Scrivi qualcosa…'
              className='flex-1 bg-[#1A1A1A] text-white px-4 py-3 rounded-full outline-none'
            />

            <button
              className='bg-[#1A1A1A] px-4 py-4 rounded-full text-lg text-white hover:bg-[#2A2A2A] transition'
              title='Voice Message'
            >
              <BsMicFill />
            </button>

            <button
              onClick={sendMessage}
              className='bg-red-600 p-3 rounded-full text-xl'
            >
              <IoSend />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoachesChat;
