import APILoader from './util/APILoader'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import L7 from '@antv/l7'

const Children = React.Children
class Scene extends Component {
  state = {
    mapLoaded: false,
    scene: null
  }
 

  static childContextTypes = {
    scene: PropTypes.object
  }
  constructor(props) {
    super(props)
    new APILoader().load().then(() => {
      this.createInstance()
    })
  }

  getChildContext = () => ({
    scene: this.state.scene
  })

  createInstance() {
    this.scene = new L7.Scene({
      id: 'map',
      mapStyle: 'dark', // 样式URL
      center: [120.19382669582967, 30.258134],
      pitch: 0,
      zoom: 3,
      rotation: 0,
    })
    this.scene.on('loaded', () => {
      this.setState({
        mapLoaded: true,
        scene: this.scene
      })
    })
  }

  renderChildren() {
    return Children.map(this.props.children, child => {
      if (child) {
        return React.cloneElement(child, {
          scene: this.scene
        })
      }
      return child
    })
  }
  render() {
    return (
      <div>
        <div
          id='map'
          style={{
            width: '100%',
            margin: '0',
            height: '100%',
            position: 'absolute'
          }}
          ref={div => {
            this.mapWrapper = div
          }}
        >
          {this.state.mapLoaded ? null : this.props.loading || null}
        </div>
        <div>{this.state.mapLoaded ? this.renderChildren() : null}</div>
      </div>
    )
  }
}
export default Scene
