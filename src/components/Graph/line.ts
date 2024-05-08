import * as THREE from 'three';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';
import { Line2 } from 'three/addons/lines/Line2.js';

import { COLOR } from './constants';

type Coordinate = Array<number>;

class LineWithSphere {
  linewidth = 0.01;
  sphereCount = 3;
  lineColor = COLOR.gray1;
  sphereColor = COLOR.gray2;

  a: Coordinate;
  b: Coordinate;
  spheres: Array<THREE.Mesh>;

  constructor(a: Coordinate, b: Coordinate) {
    this.a = a;
    this.b = b;

    this.spheres = [];
  }

  private drawLine(): Line2 {
    const material = new LineMaterial({
      color: this.lineColor,
      linewidth: this.linewidth,
    });
    const points = [...this.a, ...this.b];
    const geometry = new LineGeometry();
    geometry.setPositions(points);
    const line = new Line2(geometry, material);
    line.computeLineDistances();
    return line;
  }

  private drawSphere(): THREE.Mesh {
    const sphereGeometry = new THREE.SphereGeometry(this.linewidth * 8, 16, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: this.sphereColor,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    return sphere;
  }

  draw(scene: THREE.Scene | THREE.Group) {
    const line = this.drawLine();
    scene.add(line);

    for (let i = 0; i < this.sphereCount; i++) {
      const sphere = this.drawSphere();
      this.spheres.push(sphere);
      scene.add(sphere);
    }
  }
}

class LineWithSphereAnimation {
  speed = 0.002;

  line: LineWithSphere;
  t: number;

  constructor(line: LineWithSphere) {
    this.line = line;
    this.t = 0;
  }

  animate(): void {
    this.t += this.speed;
    if (this.t > 1) {
      this.t = 0;
    }

    const len = this.line.spheres.length;

    this.line.spheres.forEach((sphere, index) => {
      const offset = 1 / len;
      let t = this.t + offset * index;

      if (t > 1) {
        t = t % 1;
      }

      const pointA = new THREE.Vector3(...this.line.a);
      const pointB = new THREE.Vector3(...this.line.b);
      const pointOnLine = pointA.clone().lerp(pointB, t);

      sphere.position.copy(pointOnLine);
    });
  }
}

export { LineWithSphere, LineWithSphereAnimation };
