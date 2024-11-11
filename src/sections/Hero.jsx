import { PerspectiveCamera, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import HackerRoom from '../components/HackerRoom'
import Rings from '../components/Rings'
import CanvasLoader from '../components/CanvasLoader'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'
import JavascriptLogo from '../components/JavascriptLogo'

const Hero = () => {
  // const x = useControls('HackerRoom', {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10
  //   }
  // })

  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <section className='min-h-screen border-2 border-[#49FCD4] w-full flex flex-col relative'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
          Hi, I am Johnny <span className='waving-hand'>👋</span>
          <p className='hero_tag text-gray_gradient'>Full Stack Developer</p>
        </p>
      </div>
      <div className='w-full h-full absolute inset-0'>
        {/* <Leva /> */}
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>
            <group>
              <JavascriptLogo
                position={sizes.jsPosition}
                rotation={[0, 2.3, 1]}
                scale={sizes.jsScale}
              />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={6}
              saturation={1}
              fade
              speed={0.1}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
        <a href='#about' className='w-fit'>
          <Button
            name="Let's Work Together"
            isBeam
            containerClass='sm:w-fit w-full sm:min-w-96'
          />
        </a>
      </div>
    </section>
  )
}

export default Hero
