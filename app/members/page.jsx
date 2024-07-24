import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

import Image from 'next/image.js';

const orders = () => {
    return (
        <div className='bg-gray-200  flex justify-center items-center min-h-screen'>

            <div className="wrap">
                <h5>會員資料-檢測資料</h5>
                <p>會員ID:7889798789</p>


                <div className="item-wrap flex flex-wrap flex-row border-black w-screen border">



                    <div class="w-full max-w-sm   m-4 bg-white shadow-xl rounded-lg  ">
                        <div class="flex justify-end px-4 pt-4">
                            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                <span class="sr-only">Open dropdown</span>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                            </button>

                            <div id="dropdown" class="z-1 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg  w-44 dark:bg-gray-700">
                                <ul class="py-2" aria-labelledby="dropdownButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-gray-700">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-gray-700">Export Data</a>
                                    </li>
                                    <li>
                                        <a href="chart" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-gray-700">Delete</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex flex-col items-center pb-10">
                            <div className="img border bg-gray-900 border-white w-3/4 h-[200px] m-5">

                            </div>

                            <h5 class="mb-1 text-xl font-normal text-gray-900 dark:text-gray-700">Bonnie Green</h5>

                            <div className="txt w-[70%] mt-[20px] mx-auto flex flex-col justify-start items-start">
                                <p className='text-[14px] font-light text-gray-700'>血糖：200 mg/dl</p>
                                <p className='text-[14px] font-light text-gray-700'>溫度： 44 c</p>
                            </div>
                            <div class="flex mt-4 md:mt-6">

                            </div>
                        </div>
                        <div>
                            <a href="chart.html" className='border hover:bg-gray-300 rounded-xl font-light py-2 text-center w-[200px] mb-[40px] mx-auto block'> Detail</a>
                        </div>
                    </div>


                    <div class="w-full max-w-sm   m-4 bg-white shadow-xl rounded-lg  ">
                        <div class="flex justify-end px-4 pt-4">
                            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                <span class="sr-only">Open dropdown</span>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                            </button>

                            <div id="dropdown" class="z-1 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg  w-44 dark:bg-gray-700">
                                <ul class="py-2" aria-labelledby="dropdownButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-gray-700">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-gray-700">Export Data</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-gray-700">Delete</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex flex-col items-center pb-10">
                            <div className="img border bg-gray-900 border-white w-3/4 h-[200px] m-5">

                            </div>

                            <h5 class="mb-1 text-xl font-normal text-gray-900 dark:text-gray-700">Bonnie Green</h5>

                            <div className="txt w-[70%] mt-[20px] mx-auto flex flex-col justify-start items-start">
                                <p className='text-[14px] font-light text-gray-700'>血糖：200 mg/dl</p>
                                <p className='text-[14px] font-light text-gray-700'>溫度： 44 c</p>
                            </div>
                            <div class="flex mt-4 md:mt-6">

                            </div>
                        </div>
                        <div>
                            <a href="/" className='border hover:bg-gray-300 rounded-xl font-light py-2 text-center w-[200px] mb-[40px] mx-auto block'> Detail</a>
                        </div>
                    </div>

                    <div class="w-full max-w-sm   m-4 bg-white shadow-xl rounded-lg  ">
                        <div class="flex justify-end px-4 pt-4">
                            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                <span class="sr-only">Open dropdown</span>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                            </button>

                            <div id="dropdown" class="z-1 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg  w-44 dark:bg-gray-700">
                                <ul class="py-2" aria-labelledby="dropdownButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-gray-700">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-gray-700">Export Data</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-gray-700">Delete</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex flex-col items-center pb-10">
                            <div className="img border bg-gray-900 border-white w-3/4 h-[200px] m-5">

                            </div>

                            <h5 class="mb-1 text-xl font-normal text-gray-900 dark:text-gray-700">Bonnie Green</h5>

                            <div className="txt w-[70%] mt-[20px] mx-auto flex flex-col justify-start items-start">
                                <p className='text-[14px] font-light text-gray-700'>血糖：200 mg/dl</p>
                                <p className='text-[14px] font-light text-gray-700'>溫度： 44 c</p>
                            </div>
                            <div class="flex mt-4 md:mt-6">

                            </div>
                        </div>
                        <div>
                            <a href="/" className='border hover:bg-gray-300 rounded-xl font-light py-2 text-center w-[200px] mb-[40px] mx-auto block'> Detail</a>
                        </div>
                    </div>


                    <div class="w-full max-w-sm   m-4 bg-white shadow-xl rounded-lg  ">
                        <div class="flex justify-end px-4 pt-4">
                            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                <span class="sr-only">Open dropdown</span>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                            </button>

                            <div id="dropdown" class="z-1 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg  w-44 dark:bg-gray-700">
                                <ul class="py-2" aria-labelledby="dropdownButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-gray-700">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-gray-700">Export Data</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-gray-700">Delete</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex flex-col items-center pb-10">
                            <div className="img border bg-gray-900 border-white w-3/4 h-[200px] m-5">

                            </div>

                            <h5 class="mb-1 text-xl font-normal text-gray-900 dark:text-gray-700">Bonnie Green</h5>

                            <div className="txt w-[70%] mt-[20px] mx-auto flex flex-col justify-start items-start">
                                <p className='text-[14px] font-light text-gray-700'>血糖：200 mg/dl</p>
                                <p className='text-[14px] font-light text-gray-700'>溫度： 44 c</p>
                            </div>
                            <div class="flex mt-4 md:mt-6">

                            </div>
                        </div>
                        <div>
                            <a href="/" className='border hover:bg-gray-300 rounded-xl font-light py-2 text-center w-[200px] mb-[40px] mx-auto block'> Detail</a>
                        </div>
                    </div>


                    <div class="w-full max-w-sm   m-4 bg-white shadow-xl rounded-lg  ">
                        <div class="flex justify-end px-4 pt-4">
                            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                <span class="sr-only">Open dropdown</span>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                            </button>

                            <div id="dropdown" class="z-1 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg  w-44 dark:bg-gray-700">
                                <ul class="py-2" aria-labelledby="dropdownButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-gray-700">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-gray-700">Export Data</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-gray-700">Delete</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex flex-col items-center pb-10">
                            <div className="img border bg-gray-900 border-white w-3/4 h-[200px] m-5">

                            </div>

                            <h5 class="mb-1 text-xl font-normal text-gray-900 dark:text-gray-700">Bonnie Green</h5>

                            <div className="txt w-[70%] mt-[20px] mx-auto flex flex-col justify-start items-start">
                                <p className='text-[14px] font-light text-gray-700'>血糖：200 mg/dl</p>
                                <p className='text-[14px] font-light text-gray-700'>溫度： 44 c</p>
                            </div>
                            <div class="flex mt-4 md:mt-6">

                            </div>
                        </div>
                        <div>
                            <a href="/" className='border hover:bg-gray-300 rounded-xl font-light py-2 text-center w-[200px] mb-[40px] mx-auto block'> Detail</a>
                        </div>
                    </div>


                    <div class="w-full max-w-sm   m-4 bg-white shadow-xl rounded-lg  ">
                        <div class="flex justify-end px-4 pt-4">
                            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                <span class="sr-only">Open dropdown</span>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                </svg>
                            </button>

                            <div id="dropdown" class="z-1 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg  w-44 dark:bg-gray-700">
                                <ul class="py-2" aria-labelledby="dropdownButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-gray-700">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-gray-700">Export Data</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-gray-700">Delete</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex flex-col items-center pb-10">
                            <div className="img border bg-gray-900 border-white w-3/4 h-[200px] m-5">

                            </div>

                            <h5 class="mb-1 text-xl font-normal text-gray-900 dark:text-gray-700">Bonnie Green</h5>

                            <div className="txt w-[70%] mt-[20px] mx-auto flex flex-col justify-start items-start">
                                <p className='text-[14px] font-light text-gray-700'>血糖：200 mg/dl</p>
                                <p className='text-[14px] font-light text-gray-700'>溫度： 44 c</p>
                            </div>
                            <div class="flex mt-4 md:mt-6">

                            </div>
                        </div>
                        <div>
                            <a href="/" className='border hover:bg-gray-300 rounded-xl font-light py-2 text-center w-[200px] mb-[40px] mx-auto block'> Detail</a>
                        </div>
                    </div>



                    {/* 
                    <div className="item">
                        
                    </div> */}

                </div>
            </div>


        </div>
    );
};

export default orders;
