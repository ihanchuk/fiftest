import React from 'react'
import {MenuLink} from './link'

export const TopMenu  =() => {
    return(
    <nav>
          <ul>
            <MenuLink url= '/' title='Home' /> 
            <MenuLink url= '/teams' title='Teams' /> 
            <MenuLink url= '/games/add' title='Add new Game' /> 
          </ul>
        </nav>
    )
}