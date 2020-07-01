import React, {Component} from 'react'



function LinkButton(props) {
  return <a className={props.className} >{props.link}
  <svg xmlns="http://www.w3.org/2000/svg"
width="10.823" height="5.32" style={{marginLeft: 15 + 'px'}}
viewBox="0 0 10.823 5.32">
  <path id="Icon_awesome-long-arrow-alt-right"
  data-name="Icon awesome-long-arrow-alt-right"
  d="M7.584,11.952H.29a.29.29,0,0,0-.29.29v1.353a.29.29,0,0,0,.29.29H7.584V15a.58.58,0,0,0,.99.41l2.079-2.079a.58.58,0,0,0,0-.82L8.574,10.429a.58.58,0,0,0-.99.41Z"
  transform="translate(0 -10.258)"/>
</svg></a>;
}


export default LinkButton