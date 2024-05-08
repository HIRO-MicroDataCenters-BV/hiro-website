import * as THREE from 'three';

import { COLOR } from './constants';

function createTextureWithText(
  text: string,
  x: number,
  y: number,
): THREE.Texture {
  const lineHeight = 60;
  const fontSize = 100;
  const scaleFactor = lineHeight / fontSize;

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (context === null) throw new Error("Texture's canvas does not found");

  context.scale(1, scaleFactor);

  context.font = `bold ${fontSize}px Roboto-Bold`;
  context.fillStyle = COLOR.white;
  context.fillText(text, x, y);

  const texture = new THREE.Texture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.needsUpdate = true;

  return texture;
}

function createMaterialWithText(
  text: string,
  x: number,
  y: number,
): THREE.MeshStandardMaterial {
  const texture = createTextureWithText(text, x, y);
  const textMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    emissive: COLOR.white,
    transparent: true,
  });
  return textMaterial;
}

interface ICube {
  create(): THREE.Mesh;
}

class CubeBase {
  protected createCube(
    textMaterial1: THREE.MeshStandardMaterial,
    textMaterial2: THREE.MeshStandardMaterial,
  ): THREE.Mesh {
    const baseMaterial = new THREE.MeshStandardMaterial({ color: COLOR.gray3 });
    const materialArray = [
      textMaterial1,
      textMaterial1,
      baseMaterial,
      baseMaterial,
      textMaterial2,
      textMaterial2,
    ];

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMesh = new THREE.Mesh(geometry, baseMaterial);
    const overlayMesh = new THREE.Mesh(geometry, materialArray);

    cubeMesh.add(overlayMesh);

    cubeMesh.renderOrder = 1;
    overlayMesh.renderOrder = 2;

    return cubeMesh;
  }
}

class AgricultureCube extends CubeBase implements ICube {
  create() {
    const textMaterial1 = createMaterialWithText('Agric', 60, 150);
    const textMaterial2 = createMaterialWithText('ulture', 0, 150);
    const cube = this.createCube(textMaterial1, textMaterial2);
    cube.name = 'Agriculture';
    return cube;
  }
}

class CityCube extends CubeBase implements ICube {
  create() {
    const textMaterial = createMaterialWithText('City', 60, 150);
    const cube = this.createCube(textMaterial, textMaterial);
    cube.name = 'City';
    return cube;
  }
}

class HealthCareCube extends CubeBase implements ICube {
  create() {
    const textMaterial1 = createMaterialWithText('Health', 5, 150);
    const textMaterial2 = createMaterialWithText('care', 5, 150);
    const cube = this.createCube(textMaterial1, textMaterial2);
    cube.name = 'HealthCare';
    return cube;
  }
}

class ManufactoryCube extends CubeBase implements ICube {
  create() {
    const textMaterial1 = createMaterialWithText('Manuf', 5, 150);
    const textMaterial2 = createMaterialWithText('actory', 0, 150);
    const cube = this.createCube(textMaterial1, textMaterial2);
    cube.name = 'Manufactory';
    return cube;
  }
}

export { AgricultureCube, CityCube, HealthCareCube, ManufactoryCube };
