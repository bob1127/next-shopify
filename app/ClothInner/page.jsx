"use client";

// import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import SwiperCarousel from "../../components/SwiperCarouselFood/index.jsx";
const backgroundImage =
  "https://concept-theme-tech.myshopify.com/cdn/shop/files/home-countdown.webp?v=1708878029&width=2200";
import ShiftDrop from "../../components/ShiftingDropDown/index.jsx";
import SwiperCarouselFood from "../../components/SwiperCarouselFood/index.jsx";
import EmblaCarouselOthers from "../../components/EmblaCarousel06/index.jsx";
import Marquee from "react-fast-marquee";
import EmblaCarousel from "../../components/EmblaCarousel07/index.jsx";
// import CarouselSlider from '../../components/Carousel/Carousel.tsx'

const myLoader = ({ src, width, quality, placeholder }) => {
  return `https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/${src}?w=${width}?p=${placeholder}`;
};

const ProductPost = {
  title: "Humming Probe UH1",
  description:
    "The world's pioneer for calibration - free pH measurement, innovatively integrating the principle of electrode measurement on a single test strip electrode for pH measuring",
  image: "https://www.ultraehp.com/images/Products-Detail-Img/UH-1/UH1-02.webp",
  positive01: "Accurate, calibration-free, ready-to-use",
  positive02: "Accuracy can reach ±0.1 pH",
  positive03: "Disposable to avoid sample cross-contamination",
  LogoImg:
    "https://www.ultraehp.com/images/Products-Detail-Img/UP100/company-logo-mobile.webp",
  BrandName: "UltraE",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "",
  },
};

// const { onOpen, onOpenChange } = useDisclosure();
const Product = (props) => (
  <div className="relative">
    {/* 結構化資料  */}

    <link
      rel="alternate"
      href="https://www.ultraehp.com/hummingprobe/UH1.html"
      hreflang="zh-Hant"
    />
    <link
      rel="alternate"
      href="https://www.ultraehp.com/hummingprobe/en/UH1.html"
      hreflang="en"
    />

    {/* meta seo tag */}
    <title>Food</title>
    <meta key="description" name="description" content="" />
    <meta
      name="keywords"
      content="pH electrode/pH meter/acid-base test/pH test/pH measurement/pH calibration solution"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {/* OG metadata */}
    <meta
      property="og:url"
      content="https://www.ultraehp.com/hummingprobe/UH1.html"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="
Calibration-free micro disposable pH electrode｜Humming Probe UH1 pH electrode
"
    />
    <meta
      property="og:description"
      content="
"
    />
    <meta
      property="og:image"
      content="https://ultraehp.com/images/Ultra Video/UH1/中文版/YouTube-UH1-中文.jpg"
    />

    {/*

{/*
        <AnimatedTabs /> */}
    <div>
      {/* <div className='h-[100vh] items-center flex justify-center bg-black'>
               
            </div> */}

      {/* <p>{ProductPost.description}</p>
            <p className="hidden">Date Published: {ProductPost.datePublished}</p>
           
            <img src={ProductPost.image} alt={ProductPost.title} /> */}

      {/* JSON-LD for Blog Post */}

      {/* 結構化資料 UH1 */}

      <section className="bg-[#f1f0ee] px-[0px] xl:px-[100px] pt-[50px] xl:pt-[190px] section-01 flex   flex-col xl:flex-row justify-center items-center">
        <div className="left bg-white py-[80px] h-full px-[20px] xl:px-[100px] flex flex-row justify-center items-center w-full xl:w-1/2">
          <div className="top flex flex-col justify-center items-center">
            <div className="icon text-[14px] text-center w-[120px] border border-black rounded-[30px] py-1">
              CASE 04
            </div>
            <b className="mt-3"> Creative director</b>
            <div className="mt-2 flex justify-center items-center flex-col">
              <p className="text-[38px] font-bold">中田 慎介</p>
              <span className="text-[14px] mt-1">SHINSUKE NAKADA</span>
            </div>
            <div className="icon flex justify-center items-center">
              <div className="w-[100px] h-[100px] border border-black my-[40px ]"></div>
            </div>
            <div className="content flex flex-col justify-center items-center">
              <p className="text-[20px] mt-[40px] text-center w-2/3 font-bold mb-5 leading-[35px]">
                毎日のアクションを掻き立てる 現代人に欠かせないツールの一つ。
              </p>
              <p className="leading-[25px] text-center text-[14px]">
                〈ビーミング by ビームス〉のコーチジャケットも「Adobe
                Express」も、 分野は異なるものの着心地と使いやすさにおいて
                “日常への取り入れやすさ”が共通点。
                ビームスの頭脳として常に新しいトピックスを届ける中田さんが
                両者の魅力に迫った。
              </p>
            </div>
            <div className="button">
              <a
                href=""
                className="inline-block bg-white mt-5 px-3 py-1 text-center text-black border border-black"
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>
        <div className="xl:w-1/2 w-full right">
          <img
            className="w-full"
            src="https://www.beams.co.jp/special/bmingbybeams/citydwellers/assets/img/case01/sub02@2x.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="section-second  px-[20px] xl:px-[50px] py-[0px]">
        <div className="section-title-cloth  ">
          <h2 className="border-b-2 border-black pb-1">Wearing item</h2>
        </div>
        <div className="items flex flex-col  py-[100px] md:flex-row">
          <div className="left w-full md:w-1/2 flex justify-center items-center">
            <div className="top flex flex-col justify-center">
              <b className="">B:MING by BEAMS</b>
              <h3 className=" text-black text-[30px] font-bold">
                CITY DWELLERS
              </h3>
              <h4 className="text-[20px] font-black mt-5">
                素材の妙でコーチジャケットが <br></br>大人な雰囲気に。
              </h4>
              <p className="text-[12px] w-[80%] mt-5 ">
                ジャージさながらの伸縮性を持つ新開発の素材を使い、ストリートのイメージが強いコーチジャケットをシックに表現。シワになりにくいイージーケアも魅力で、共地のイージースラックとのセットアップでさらに大人っぽく映る。
              </p>
            </div>
          </div>
          <div className="right w-full md:w-1/2 flex overflow-hidden justify-center items-center">
            <EmblaCarousel />
          </div>
        </div>
      </section>
      <section className="section-style py-[80px] ">
        <div className="section-title-cloth ">
          <b className="text-[40px] font-normal border-b-2 pb-1 border-black  text-center">
            Work Style
          </b>
          <p className="text-center mb-5">
            “操る”と“着る”の動作をより楽しいものに。
          </p>
        </div>
        <div className="h-[100vh] flex xl:flex-row">
          <div className="left h-full w-1/2  border border-black">
            <p>img01</p>
          </div>
          <div className="right h-full w-1/2  border border-black ">
            <p>img02</p>
          </div>
        </div>
      </section>
      <section className="xl:px-[100px]  px-[30px] flex-col md:flex-row flex justify-center section-feature ">
        <div className="left p-[60px] w-full md:w-1/2">
          <div className="bg-black h-full w-full text-white">
            <img src="" alt="" />
          </div>
        </div>
        <div className="right flex w-full justify-center items-center flex-col md:w-1/2">
          <div className="flex flex-col">
            <p className="bg-black py-1  text-white flex justify-center w-[120px] inline-block rounded-[30px]">
              Look 01
            </p>
            <p className="text-[30px] mt-4 leading-[40px] w-4/5 font-bold ">
              表現方法を広げてくれる〈アドビ〉の 入門ソフト。
            </p>
            <p className="text-[14px] mt-3">
              コロナ禍で自宅に滞在することが多くなり、少し時間に余裕が生まれたという中田さん。何か新たなチャレンジを模索しようとスタートしたのが、グラフィックの現場で欠かせないソフトウェアの「Adobe
              Illustrator」。「デザイン会社や縫製工場とお仕事をさせていただく機会が多く、せめて仕様書くらいは人に頼らずとも自分で何とか作ろうと思ったのがきっかけ。それとサスティナブルな視点からペーパーレスを目指したいなというのもあって」。友人に教えてもらいながら少しずつスキルが上がってきた中田さんにとって、〈アドビ〉が新たにスタートしたモバイルデザインアプリ「Adobe
              Express」の操作はお手の物。「テンプレートが用意されていることもあって、作りたいデザインがスムーズにできますね。名刺やカードもスマホやタブレットで簡単に制作できるのも驚き」と言う中田さん。「デザイン用のツールは数多くありますが、アウトプットの完成度や自由度の高さは〈アドビ〉ならでは。表現方法が無限に広がるようで操作するだけで楽しいですね」。
            </p>
          </div>
        </div>
      </section>
      <section className="section-cloth  section-others">
        <div className="section-title-cloth  ">
          <h2 className="border-b-2 border-black pb-1">Item line up</h2>
          <p className="text-center">
            “はたらくおとな”を応援する新しいワークウエアコレクション。
          </p>
        </div>
        <EmblaCarouselOthers />
      </section>
      <section className="section-personal ">
        <div className="w-full  h-full xl:h-[700px] flex flex-col md:flex-row">
          <div className="left w-full py-[50px] xl:py-0 xl:w-1/2">
            <img
              data-aos="fade-in"
              className="w-full"
              src="https://www.beams.co.jp/special/bmingbybeams/citydwellers/assets/img/index/case03@2x.jpg"
              alt=""
            />
          </div>
          <div className="right flex flex-col w-full justify-center items-center xl:w-1/2">
            <div
              data-aos="fade-up"
              className=" xl:w-2/3 w-[90%] mx-auto flex justify-center items-center flex-col"
            >
              <b className="font-bold text-[18px] text-center">
                シックなセットアップに カジュアル感をプラス。
              </b>
              <p className="text-[12px] text-center">
                老舗ワークブランド〈UNIVERSAL OVERALL〉に別注。
                ジャケットはカバーオールのサイジングに変更し、
                パンツはワンタック仕様のテーパード。
                ともに大人っぽい印象ながら、ラフに着られるカジュアル感も演出。
              </p>
              <a
                href=""
                className="px-3 py-1 border-1  mt-4 text-[12px] text-center text-black border-black rounded-[30px]"
              >
                City Dwellers : wearing item
              </a>

              <b className="my-[40px] text-center  flex justify-center items-center font-bold text-[18px]">
                Call the Brand <br></br>X <br></br> Look
              </b>
              <a
                href=""
                className="py-2 px-5 text-[#9be523] border-[#9be523] text-center border-1   hover:text-white duration-500 hover:bg-[#9be523]"
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-full  xl:py-0 py-[40px] xl:h-[700px] flex flex-col md:flex-row">
          <div className="right flex flex-col w-full  justify-center items-center xl:w-1/2">
            <div
              data-aos="fade-up"
              className=" w-[90%] mx-auto xl:w-2/3 flex justify-center items-center flex-col"
            >
              <b className="font-bold text-[18px] text-center">
                シックなセットアップに カジュアル感をプラス。
              </b>
              <p className="text-[12px] text-center">
                老舗ワークブランド〈UNIVERSAL OVERALL〉に別注。
                ジャケットはカバーオールのサイジングに変更し、
                パンツはワンタック仕様のテーパード。
                ともに大人っぽい印象ながら、ラフに着られるカジュアル感も演出。
              </p>
              <a
                href=""
                className="px-3 py-1 border-1  mt-4 text-[12px] text-center text-black border-black rounded-[30px]"
              >
                City Dwellers : wearing item
              </a>

              <b className="my-[40px] text-center  flex justify-center items-center font-bold text-[18px]">
                Call the Brand <br></br>X <br></br> Look
              </b>
              <a
                href=""
                className="py-2 px-5 text-[#9be523] border-[#9be523] text-center border-1   hover:text-white duration-500 hover:bg-[#9be523]"
              >
                READ MORE
              </a>
            </div>
          </div>
          <div className="left w-full xl:w-1/2">
            <img
              data-aos="fade-in"
              className="w-full"
              src="https://www.beams.co.jp/special/bmingbybeams/citydwellers/assets/img/case03/talk02@2x.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className=" bg-[#2960e2] px-[30px] xl:px-[100px] frelative section-model">
        <div className="img absolute left-[400px] z-[999999]"></div>

        <div className="txt flex flex-col py-[100px] justify-center items-center  w-full">
          <h2 className="text-[40px] text-white  font-bold">
            しいワークウエアコレクション。
          </h2>
          <p className="text-white text-[25px] font-bold text-center">
            {" "}
            “はたらくおとな”を応援する新しいワークウエアコレクション。
          </p>
          <p className="text-white text-center">
            ”を応援する新しいワークウエアコレ
            <span className="border-b-1 text-white pb-1 border-white">
              アコレクション
            </span>
            ”を応援する新しいワークウエアコレ
            <span className="border-b-1 text-white pb-1 border-white">
              アコレクション
            </span>
          </p>
          <a
            href=""
            className="border-white duration-500 hover:text-[#1667ea] rounded-[5px] hover:bg-white inline-block w-[250px] border text-white text-center px-4 py-4 font-bold mt-5"
          >
            READ MORE
          </a>
        </div>
      </section>
      <section className="section-threeColumn py-[80px]">
        <div className="txt">
          <p className="text-[20px] font-bold">others product </p>
        </div>
        <div className="cloumns-item w-full flex h-[1400px] xl:h-[100vh] flex-col xl:flex-row">
          <div className="item  w-full xl:w-1/3  overflow-hidden group duration-500 relative   border-1  border-white h-full">
            <div className="bg-cover z-[999999] top-0 left-0 bg-[rgba(0,0,0,.4)] w-full h-full"></div>

            <div className="bg-img z-[99] top-0 bottom-0 bg-cover bg-no-repeat  bg-[url('https://www.beams.co.jp/special/bmingbybeams/citydwellers/assets/img/case01/item02-sp.jpg')] h-full absolute  group-hover:blur-sm group-hover:bg-black w-full  scale-100 group-hover:scale-105 duration-1000"></div>
            <div className="txt  group-hover:bg-[rgba(0,0,0,.4)] px-4 group py-[40px] group-hover:bottom-0  duration-1000 bottom-[-15%]  absolute w-full opacity-0 group-hover:opacity-100 border-1 border-white z-[999] flex justify-center items-center flex-col">
              <div className="icon border-1 border-white rounded-[25px]  px-3 py-2text-[12px] mb-4 text-white text-center">
                CASE 02
              </div>
              <p className="text-[14px] text-white">Brading-Deirection</p>
              <b className="text-[32px] font-normal  text-white text-center">
                重釋曉
              </b>
              <div className="line my-[40px] h-[1px] bg-white w-[70px] mx-auto"></div>
              <p className="text-white mt-[20px]">
                移動が多い現代人の働くスタイルとは？を見る
              </p>
              <div className="marquee opacity-0 group-hover:opacity-100   duration-400  delay-300  mt-3">
                <Marquee>
                  <p className="text-white">
                    • Why do octopuses have eight arms?{" "}
                    <span className="text-orange-500">
                      • The better to punch fish with,
                    </span>
                  </p>
                  <p className="text-orange-500 ">new research reveals.</p>
                </Marquee>
              </div>
            </div>
          </div>
          <div className="item w-full xl:w-1/3  overflow-hidden group duration-500 relative   border-1  border-white h-full">
            <div className="bg-cover z-[999999] top-0 left-0 bg-[rgba(0,0,0,.4)] w-full h-full"></div>

            <div className="bg-img z-[99] top-0 bottom-0 bg-cover bg-no-repeat  bg-[url('https://www.beams.co.jp/special/bmingbybeams/citydwellers/assets/img/case01/item01-sp.jpg')] h-full absolute  group-hover:blur-sm group-hover:bg-black w-full  scale-100 group-hover:scale-105 duration-1000"></div>
            <div className="txt  group-hover:bg-[rgba(0,0,0,.4)] px-4 group py-[40px] group-hover:bottom-0  duration-1000 bottom-[-15%]  absolute w-full opacity-0 group-hover:opacity-100  z-[999] flex justify-center items-center flex-col">
              <div className="icon border-1 border-white rounded-[25px]  px-3 py-2text-[12px] mb-4 text-white text-center">
                CASE 02
              </div>
              <p className="text-[14px] text-white">Brading-Deirection</p>
              <b className="text-[32px] font-normal  text-white text-center">
                重釋曉
              </b>
              <div className="line my-[40px] h-[1px] bg-white w-[70px] mx-auto"></div>
              <p className="text-white mt-[20px]">
                移動が多い現代人の働くスタイルとは？を見る
              </p>
              <div className="marquee opacity-0 group-hover:opacity-100   duration-400  delay-300  mt-3">
                <Marquee>
                  <p className="text-white">
                    • Why do octopuses have eight arms?{" "}
                    <span className="text-orange-500">
                      • The better to punch fish with,
                    </span>
                  </p>
                  <p className="text-orange-500 ">new research reveals.</p>
                </Marquee>
              </div>
            </div>
          </div>
          <div className="item  w-full xl:w-1/3  overflow-hidden group duration-500 relative   border-1  border-white h-full">
            <div className="bg-cover z-[999999] top-0 left-0 bg-[rgba(0,0,0,.4)] w-full h-full"></div>

            <div className="bg-img z-[99] top-0 bottom-0 bg-cover bg-no-repeat  bg-[url('https://www.beams.co.jp/special/bmingbybeams/citydwellers/assets/img/case01/item05-sp.jpg')] h-full absolute  group-hover:blur-sm group-hover:bg-black w-full  scale-100 group-hover:scale-105 duration-1000"></div>
            <div className="txt  group-hover:bg-[rgba(0,0,0,.4)] px-4 group py-[40px] group-hover:bottom-0  duration-1000 bottom-[-15%]  absolute w-full opacity-0 group-hover:opacity-100 z-[999] flex justify-center items-center flex-col">
              <div className="icon border-1 border-white rounded-[25px]  px-3 py-2text-[12px] mb-4 text-white text-center">
                CASE 02
              </div>
              <p className="text-[14px] text-white">Brading-Deirection</p>
              <b className="text-[32px] font-normal  text-white text-center">
                重釋曉
              </b>
              <div className="line my-[40px] h-[1px] bg-white w-[70px] mx-auto"></div>
              <p className="text-white mt-[20px]">
                移動が多い現代人の働くスタイルとは？を見る
              </p>
              <div className="marquee opacity-0 group-hover:opacity-100   duration-400  delay-300  mt-3">
                <Marquee>
                  <p className="text-white">
                    • Why do octopuses have eight arms?{" "}
                    <span className="text-orange-500">
                      • The better to punch fish with,
                    </span>
                  </p>
                  <p className="text-orange-500 ">new research reveals.</p>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Product;
