import React from 'react'

export const Preloader = ({loading}) => {
    return (
        <div className="ui-preloader-wrapper">
            <div className="ui-preloader">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="ui-preloader-caption">
                Loading: {loading} 
            </div>
        </div>
    )
}