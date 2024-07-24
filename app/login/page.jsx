import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

import Image from 'next/image.js';

const orders = () => {
    return (
        <div className='bg-gray-200 flex justify-center items-center  py-[200px]'>
            <div className="outside border rounded-xl w-[97%]  sm:px-0 sm:w-auto overflow-hidden bg-white shadow-m">
                <div className="top-txt p-[50px] border-b items-center flex flex-col justify-center">
                    <h4 className='text-[20px]'>Sign Up</h4>
                    <p className='font-light text-[14px]'>Create an account with your email and password
                    </p>
                </div>
                <div className="bottom-form  bg-slate-50 p-[40px] mt-[0px]">
                    <form action="
                    ">
                        <div>
                            <p className='text-[14px]'>EMAIL ADDRESS</p>
                            <input className='border font-light text-[14px] rounded-lg px-4 py-2 w-full' placeholder='請輸入帳號' type="text" />
                        </div>
                        <div className='mt-4'>
                            <p className='text-[14px]'>PASSWORD</p>
                            <input className='border font-light text-[14px] rounded-lg px-4 py-2 w-full' placeholder='請輸入密碼' type="text" />
                        </div>

                        <a href='members.html' className=' block text-center w-full border hover:bg-black mt-[20px] hover:text-white bg-white rounded-lg px-4 py-2'>

                            Sign Up

                        </a>



                    </form>



                    <p className='font-light mt-5'>Already have an account? <a className='font-bold' href="">Sign in</a> instead</p>

                </div>
            </div>
        </div>
    );
};

export default orders;
