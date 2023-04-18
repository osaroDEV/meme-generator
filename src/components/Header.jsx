import React from 'react';

const Header = () => {
  return (
    <>
      <nav className='flex justify-between items-center bg-gradient-to-r from-[#672280_1.18%] to-[#A626D3_100%] hover:bg-gradient-to-l h-[65px]'>
        <section className='flex justify-between items-center w-[178.79px] ml-[20px]'>
          <img src='images/trollFace.png' className='w-[31.31px]' />
          <p className='text-[20.75px] -tracking-[0.1rem] font-karla font-bold'>
            Meme Generator
          </p>
        </section>
        <section className='w-[120px] font-inter font-bold underline text-[12px]'>
          osaroDEV
        </section>
      </nav>
    </>
  );
};

export default Header;
