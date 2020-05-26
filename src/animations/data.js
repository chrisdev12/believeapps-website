import appImg from "../images/rotate.svg";
import qualityImg from "../images/settings.svg";
import webImg from "../images/responsive-design.svg";
import dataImg from "../images/layer.svg";

export default [
  {
    title: 'Apps móviles',
    description: '#a8edea → #fed6e3',
    css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    img: appImg
  },
  {
    name: 'Calidad de software',
    description: '#f5f7fa → #c3cfe2',
    css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    img: qualityImg
  },
  {
    name: 'Análisis de datos',
    description: '#e0c3fc → #8ec5fc',
    css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    img: dataImg
  },
  {
    name: 'Desarrollo web',
    description: '#f093fb → #f5576c',
    css: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    img: webImg
  }
]