import React, { useEffect, useRef } from 'react';
// import { TrendingUp } from 'lucide-react';
import styles from '../page.module.scss';
import Navbar from './components/Navbar';
import TrendingSection from './components/TrendingSection';
import BlogSection from './components/BlogSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <main>
        <HeroSection />
        <TrendingSection />
        <BlogSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}




function HeroSection() {
  
  const word = "with framer-motion";


  const container = useRef(null);

  const { scrollYProgress } = useScroll({

      target: container,

      offset: ['start end', 'end start']

  })

  const sm = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const md = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const lg = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const fashionImages = [
    "https://i.pinimg.com/736x/e7/18/7b/e7187b4db8252edfae647e8fabda2c2b.jpg",
    "https://i.pinimg.com/736x/c6/04/ca/c604ca904ce75beb7a3b30653116d472.jpg",
    "https://i.pinimg.com/474x/a9/68/e8/a968e8a461ce832531f566b61194c75f.jpg",
    "https://i.pinimg.com/474x/9c/6f/76/9c6f769830eebc79a0ab6ede468ad4a0.jpg",
    "https://assets.vogue.in/photos/67a628a1ad2db5365e65cf16/1:1/w_960,c_limit/Snapinst.app_476454275_18482675695022361_2308473927461730607_n_1080.jpg",
    "https://i.pinimg.com/474x/e7/e1/2e/e7e12ead3e60dc3136c5c73cf292f3a4.jpg"
  ];
  

  const images = [

      {

          src: fashionImages[0],

          y: 0

      },

      {

          src: fashionImages[1],

          y: lg

      },

      {

          src: fashionImages[2],

          y: md

      }
      ,

      {

          src: fashionImages[3],

          y: sm

      
      },

      {

          src: fashionImages[4],

          y: md

      }
      ,

      {

          src: fashionImages[5],

          y: md

      }

  ];
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!stackRef.current) return;
  //     const scrollPosition = window.scrollY;
  //     const stackElements = stackRef.current.children;
  //     const maxRotation = 45;
  //     const maxTranslate = 100;

  //     Array.from(stackElements).forEach((element, index) => {
  //       const htmlElement = element as HTMLElement;
  //       const factor = (stackElements.length - index) / stackElements.length;
  //       const rotation = Math.min((scrollPosition / 10) * factor, maxRotation);
  //       const translate = Math.min((scrollPosition / 5) * factor, maxTranslate);
        
  //       htmlElement.style.transform = `
  //         rotate(${rotation}deg)
  //         translateX(${translate}px)
  //         translateY(${translate}px)
  //         scale(${1 - index * 0.1})
  //       `;
  //       htmlElement.style.opacity = (1 - (scrollPosition / 1000) * factor).toString();
  //     });
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className="relative  overflow-hidden bg-white">
      <div className="absolute z-10" />
      
      

      {/* Content */}
      {/* <div className="relative h-full flex items-center justify-center z-20">
        <div className="text-center text-white px-4">
          <h1 className="">Discover Indian Fashion</h1>
          <p className="text-xl md:text-2xl mb-8">Your gateway to the latest trends and styles</p>
        </div>
      </div> */}
      <div ref={container} className={styles.container}>

<div className={styles.body}>

    <motion.h1 style={{y:50}}>what's Trending</motion.h1>

    <h1 className='text-gray-600 m-2 font-montserrat'>Fashion</h1>

    {/* <div className={styles.word}>

        <p>

            {

                word.split("").map((letter, i) => {

                    const y = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -75) - 25])

                    return <motion.span style={{top: y}} key={`l_${i}`} >{letter}</motion.span>

                })

            }

        </p>

    </div> */}

</div>

<div className={styles.images}>
          {images.map(({ src, y }, i) => {
            return (
              <motion.div
                style={{ y }}
                key={`i_${i}`}
                className={styles.imageContainer}
              >
                <img src={src} alt="image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            );
          })}
        </div>
</div>
</div>
  );
}

export default App;