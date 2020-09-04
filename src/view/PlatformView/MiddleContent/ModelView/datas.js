import * as THREE from 'three';
import { modelClassifyMapper, TextureFactory } from 'amos-3d';
import { A3DUtil, helper } from 'amos-3d/lib/threeTools';
import { backgroundHelpers, materialHelpers } from 'amos-3d/lib/helpers';

const A3DMath = A3DUtil.Math;
const { getInnerSkybox } = backgroundHelpers;
const { MeshMaterialTypes, createMeshMaterial } = materialHelpers;

const getManor = (names) => {
  return names.map(n => {
    const objParam = {
      basePath: '/threeres/models/shm/',
      objName: n.objName,
      mtlName: n.mtlName,
      modelLevel: n.modelLevel,
      position: n.position
    };
    if (n.foreignKey){
      objParam.foreignKey = n.foreignKey;
    }
    if (n.primaryKey){
      objParam.primaryKey = n.primaryKey;
    }
    return objParam;
  });
};

/**
 * 系统 obj 模型
 */
export const modelMapper = {
  manor: getManor([
    { 'objName': '66.obj', 'mtlName': '66.mtl', 'position': [160, 0, 0] }
/*     { 'objName': '封盖.obj', 'mtlName': 'ground.mtl', 'modelLevel': 'Park', 'position': [-160, 0, 0] },
    { 'objName': '外壳.obj', 'mtlName': 'ground.mtl', 'modelLevel': 'Park', 'position': [0, 0, 0] },
    { 'objName': '测速齿轮.obj', 'mtlName': 'ground.mtl', 'modelLevel': 'Park', 'position': [80, 0, 0] },
    { 'objName': 'PCB.obj', 'mtlName': 'ground.mtl', 'modelLevel': 'Park', 'position': [-80, 0, 0] } */
  ])
};

