import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { createCube, initRenderer, spin } from './scripts/utils'

function mainLoop(renderer, scene, camera, func) {
    renderer.render(scene, camera)
    func()
    requestAnimationFrame(() => mainLoop(renderer, scene, camera, func))
}

let scene = new THREE.Scene()
scene.background = new THREE.Color(0xFFFFFF)

let light = new THREE.DirectionalLight(0x404040, 5)
scene.add(light)
light = new THREE.AmbientLight(0xF099E0, 0.2)
scene.add(light)

let camera = new THREE.PerspectiveCamera(45, (window.innerWidth / window.innerHeight), 0.1 ,100)
camera.position.setZ(0.5)

let donut = null;

let loader = new GLTFLoader()

loader.load('http://localhost:3000/static/donut.glb', 
  (gltf) => { 
    donut = gltf.scene
    scene.add(donut)
  },
  undefined, 
  (error) => console.error(error)
)

let renderer = initRenderer()
renderer.outputEncoding = THREE.sRGBEncoding;

mainLoop(renderer, scene, camera, () => {
  if(donut) {
    spin(donut, 0.01)
  }
})
