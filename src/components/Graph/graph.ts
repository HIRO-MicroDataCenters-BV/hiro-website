import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

import {
  AgricultureCube,
  CityCube,
  HealthCareCube,
  ManufactoryCube,
} from './cube';
import { LineWithSphere, LineWithSphereAnimation } from './line';
import loadFont from './font';
import { COLOR } from './constants';

const NodeName = {
  Agriculture: 'Agriculture',
  City: 'City',
  HealthCare: 'HealthCare',
  Manufactory: 'Manufactory',
};

const GRAPH_ROTATION = {
  [NodeName.City]: [-10, 5, 0],
  [NodeName.Manufactory]: [-15, -15, 0],
  [NodeName.HealthCare]: [-15, 15, 0],
  [NodeName.Agriculture]: [5, 0, 0],
};

export type NodeNameValue = (typeof NodeName)[keyof typeof NodeName];

class Graph {
  clock: THREE.Clock;
  group: THREE.Group;
  lineAnimations: Array<LineWithSphereAnimation>;
  cubes: Array<THREE.Mesh>;

  constructor() {
    this.clock = new THREE.Clock();
    this.group = new THREE.Group();
    this.lineAnimations = [];
    this.cubes = [];
  }

  private createNodes() {
    const cityCube = new CityCube().create();
    cityCube.rotation.y = THREE.MathUtils.degToRad(45);
    cityCube.position.x = 0;
    cityCube.position.y = -0.8;
    cityCube.position.z = 0.8;
    this.group.add(cityCube);
    this.cubes.push(cityCube);

    const manufactoryCube = new ManufactoryCube().create();
    manufactoryCube.rotation.y = THREE.MathUtils.degToRad(45);
    manufactoryCube.position.x = 2.8;
    manufactoryCube.position.y = -1.1;
    manufactoryCube.position.z = 2.8;
    this.group.add(manufactoryCube);
    this.cubes.push(manufactoryCube);

    const healthCareCube = new HealthCareCube().create();
    healthCareCube.rotation.y = THREE.MathUtils.degToRad(45);
    healthCareCube.position.x = -2.8;
    healthCareCube.position.y = -1.1;
    healthCareCube.position.z = 2.8;
    this.group.add(healthCareCube);
    this.cubes.push(healthCareCube);

    const agricultureCube = new AgricultureCube().create();
    agricultureCube.rotation.y = THREE.MathUtils.degToRad(45);
    agricultureCube.position.x = 0;
    agricultureCube.position.y = 3;
    agricultureCube.position.z = 0;
    this.group.add(agricultureCube);
    this.cubes.push(agricultureCube);
  }

  private createLines() {
    const lineVertices = {
      A: [0, -1, 0],
      B: [2.5, -1, 2.5],
      C: [-2.5, -1, 2.5],
      D: [0, 3, 0],
    };

    const line1 = new LineWithSphere(lineVertices.A, lineVertices.B);
    line1.draw(this.group);
    this.lineAnimations.push(new LineWithSphereAnimation(line1));

    const line2 = new LineWithSphere(lineVertices.A, lineVertices.C);
    line2.draw(this.group);
    this.lineAnimations.push(new LineWithSphereAnimation(line2));

    const line3 = new LineWithSphere(lineVertices.A, lineVertices.D);
    line3.draw(this.group);
    this.lineAnimations.push(new LineWithSphereAnimation(line3));

    const line4 = new LineWithSphere(lineVertices.B, lineVertices.C);
    line4.draw(this.group);
    this.lineAnimations.push(new LineWithSphereAnimation(line4));

    const line5 = new LineWithSphere(lineVertices.D, lineVertices.B);
    line5.draw(this.group);
    this.lineAnimations.push(new LineWithSphereAnimation(line5));

    const line6 = new LineWithSphere(lineVertices.C, lineVertices.D);
    line6.draw(this.group);
    this.lineAnimations.push(new LineWithSphereAnimation(line6));
  }

  create(): void {
    loadFont('Roboto-Bold', '/fonts/Roboto/Roboto-Bold.ttf', "700").then(() => {
      this.createLines();
      this.createNodes();
    });
  }

  animate(): void {
    this.lineAnimations.map((lineAnimation) => {
      lineAnimation.animate();
    });

    const time = this.clock.getElapsedTime();
    this.group.position.y += Math.sin(1000 + time) / 3000
    this.group.rotation.x += (Math.sin(time) * Math.PI) / 30000
    this.group.rotation.y += (Math.sin(time) * Math.PI) / 30000
    this.group.rotation.z += (Math.sin(time) * Math.PI) / 30000

    TWEEN.update();
  }

  getGraph(): THREE.Group {
    return this.group;
  }

  getCubes(): Array<THREE.Mesh> {
    return this.cubes;
  }

  getCubeByName(name: NodeNameValue): THREE.Mesh {
    const cubes = this.getCubes();
    for (let i = 0; i < cubes.length; i++) {
      if (cubes[i].name === name) {
        return cubes[i];
      }
    }
    throw new Error(`Cube ${name} does not found`);
  }

  setActive(cube: THREE.Mesh): void {
    const material = cube.material as THREE.MeshBasicMaterial;
    if (material && material.color) {
      material.color.set(COLOR.green);
    }

    const rotation = GRAPH_ROTATION[cube.name];
    new TWEEN.Tween(this.group.rotation)
      .to(
        {
          x: THREE.MathUtils.degToRad(rotation[0]),
          y: THREE.MathUtils.degToRad(rotation[1]),
          z: THREE.MathUtils.degToRad(rotation[2]),
        },
        1000,
      )
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();
  }

  setInactive(cube: THREE.Mesh): void {
    const material = cube.material as THREE.MeshBasicMaterial;
    if (material && material.color) {
      material.color.set(COLOR.gray3);
    }
  }
}

export { NodeName };
export default Graph;
