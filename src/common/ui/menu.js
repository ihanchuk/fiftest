import React from 'react'
import {MenuLink} from './link'

export const TopMenu  =() => {
    return(
    <nav>
          <ul>
            <MenuLink url= '/' title='Home' /> 
            <MenuLink url= '/player/123' title='Player 123' /> 
            <MenuLink url= '/teams' title='Teams' /> 
            <MenuLink url= '/team' title='Team' /> 
          </ul>
        </nav>
    )
}