'use client'

import React, {useRef} from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform} from "framer-motion"



const statContent = {
  stats: [
    {
      number:"50 +",
      label: "Students"
    },
    {
      number:"10 +",
      label: "Years Exp"
    },
  ],
}

const heroContent = {
  intro: {
    title: "Personal Coach Jeremy",
    subTitle: "+50 +10",
    subTitles: " Students - Years Experiences",
    description: "Je suis Andy Ramaroson, un développeur web FullStack JS basée sur Bordeaux (N. Aquitaine, 33) et je réalise tous types de logiciels et d'applications sur mesure en me basant sur des technologies .",
    btn: {
      href:"/projects",
      label: "Commancer"
    }
  }
}

const Hero = ({ className }) => {

  const ref= useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const imgScroll1 = useTransform(scrollYProgress, [0,1], ['20%', '-20%'])
  const imgScroll2 = useTransform(scrollYProgress, [0,1], ['100%', '50%'])

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center space-x-0 mt-10 ">
          <div className="w-full lg:w-8/12 lg:mb-0">
            <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 ">
              {statContent.stats.map((stat, index) => (
                <div className="text-center text-white lg:text-left mb-10" key={stat.label}>
                  <strong className='text-white text-4xl xl:text-[52px] font-bold leading-tight'>
                    { stat.number }
                  </strong>
                  <br/>
                  <span>{stat.label}</span> 
              </div>
              ))}
            </div>

            {/* Content left - title */}

            {heroContent.intro.title && (
              <motion.h1
                initial={{opacity: 0, y:20}}
                whileInView ={ {
                  opacity:1,
                  y:0,
                  transition: { delay: 0.2, duration: 0.5 }
                }}
                viewport={{ once: true}}
                data-testid="hero-title"
                className=" text-orange-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-auto lg:w-screen max-w-xl mb-4 md:mb-8">
                  { heroContent.intro.title }
              </motion.h1>
            )}

            {/* Content left - description */}

            {heroContent.intro.description && (
              <motion.p
                initial={{opacity: 0, y:20}}
                whileInView ={ {
                  opacity:1,
                  y:0,
                  transition: { delay: 0.2, duration: 0.5 }
                }}
                viewport={{ once: true}}
                className="leading-relaxed text-white w-auto lg:w-screen max-w-xl
                  text-base lg:text-lg mb-10 lg:mb-16">
                    { heroContent.intro.description }
              </motion.p>
            )}

            {/* btn link */}

            {heroContent.intro.btn.label && (
              <motion.btn
                initial={{opacity: 0, y:20}}
                whileInView ={ {
                  opacity:1,
                  y:0,
                  transition: { delay: 0.2, duration: 0.5 }
                }}
                viewport={{ once: true}}
              >
                <Link href={heroContent.intro.btn.href}
                  className="transistion-all duration-300 ease-in-out text-[11.5px]
                    tracking-[2px] font-bold uppercase bg-orange-600 py-4 px-5
                    rounded text-white inline-block hover:bg-white hover:text-orange-600 hover:shadow-2xl mb-10">
                  {heroContent.intro.btn.label}
                </Link>
              </motion.btn>
            )}
          </div>

          {/* Image right */}

          <div className="lg:w-7/12 relative rounded-md">
            <motion.div
              initial={{ opacity: 0, x:20 }}
              whileInView={{
                opacity:1,
                x:0,
                transition: {
                  delai: 0.4,
                  duration:0.5,
                }
              }}
              viewport={ { once: true}}
              style={{y: imgScroll1}}
              className="z-[2] relative bg-cover bg-center">
              <Image src="/images/coach1.jpg" width={800} height={985} alt="hero image"/>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
