import React from 'react'
import {FcFullTrash} from 'react-icons/fc'
import {IoMdArchive} from 'react-icons/io'
import {MdNote} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
const Aside = () => {
  return (
    <>
      <aside>
        <nav>
          <ul>
            <li><NavLink activeClassName='active' to={'/'}><MdNote className='myicon'/> Note</NavLink></li>
            <li><NavLink activeClassName='active' to={'/archive'}><IoMdArchive className='myicon'/> Archive</NavLink></li>
            <li><NavLink activeClassName='active' to={'/delete'}><FcFullTrash className='myicon'/> Trash</NavLink></li>
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Aside