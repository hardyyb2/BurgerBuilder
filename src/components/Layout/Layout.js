import React from 'react'
import Auxiliary from '../../hoc/Auxiliary'

const layout = props => {
  return (
    <Auxiliary>
      <div>ToolBar,Sidenav,BAckDrop </div>
      <main>{props.children}</main>
    </Auxiliary>
  )
}

export default layout
