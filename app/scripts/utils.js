const THREE = require('three');

/**
 * Initialze a WebGL Renderer. Appends the renderer domElement to the HTML document body.
 * @param {number} [width] - The width of the renderer. Default value of window.innerWidth.
 * @param {number} [height] - The height of the renderer. Default value of window.innerHeight.
 * @returns {THREE.WebGLRenderer} A WebGLRenderer with the given width and height.
 */
exports.initRenderer = (width = window.innerWidth, height = window.innerHeight) => {
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);
  return renderer;
}

/**
 * Create a simple cube made with MeshBasicMaterial.
 * @param {number} x - The width of the cube on the x axis.
 * @param {number} y - The width of the cube on the y axis.
 * @param {number} z - The width of the cube on the z axis.
 * @param {number} cubeColor - The color of the cube.
 */
exports.createCube = function(x, y, z, cubeColor) {
  let geometry = new THREE.BoxGeometry(x, y, z);
  let material = new THREE.MeshBasicMaterial( {color: cubeColor} );
  let cube = new THREE.Mesh(geometry, material);
  return cube;
}

/**
 * Spin a Three.js Object3D object.
 * @param {THREE.Object3D} object - A Three.js Object3D object to spin.
 * @param {number} rate - The rate at which to spin the object. Defaults to 0.05.
 */
exports.spin = function(object, rate = 0.05) {
  object.rotation.x += rate;
  object.rotation.y += rate;
}
