import { useEffect, useRef, useState } from 'react'
import { Box, CircularProgress, useTheme } from '@mui/material'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function Scene() {
  const container = useRef<HTMLElement>(null)
  const theme = useTheme()
  const [isLoading, setIsLoading] = useState<boolean | null>(null)

  useEffect(() => {
    setIsLoading(true)
  }, [])

  useEffect(() => {
    // scene
    const scene = new THREE.Scene()
    scene.add(new THREE.AmbientLight(0xcccccc, 1))

    // renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.setPixelRatio(window.devicePixelRatio)
    window.screen.availWidth < 600
      ? renderer.setSize(
          0.9 * window.screen.availWidth,
          0.6 * window.screen.availWidth
        )
      : renderer.setSize(600, 400)

    // model: "Voxel Dog" (https://skfb.ly/6W9QU) by Takuya is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
    new GLTFLoader().load('./dog.glb', function (model) {
      model.scene.position.y = -1.75
      scene.add(model.scene)
      setIsLoading(false)

      if (container.current) {
        container.current.firstChild &&
          container.current.removeChild(container.current.firstChild)
        container.current.appendChild(renderer.domElement)
      }

      // animation
      let time = 0
      ;(function animate() {
        requestAnimationFrame(animate)
        if (time < 120 && time++) {
          const speed = Math.pow(120 - time, 3) / 32500

          camera.position.x =
            20 * Math.sin(0.2 * Math.PI) * Math.cos(speed) +
            20 * Math.cos(0.2 * Math.PI) * Math.sin(speed)
          camera.position.z =
            20 * Math.cos(0.2 * Math.PI) * Math.cos(speed) -
            20 * Math.sin(0.2 * Math.PI) * Math.sin(speed)
        }

        controls.update()
        renderer.render(scene, camera)
      })()
    })

    // camera
    const camera = new THREE.OrthographicCamera(-9, 9, 6, -6, 0.01, 50000)
    camera.position.y = 10

    // control
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = true
    controls.target = new THREE.Vector3(0, 0, 0)

    return () => {
      renderer.dispose()
    }
  }, [])

  return (
    <>
      {isLoading === true ? (
        <Box
          sx={{
            display: 'flex',
            minHeight:
              window.screen.availWidth < 400
                ? 0.6 * window.screen.availWidth
                : 400,
            minWidth:
              window.screen.availWidth < 600
                ? 0.9 * window.screen.availWidth
                : 600,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            [theme.breakpoints.down('sm')]: {
              minHeight: '200',
              minWidth: '300'
            }
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        isLoading === false && <Box sx={{}} ref={container}></Box>
      )}
    </>
  )
}
