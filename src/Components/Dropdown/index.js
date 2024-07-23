import React, { useState } from 'react'
import ArrowIcon from '../../../Static/arrow-icon.svg'
import { DropdownStyleWrapper } from './style'

const Dropdown = () => {
  const [showDropdown,setShowDropdown] = useState(false);
  return (
    <DropdownStyleWrapper>
      <div onClick={() => setShowDropdown(!showDropdown)} className=' d-flex align-items-center'>
      <p className='dropdown-wrapper'>Features</p>
      <img src={ArrowIcon} loading='lazy' title="arrow-icon" alt="arrow-icon" />
      </div>
     {showDropdown ? <div className='dropdown-items'>
        <a onClick={() => setShowDropdown(false)} href="#">Home</a>
        <a onClick={() => setShowDropdown(false)} href="#">Home</a>
        <a onClick={() => setShowDropdown(false)} href="#">Home</a>
      </div> : null}
    </DropdownStyleWrapper>
  )
}

export default Dropdown
