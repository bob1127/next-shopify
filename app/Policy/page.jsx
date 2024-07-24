// export const metadata = {
//     title: 'Home - Simple',
//     description: 'Page description',
// }

"use client"
import Link from "next/link";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import Image from 'next/image'
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import React from "react";
import img01 from "../../public/images/brazil.webp";
import { Cloudinary } from "@cloudinary/url-gen";

const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}
const cld = new Cloudinary({
    cloud: {
        cloudName: 'dc9veqqhp'
    }
})


const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: 1
        }
    }

}
const title01 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: 1.4,
            delay: 0,
        }
    }

}
const title02 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: 1.4,
            delay: .3,
        }
    }

}
const title03 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: 1,
            delay: .9,
        }
    }

}

const card01
    = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: .8,
            delay: 0,
        }
    }

}
const card02 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: .8,
            delay: .3,
        }
    }

}
const card03 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: .8,
            delay: .6,
        }
    }

}
const card04 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: .8,
            delay: .9,
        }
    }

}
const card05 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: .8,
            delay: 1.2,
        }
    }

}
const card06 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: .8,
            delay: 1.5,
        }
    }

}
const ImageAnimate = {
    offscreen: { y: 200, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: 1.4,
            delay: 0.5,
        }
    }

}


const Index = props => (

    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
        <motion.div className="card"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.3 }}
        >

            {/* metadata */}
            <title>Privacy Policy
｜UltraE</title>
            <meta key="description" name="description" content="非常歡迎您光臨「超極生技股份有限公司網站」（以下簡稱本網站），為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：" />
            <meta name="keywords" content="蜂鳥探針｜pH試片電極支架/連續pH檢測實驗使用磁力攪拌器pH測試" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* OG metadata */}
            <meta property="og:url" content="https://www.ultraehp.com/hummingprobe/CS200.html" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="隱私權條款｜超極生技UltraE" />
            <meta property="og:description" content="非常歡迎您光臨「超極生技股份有限公司網站」（以下簡稱本網站），為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：" />
            <meta property="og:image" content="https://www.ultraehp.com/images/Products-Detail-Img/CS200/CS200-首圖機身1000x1000.webp" />

            <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/CS200.html" hreflang="zh-Hant" />
            <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/en/CS200.html" hreflang="en" />





            <section>
                {/* <Image></Image> */}
            </section>


            <a href="https://www.ultraehp.com/en"><Image loader={myLoader001} src='Ultrae-logo.png' width={80} loading='lazy' placeholder='empty' className="fixed mt-3 ml-[20px] md:ml-[90px] z-50 top-[60px] left-10" alt='Ultrae-logo' height={40}></Image> </a>

            <section className="mt-[200px] flex justify-center items-center">
                <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                    <a href="https://www.ultraehp.com/Policy.html">
                        <div className='w-[40px] h-[40px] text-[18px] bg-white    text-black rounded-full flex justify-start pl-[11.5px] items-center '>cn</div>
                    </a>
                </div>
                <div className="langDropdown w-[10px]  text-right ml-[87.5vw]  top-[15px] fixed z-[999]">

                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                variant="bordered p-0"
                                className="w-[10px] p-0 m-0"
                            >
                                {/* <Image className='mb-3 pr-20' src='earth.png' loader={myLoader03} loading='lazy' placeholder='empty' alt='language-switch' width={33} height={33} /> */}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="new">
                                <a href="https://www.ultraehp.com/en/Policy.html">English</a>
                            </DropdownItem>
                            <DropdownItem key="new">
                                <a href="https://www.ultraehp.com/Policy.html">繁體中文</a>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>


                </div>
                <div className="container mx-[25px] md:mx-[50px] lg:mx-0  py-[50px] bg-[#01a5d3] rounded-xl  border">
                  
                        <div className=" w-full sm:w-[80%] md:w-[50%] mx-auto  ">
                        <h1 className="text-[32px] text-white text-center font-extrabold">Privacy Policy
</h1>
                        

                        <p className="text-center text-gray-50  text-[14px]">You are welcome to visit UltraE website (http(s)://www.ultraehp.com, the website). We comply with the "Personal Information Protection Act" and related regulations in Taiwan, and understand/value privacy policy, information secrecy and confidential issues for visitors and users to the website. For your using of the website’s service and information without any uneasiness, DSC hereby explain the website’s privacy policy in detail to protect your rights and interests. Please read the following contents carefully.


</p>
                        </div>
                  
                </div>
            </section>
            <section className="pb-[140px] md:px-[100px] xl:px-[150px] 2xl:px-[300px] md:pb-0 px-[15px] lg:px-[70px]">
                <div className="container mx-auto py-0 xl:py-[50px]  my-[50px]  p-[10px] 2xl:p-[50px]  ">
                    <div className="row">
                        <div className="row mt-4  font-extrabold text-[26px]">
                            1.The Ambit of Privacy Policy


                       </div>
                       <p className="text-[16px]">
                            While you are using website’s service, the website collects identifiable personal information. The privacy policy includes how the website processes these identifiable personal information, and does not apply to related linked websites outside the website, nor to those who are not entrusted or involved in the management of the website.




                       </p>
                    </div><div className="row">
                        <div className="row mt-4  font-extrabold text-[26px]">
                            2. The Purpose and Classification of Collecting Personal Data



                        </div>
                        <p className="text-[16px]">
                            If you are a visitor to the website, you are allowed to access the website without providing any personal information. For your necessities to get the website’s services and ensuring the website to provide necessary services continuously, the website will collect your personal information.





                        </p>
                    </div>
                    <div className="row mt-4 font-extrabold">
                        <b className=" text-[26px]">  3. The Collection, Process and Use of Personal Data
</b>
                        <ul>
                            <li className="text-[16px]  font-normal">• When you visit the website or use the services provided by the website, we will ask you to provide necessary personal information with regards to the service essence, and only process and use your personal information within specific purpose and ambit; the website will not use your personal data for other purposes without your agreement.
</li>
                            <li className="text-[16px]  font-normal">• The website will keep your name, email address, contact information and usage time while you use interactive functions such as service mailbox or questionnaires.

</li>
                            <li className="text-[16px]  font-normal">• During browsing, the website will automatically keep records of equipment’s IP address, usage time, browser type and browsing history, etc. All those records are for internal application traffic analysis only, will not be published, not be associated with specific individual, and will not be analyzed for specific record.

</li>
                            <li className="text-[16px]  font-normal">• In order to provide accurate services, we will analyze collected questionnaires and data. Except for internal research, the analysis result of statistical data or explanatory will be published without involving any specific individual information if necessary.
</li>
                        </ul>

                    </div>
                    <div className="row mt-4  font-extrabold">
                        <b className="mt-[15px] text-[26px]">  4. The Protection of Data

</b>
                        <p className="text-[16px]"></p>
                        <ul>
                            <li className="text-[16px]  font-normal">• We endeavor to protect the website and your personal information with reasonable technology, procedures and related information security equipment and necessary measures. Only authorized personnel can access your personal data. All of related personnel will sign confidentiality contract, and will be subject to related legal actions if violating the confidentiality obligations.</li>

                            <li className="text-[16px]  font-normal">• When it is necessary to entrust other organizations to provide services due to business needs, the website will request those organizations to take appropriate security maintenance measures and comply the confidentiality obligations. We will take every necessary inspection procedures to ensure those measures and obligations will be complied.


                            </li>
                        </ul>
                    </div>
                    <div className="row mt-4  font-extrabold">
                        <b className="mt-[15px] text-[26px]"> 5. Link to Other Sites


                        </b>
                        <p className="text-[16px]">This privacy policy and other notices of the website are only applicable to the website. The website provide links to other websites, and you can access other websites by clicking links from the website. However, the linked websites may not be subject to this privacy policy of the website, you must refer to the privacy policy of those linked websites.



</p>
                      
                    </div>
                    <div className="row mt-4  font-extrabold">
                        <b className="mt-[15px] text-[26px]"> 6. Transfer of Data


                        </b>
                        <p className="text-[16px]">This website will never provide, exchange, rent or sell any of your personal data to other individuals, groups, private companies or public authorities, except where there is a legal basis or contractual obligations. The circumstances of the preceding paragraph include but are not limited to:




                        </p>
                        <br>
                        </br>
                      

                        <ul>
                            <li className="text-[16px]  font-normal">• By your consent.

</li>
                            <li className="text-[16px]  font-normal">• To avoid the danger of your life, body, freedom or property.


                            </li>
                            <li className="text-[16px] font-normal">• By law obligations.


                            </li>
                            <li className="text-[16px]  font-normal">• To collaborate with public agencies or academic research institutions, due to the necessary of statistical or academic research based on public interest, and the data which is processed by the provider or the collector cannot identify the particular party in the manner in which it is disclosed.


                            </li>
                            <li className="text-[16px] font-normal">• To identify, contact or take legal actions through the website administrator’s analysis, due to your activities on the website violate the Terms of Service or may harm or hinder the website other user rights or cause harm to anyone.


                            </li>
                            <li className="text-[16px] font-normal">• To conducive to your rights and interests.



                            </li>
                            <li className="text-[16px] font-normal">• When the commissioned vendor of the website is asked to assist in the collection, processing or use of your personal data, it will be responsible for the supervision and management of the subcontractor or individual.




                            </li>
                        </ul>
                    </div>

                    <div className="row mt-4  font-extrabold">
                        <b className="mt-[15px] text-[26px]"> 7. Right of the parties



                        </b>
                        <p className="text-[16px]">The parties to the collection of personal data on the website may exercise the following rights in accordance with the Personal Data Protection Act:





                        </p>
                        <ul>
                            <li>
                                • Query or request a review.
                            </li>
                            <li>• Request a copy to the copy.
</li>
                            <li>• Request supplements or corrections.
</li>
                            <li>• Request to stop collecting, processing, and utilizing.
</li>
                            <li>• Request to delete.
</li>
                        </ul>

                    </div>
                    <div className="row mt-4  font-extrabold">
                        <b className="mt-[15px] text-[26px]"> 
                            8. Use of Cookies


                        </b>
                        <p className="text-[16px]">In order to provide you with the best service, the website will place and access our cookies on your computer. If you do not accept cookies, you can set the privacy level in your browser privacy settings such as high, or through the browser's cancellation or limitation of this feature. You can refuse cookies, but may lead to some features of the website cannot be executed normally.





                        </p>

                    </div>
                    <div className="row mt-4  font-extrabold">
                        <b className="mt-[15px] text-[26px]">
                            9. Changes to This Privacy Policy



                        </b>
                        <p className="text-[16px]">The privacy policy of the website will be amended at any time according to the needs. The revised terms will be posted on the website without any separate notice. You can read the revised privacy statement and related notices on this website at any time. If you have any questions about the privacy statement of the website or related matters related to your personal information, please contact ds@dragonsteel.com.tw.





                        </p>

                    </div>
                    
                </div>
            </section>

          


        </motion.div>

     
    </motion.div>


)

export default Index;
