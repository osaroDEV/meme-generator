import React, { useState, useEffect } from 'react';

const Meme = () => {
  const [memeData, setMemeData] = useState([]);
  const [inputs, setInputs] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((memeInfo) => setMemeData(memeInfo.data.memes));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => {
      return { ...prevInputs, [name]: value };
    });
  };

  const handleRandomImage = () => {
    let randomIndex = Math.floor(Math.random() * memeData.length);
    let randomImage = memeData[randomIndex].url;
    setInputs((prevInputs) => {
      return { ...prevInputs, randomImage: randomImage };
    });
  };

  console.log(inputs.topText);
  console.log(inputs.bottomText);
  console.log(inputs.randomImage);

  return (
    <main className='flex flex-col justify-around h-[500px] m-[1rem_2rem]'>
      <form className='flex flex-col justify-around h-[150px]'>
        <section className='flex justify-between'>
          <input
            className='w-[47.5%] border border-[grey] font-karla indent-1.5 rounded placeholder:text-[.75rem] text-black'
            type='text'
            placeholder='type top text'
            name='topText'
            value={inputs.topText}
            onChange={handleChange}
          />
          <input
            className='w-[47.5%] border border-[grey] font-karla indent-1.5 rounded placeholder:text-[.75rem] text-black'
            type='text'
            placeholder='type bottom text'
            name='bottomText'
            value={inputs.bottomText}
            onChange={handleChange}
          />
        </section>
        <button
          onClick={handleRandomImage}
          type='button'
          className='border-none h-[40px] bg-[#672280] rounded p-[.5rem]'
        >
          Get a new meme image 🖼
        </button>
      </form>
      {inputs.randomImage ? (
        <section className='w-full h-auto max-w-[477px] max-h-[268px] m-auto relative text-red-500'>
          <img
            src={inputs.randomImage}
            alt='meme-photo'
            className='bg-cover bg-center bg-no-repeat block w-full h-auto'
          />
          <h1
            style={{
              width: 'inherit',
              height: 'inherit',
              textAlign: 'center',
              position: 'absolute',
              top: 0,
              textTransform: 'uppercase',
              fontSize: '2rem',
              fontWeight: 900,
            }}
          >
            {inputs.topText}
          </h1>
          <h1
            style={{
              width: 'inherit',
              height: 'inherit',
              textAlign: 'center',
              position: 'absolute',
              bottom: 0,
              textTransform: 'uppercase',
              fontSize: '2rem',
              fontWeight: 900,
            }}
          >
            {inputs.bottomText}
          </h1>
        </section>
      ) : null}
    </main>
  );
};

export default Meme;
