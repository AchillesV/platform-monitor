import React, { Component } from 'react';
import { Button } from 'amos-framework';
import A3DDesigner, { Connect } from 'amos-3d/lib/designer';
import { ObjAnchorHelper, InfoHelper } from 'base-r3d/lib/plugins';
import { LensJumpFactory } from 'base-r3d/lib/factory';
import { deepCopy } from 'amos-tool';
import { modelMapper } from './datas';


const { resizeConnect } = Connect;

const options = {
  light: [
    { type: 'AmbientLight', options: { color: 0xffffff, intensity: 0.15 } },
    { type: 'DirectionalLight', options: { color: 0xffffff, intensity: 0.15 } }
  ],
  floorBoard: {
    visible: true, // 地板显隐
    position: { y: -20 }, // 地板坐标
    showType: 'grid', // 显示类型 分为 grid、both 和 mesh 三种类型
    size: 600, // 底板的大小，用于 HelperGrid 和 PlaneBufferGeometry 中宽度
    divisions: 20, // 格子数
    colorCenterLine: '#ffffff',
    colorGrid: '#ffffff',
    //  Grid 配置信息 仅是 Material 属性配置
    gridOptions: {
      opacity: 0.2,
      transparent: true
    },

    widthSegments: 1,
    heightSegments: 1,
    boardColor: '#070709',
    // 地板 mesh 配置， 仅是 Material 属性配置
    boardOptions: {

    }
  }
};
const createMarkerLabel = (text) => {
  const div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.marginTop = '-2rem';
  div.className = 'three-ui-anchor';
  div.innerText = text;
  return div;
};
const markers3D = [
  { key: '4', position: [30, 33, 0], size: 10, keepSize: true, label: '大小不变' }
];
const graphParams = {
  sceneOptions: {
    background: 'black'
  },
  cameraOptions: {
    fov: 45,
    near: 1,
    far: 5000,
    position: { z: 250 },
    // 是否启用拾取器
    enablePicker: true,
    builtInOrbit: {
      maxPolarAngle: Math.PI * 0.5,
      minDistance: 1,
      maxDistance: 5000
    }
  }
};

const genModelItem = (modeyKey, hasMtl, displayName, index, position) => {
  const objParam = {
    objPath: `/threeres/models/shm/${modeyKey}.obj`
  };
  if (hasMtl){
    objParam.mtlPath = `/threeres/models/shm/ground.mtl`;
  }
  const basicAttr = {
    name: '',
    displayName,
    visible: true,
    position,
    rotation: null,
    scale: null
  };
  return {
    modeyKey,
    id: `${modeyKey}-${index}`,
    objParam,
    basicAttr,
    type: 'model'
  };
};


@resizeConnect
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objs: {}
    };
    this.modelPool = modelMapper.manor.map((item, index) => {
      const id = index + 1;
      return genModelItem(item.objName.split('.')[0], true, item.objName, id, item.position )
    });
    this.animations = [
      { animateKey: '轴承-1', id: 1, name: '初始动画', target: '轴承-1', startTimeout: 1, endTimeout: 1.5, duration: 0.5, animateParams: {
        animationType: 'moveTo',
        position: [50, 0, 600],
        orientToPath: true,
        duration: 6000,
        delayTime: 1000,
        routeLineParams: { showTrack: false }
      } }
    ];
    console.log(this.modelPool);
  }
  componentDidMount() {
    this.r3d.on('dbclick', evt => {
      if (evt.button !== 0) {
        return;
      }
      const object = evt.object;
      if (object){
        this.cameraFactory.flyTo({
          position: object.position.toArray(),
          duration: 6000
        });
      }
    });
    this.initObj();
  }

  onGraphCreated = ({ cameraFactory, sceneFactory, outlineFactory, r3d }) => {
    this.cameraFactory = cameraFactory;
    this.sceneFactory = sceneFactory;
    this.outlineFactory = outlineFactory;
    this.r3d = r3d;

    // 重新设置 outline 风格
    this.outlineFactory.outlineConfig = {
      visibleEdgeColor: '#f8a303',
      hiddenEdgeColor: '#ffe2ad'
    };

    // 设置 UI
    this.objAnchorHelper = new ObjAnchorHelper({
      r3d,
      cameraFactory,
      sceneFactory
    });

    // 设置 Infowindow
    this.infoHelper = new InfoHelper({
      r3d,
      cameraFactory,
      sceneFactory,
      element: this.createInfowindow('提示')
    });

    // 设置 摄像机跳跃
    this.lensJumpFactory = new LensJumpFactory({
      r3d,
      cameraFactory,
      sceneFactory,
      cameraEffect: {
        position: [0, 10, 0],
        target: [1, 2.5, 3]
      }
    });
  }

  onAllDone = (objGroup) => {
    this.sceneFactory.level.change(objGroup);
  }

  onComplete = (obj) => {
    const me = this;
    obj.on('click', (evt) => {
      console.log('obj click:', evt);
      // R3DTools.getBoxCenterSize(evt.object);
      // this.focusPosition(evt.pickedPosition);
      me.outlineFactory.toggleOutline(evt.object);
      me.focusObject(evt.object);

      // 设置 infowindow
      me.infoHelper.setParent(evt.object);
    });
    if (obj.name && obj.name.includes('ji2gaoduanfatingshi')){
      me.objAnchorHelper.create({
        parent: obj,
        element: me.createPanel(obj.name),
        position: [-20, 10, -5]
      });
    }
    if (obj.name && obj.name.includes('ji2gaoduanfatingshi')){
      me.objAnchorHelper.create({
        parent: obj,
        element: me.createPanel(obj.name),
        position: [10, 10, -20]
      });
    }
    if (obj.name && obj.name.includes('ji1diduanfatingshi')){
      me.objAnchorHelper.create({
        parent: obj,
        element: me.createPanel(obj.name),
        position: [10, 10, -20]
      });
    }
    if (obj.name && obj.name.includes('ji1gaoduanfatingshi')){
      me.objAnchorHelper.create({
        parent: obj,
        element: me.createPanel(obj.name),
        position: [-20, 10, -20]
      });
    }
    if (obj.name && obj.name.includes('500kvjiaoliuchang')){
      me.objAnchorHelper.create({
        parent: obj,
        element: me.createPanel(obj.name),
        position: [0, 10, 0]
      });
    }

    // 处理跳跃
    this.lensJumpFactory.process(obj);
  }

  initObj = () => {
    this.setState({ objs: modelMapper.manor }, () => {
      //this.resetObj();
    });
  }

  start = (animateKey) => {
    console.log(animateKey);
    this.a3dRef.playAll();
  }

  resetObj = () => {
    const { objs } = this.state;
    console.log( objs );
    let newObj = [];
    setTimeout(() => {
      newObj = deepCopy(objs).map((item) => {
/*         if (item.objName === 'complete_bearing.obj') {
          timer1 = timer1 - 5;
          item.position = [timer1,0,0];
          if (timer1 === 0) {
            clearInterval(timer);
          }
        } else {
          item.position = [0,0,0];
        } */

        item.position = [0,0,0];
        return item;
      });
      console.log( newObj );
      this.setState({ objs: newObj });
    },100);

  }

  focusPosition = (position) => {
    if (position){
      this.cameraFactory.flyTo({
        position,
        duration: 1000
      });
    }
  }

  focusObject = (object) => {
    const me = this;
    if (object){
      this.cameraFactory.flyTo({
        target: object,
        duration: 1000,
        // 飞行到具体的 obj 之后，执行进入层级操作
        onComplete(){
          console.log('fly done!', object);
          // 进入子层级
          if (object.foreignKey){
            me.lensJumpFactory.jumpInByForeignKey(object.foreignKey);
          }
        }
      });
    }
  }

  createPanel = (text) => {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.className = 'three-ui-anchor';
    //div.innerText =12;
    return div;
  }

  createInfowindow = (text) => {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.className = 'three-ui-infowindow';
    div.img =
    div.innerText = text;
    return div;
  }

  afterRender = () => {
    this.objAnchorHelper && this.objAnchorHelper.update();
    this.infoHelper && this.infoHelper.update();
  }

  render() {
    console.log(this.state.objs);
    const { dimension } = this.props;
    const graphicProps = {
      ...dimension,
      ...graphParams,
      enableAnimator: true,
      enableOutline: true,
      onCreated: this.onGraphCreated,
      afterRender: this.afterRender
    };
    const modelContentProps = {
      onAllDone: this.onAllDone,
      onComplete: this.onComplete
    };
    return (
      <div className='app'>
        <div className='A3DDesigner'>
          <A3DDesigner
            {...graphicProps}
            enableModelParser
            disabledEdit
            showHelper={false}
            defaultLoading={false}
            ref={node => this.a3dRef = node}
            options={options}
            baseObjs={this.state.objs}
            modelContentProps={modelContentProps}
          />
        </div>

      </div>
    );
  }
}

export default App
