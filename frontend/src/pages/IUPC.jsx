// IUPC.jsx
import React from 'react';
import Tab from '../components/Tab';
import { PrimaryButton } from '../components/Button';
import Banner from '../components/Banner';
import SponsoredBy from '../components/SponsoredBy';
import { IUPCSponsor } from '../data/data';

const IUPC = () => {
  const description = (
    <div className='flex flex-col gap-10'>
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
        <span className='font-semibold'>Team Requirements: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero excepturi natus eum illum molestias ipsum delectus similique laudantium quas! Minus commodi maxime numquam nostrum sit sed velit atque nihil.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias at eveniet commodi excepturi voluptas, cum officiis aliquam hic suscipit saepe itaque in nesciunt laboriosam dignissimos odit quos quaerat consequatur necessitatibus.
      </div>
      <div>
        <span className='font-semibold'>Registration Fee:: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero excepturi natus eum illum molestias ipsum delectus similique laudantium quas! Minus commodi maxime numquam nostrum sit sed velit atque nihil.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias at eveniet commodi excepturi voluptas, cum officiis aliquam hic suscipit saepe itaque in nesciunt laboriosam dignissimos odit quos quaerat consequatur necessitatibus.
      </div>
      <div className='font-bold'>Schedule:</div>
      <div className='font-semibold'>
        <div>Registration Deadline:</div>
        <div>Final Round:</div>
        <div>Prize Giving Ceremony:</div>
      </div>
      <div>
        For any queries, contact: <br />
        Hasibul Islam Shanto - mdhasibulislam895@gmail.com
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
      <Banner link="/image/banner/bannerIUPC.png" />
      <h2 className=" text-4xl font-extrabold md:mb-2 py-4 pt-10  text-navbar">Inter University Programming Contest</h2>
      <Tab child1={description} child2={announcment} child3={download} />
      <div className='py-10 w-full flex justify-center'>
        <PrimaryButton text='Register' />
      </div>
      <SponsoredBy list={"list"} sponsors={IUPCSponsor}/>
    </div>
  );
};

export default IUPC;
