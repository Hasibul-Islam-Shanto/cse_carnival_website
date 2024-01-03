// IUPC.jsx
import React from 'react';
import Tab from '../components/Tab';

const IUPC = () => {
  const description = (
    <div className='flex flex-col px-4 py-10 gap-10'>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero excepturi natus eum illum molestias ipsum delectus similique laudantium quas! Minus commodi maxime numquam nostrum sit sed velit atque nihil.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias at eveniet commodi excepturi voluptas, cum officiis aliquam hic suscipit saepe itaque in nesciunt laboriosam dignissimos odit quos quaerat consequatur necessitatibus.
      </div>
      <div>
        <div className='font-bold underline pb-4'>
          Event Highlights
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero excepturi natus eum illum molestias ipsum delectus similique laudantium quas! Minus commodi maxime numquam nostrum sit sed velit atque nihil.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias at eveniet commodi excepturi voluptas, cum officiis aliquam hic suscipit saepe itaque in nesciunt laboriosam dignissimos odit quos quaerat consequatur necessitatibus.
      </div>
      <div>
        <span className='font-semibold'>Duration: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero excepturi natus eum illum molestias ipsum delectus similique laudantium quas! Minus commodi maxime numquam nostrum sit sed velit atque nihil.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias at eveniet commodi excepturi voluptas, cum officiis aliquam hic suscipit saepe itaque in nesciunt laboriosam dignissimos odit quos quaerat consequatur necessitatibus.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero excepturi natus eum illum molestias ipsum delectus similique laudantium quas! Minus commodi maxime numquam nostrum sit sed velit atque nihil.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias at eveniet commodi excepturi voluptas, cum officiis aliquam hic suscipit saepe itaque in nesciunt laboriosam dignissimos odit quos quaerat consequatur necessitatibus.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero excepturi natus eum illum molestias ipsum delectus similique laudantium quas! Minus commodi maxime numquam nostrum sit sed velit atque nihil.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias at eveniet commodi excepturi voluptas, cum officiis aliquam hic suscipit saepe itaque in nesciunt laboriosam dignissimos odit quos quaerat consequatur necessitatibus.
      </div>

    </div>
  );
  const announcment = (
    <div>
      Announcements
    </div>
  );
  const download = (
    <div>
      Download Link
    </div>
  )
  return (
    <div className=' text-navbar'>
      <Tab child1={description} child2={announcment} child3={download} />
    </div>
  );
};

export default IUPC;
