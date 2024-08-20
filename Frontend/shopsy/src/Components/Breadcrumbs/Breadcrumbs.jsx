import React from 'react'
import './Breadcrumbs.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
function Breadcrumbs({product}){
  return (
    <div className='breadcrumb'>
        HOME <KeyboardDoubleArrowRightIcon/> {product.category}  <KeyboardDoubleArrowRightIcon/> {product.title}
    </div>
  )
}

export default Breadcrumbs;
