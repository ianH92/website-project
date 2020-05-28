const THREE = require('three')
const { initRenderer, createCube, spin } = require('./utils')

function mainLoop(renderer, scene, camera, func) {
    renderer.render(scene, camera)
    func()
    requestAnimationFrame(() => mainLoop(renderer, scene, camera, func))
}

let scene = new THREE.Scene()
scene.background = new THREE.Color(0xFFFFFF)

let camera = new THREE.PerspectiveCamera(45, (window.innerWidth / window.innerHeight),1 ,1000)
camera.position.setZ(25)

let cube = createCube(10, 10, 10, 0x00FF00)
scene.add(cube)

let renderer = initRenderer()

mainLoop(renderer, scene, camera, () => spin(cube))
