import React, {Component} from 'react'
import SVGIcon from '../components/SVGIcon.js'



function LinkButton(props) {
  return <a className="btn">{props.link}
  <SVGIcon
  name="arrow"
  width={10.823}
  style={{marginLeft: 15 + 'px'}}
  height={5.32}/></a>;
}
export default LinkButton