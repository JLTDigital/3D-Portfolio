import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const JavascriptLogo = (props) => {
  const targetRef = useRef()

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true
    })
  })

  const { nodes, materials } = useGLTF('/models/javascript.glb')
  return (
    <group {...props} dispose={null} ref={targetRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.mat_3220964}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/javascript.glb')

export default JavascriptLogo
