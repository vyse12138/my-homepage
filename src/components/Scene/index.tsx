import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

export default function Scene() {
  const con = React.useRef<HTMLElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const scene = new THREE.Scene()

    const loader = new GLTFLoader()
    loader.load('./dog.glb', function (gltf) {
      const model = gltf.scene
      console.log(gltf)
      model.name = 'dog'
      model.position.y = 0
      model.position.x = 0
      model.receiveShadow = false
      model.castShadow = false
      scene.add(gltf.scene)

      const scale = 6
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )

      camera.position.copy(
        new THREE.Vector3(
          20 * Math.sin(0.2 * Math.PI),
          10,
          20 * Math.cos(0.2 * Math.PI)
        )
      )
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })

      camera.lookAt(new THREE.Vector3(-0.5, 1.2, 0))

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = new THREE.Vector3(-0.5, 1.2, 0)

      setIsLoading(false)
      const container = con.current
      if (container) {
        container.appendChild(renderer.domElement)
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(400, 400)
        renderer.outputEncoding = THREE.sRGBEncoding
      }
      let req: number
      let frame = 0
      const animate = function () {
        req = requestAnimationFrame(animate)
        frame = frame <= 100 ? frame + 1 : frame
        if (frame < 100) {
          const p = new THREE.Vector3(
            20 * Math.sin(0.2 * Math.PI),
            10,
            20 * Math.cos(0.2 * Math.PI)
          )
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20
          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(new THREE.Vector3(-0.5, 1.2, 0))
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      animate()

      return () => {
        console.log('unmount')
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    })
  }, [])
  return (
    <>
      {isLoading ? (
        <Box sx={{ minHeight: 400, minWidth: 400 }}>Loading...</Box>
      ) : (
        <Box sx={{}} ref={con}></Box>
      )}
    </>
  )
}
