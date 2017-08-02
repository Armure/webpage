import * as THREE from 'three'
import 'imports-loader?THREE=three!exports-loader?THREE.OrbitControls!../../node_modules/three/examples/js/controls/OrbitControls'

const createBackground = () => {
  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0xcccccc, 0.1)

  const renderer = new THREE.WebGLRenderer({antialias: true})
  renderer.setClearColor(scene.fog.color)
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.set(0, 0, 16)

  const controls = new THREE.OrbitControls(camera, renderer.domElement)
  controls.enablePan = false
  controls.enableZoom = false
  controls.rotateSpeed = 0.03
  controls.autoRotate = true
  controls.autoRotateSpeed = -0.03
  controls.enableDamping = true
  controls.dampingFactor = 0.06

  const backgroundGeo = new THREE.CylinderBufferGeometry(0, 0.3, 0.3, 4, 1)
  const backgroundMat = new THREE.MeshPhongMaterial({color: 0xffffff, shading: THREE.FlatShading})
  const backgroundMesh = new THREE.Mesh(backgroundGeo, backgroundMat)
  backgroundMesh.scale.set(50, 50, 50)
  scene.add(backgroundMesh)

  const light = new THREE.DirectionalLight()
  light.position.set(1, 1, 1)
  scene.add(light)

  const render = () => {
    requestAnimationFrame(render)
    renderer.render(scene, camera)
    controls.update()
  }
  render()
}

export default createBackground
