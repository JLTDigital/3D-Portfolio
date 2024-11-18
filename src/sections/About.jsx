import React from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'
import { useState } from 'react'

const About = () => {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(' mrjltaft@gmail.com')
    setHasCopied(true)

    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }

  return (
    <section id='about' className='c-space my-20'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='/assets/logo.png'
              alt='grid-1'
              className='w-full sm:h-[276px] h-fit object-contain'
            />
            <div>
              <p className='grid-headtext'>Hi I'm Johnny</p>
              <p className='grid-subtext'>
                With 3 years Experience in an Ecommerce agency, I have honed my
                skills in frontend and backend development and have a Proven
                track record of delivering high-quality projects within
                fast-paced agency environments.
              </p>
            </div>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='/assets/grid5.png'
              alt='grid-2'
              className='w-full sm:w-[276px] sm:h-[276px] h-fit object-contain mx-auto'
            />
            <div>
              <p className='grid-headtext '>Tech Stack</p>
              <p className='grid-subtext'>
                I specialise in Javascript with a focus on React / Next JS
                ecosystems. I also have proficiency in PHP, SQL Databases,
                MongoDB and Express.js,
              </p>
            </div>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-4'>
          <div className='grid-container'>
            <div className='rounded-3xl w-fullsm:h-[326px] h-fit flex justify-center items-center'>
              <Globe
                height={326}
                width={326}
                backgroundColor='rgba(0,0,0,0)'
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
                bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
                labelsData={[
                  {
                    lat: 54.52429,
                    lng: -1.55039,
                    text: 'Im Here',
                    color: 'white',
                    size: 15
                  }
                ]}
              />
            </div>
            <div>
              <p className='grid-headtext'>
                UK based however I can work remotely
              </p>
              <p className='grid-subtext'>I'm based in Darlington, UK</p>
              <a
                className='flex items-center gap-2 cursor-pointer text-white-600'
                href='#contact'>
                <Button name='Contact' isBeam containerClass='w-full mt-10' />
              </a>
            </div>
          </div>
        </div>

        <div className='xl:col-span-2 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='assets/grid3.png'
              alt='grid-3'
              className='w-full sm:h-[266px] h-fit object-contain'
            />

            <div>
              <p className='grid-headtext'>My Passions</p>
              <p className='grid-subtext'>
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
                <br></br>
                <br></br>
                Beyond coding, I’m passionate about the world of technology and
                constantly seek out opportunities to expand my knowledge. When
                I’m not developing, I’m likely training for my next race as an
                avid runner, exploring new languages, or diving into my
                interests in Soviet history and brutalist architecture. My love
                for travel not only fuels my curiosity but also inspires
                creativity in my work, bringing a fresh perspective to every
                project I tackle.
              </p>
            </div>
          </div>
        </div>

        <div className='xl:col-span-1 xl:row-span-2'>
          <div className='grid-container'>
            <img
              src='assets/grid4.png'
              alt='grid-4'
              className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'
            />

            <div className='space-y-2'>
              <p className='grid-subtext text-center'>Contact me</p>
              <div className='copy-container' onClick={handleCopy}>
                <img
                  src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                  alt='copy'
                />
                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>
                  mrjltaft@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
