import React, {useState} from 'react'

export default function Demo(props) {
  return (
    <div className="text-center">
        <button className="m-2" onClick={props.action}>sick button</button>
    </div>
  )
}
