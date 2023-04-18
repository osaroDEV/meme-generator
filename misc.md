design: 'https://www.figma.com/file/rx5icyRAaj1FUCRZfuuHS3/Meme-Generator-(Copy)?node-id=0-1&t=rPxFnWOYQ2mvsfV8-0'

URL= "https://api.imgflip.com/get_memes"

import React, { useState, useEffect } from 'react';

const Meme = () => {
  const [memeImg, setMemeImg] = useState(null);

  const getMemeImg = () => {
    let info = memeData.data.memes;
    let randomUrl = Math.floor(Math.random() * info.length);
    setMemeImg(info[randomUrl].url);
  };

  return (
    <main className='flex flex-col justify-around h-[500px] m-[1rem_2rem]'>
      <form className='flex flex-col justify-around h-[150px]'>
        <section className='flex justify-between'>
          <input
            className='w-[47.5%] border border-[grey] font-karla indent-1.5 rounded placeholder:text-[.75rem]'
            type='text'
            placeholder='shut up'
          />
          <input
            className='w-[47.5%] border border-[grey] font-karla indent-1.5 rounded placeholder:text-[.75rem]'
            type='text'
            placeholder='and take my money'
          />
        </section>
        <button
          onClick={getMemeImg}
          type='button'
          className='border-none h-[40px] bg-[#672280] rounded p-[.5rem]'
        >
          Get a new meme image 🖼
        </button>
      </form>
      {memeImg ? (
        <section className='w-full h-auto max-w-[477px] max-h-[268px] m-auto'>
          <img
            src={memeImg}
            alt='meme-photo'
            className='bg-cover bg-center bg-no-repeat block w-full h-auto'
          />
        </section>
      ) : null}
    </main>
  );
};

export default Meme;
