import { Component } from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3-fetch'
class Polygon extends Component {
  static contextTypes = {
    scene: PropTypes.object
  }
 componentDidMount() {
  const { scene } = this.context;
  d3.json('https://gw.alipayobjects.com/os/basement_prod/d3564b06-670f-46ea-8edb-842f7010a7c6.json').then(data => {
      scene.HeatmapLayer({
          zIndex: 2
        }).source(data).size('mag', [0, 1.0]) // weight映射通道
        .style({
          intensity: 2,
          radius: 30,
          opacity: 1.0,
          rampColors: {
            colors: ['#2E8AE6', '#69D1AB', '#DAF291', '#FFD591', '#FF7A45', '#CF1D49'],
            positions: [0, 0.2, 0.4, 0.6, 0.8, 1.0]
          }
        }).render();
      });
 }
  render() {
    return null
  }
}
export default Polygon
