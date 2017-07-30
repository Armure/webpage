import * as THREE from 'three'

export default class Canvas {
  constructor (container) {
    this.renderer = new THREE.WebGLRenderer({antialias: true})
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0xffffff)
    this.scene.fog = new THREE.FogExp2(0xcccccc, 0.1)
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
    this.camera.position.z = 0

    let geo = new THREE.CylinderGeometry(0, 0.15, 0.3, 4, 1)
    let mat = new THREE.MeshPhysicalMaterial({color: 0xffffff, shading: THREE.FlatShading})
    let mesh = new THREE.Mesh(geo, mat)
    mesh.position.y = 0
    mesh.scale.set(100, 100, 100)
    mesh.position.z = -10
    this.scene.add(mesh)

    let light = new THREE.DirectionalLight(0xffffff)
    light.position.set(1, 1, 1)
    this.scene.add(light)

    this.renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(this.renderer.domElement)

    this.render()
  }

  render () {
    requestAnimationFrame(() => this.render())
    this.renderer.render(this.scene, this.camera)
  }
}
