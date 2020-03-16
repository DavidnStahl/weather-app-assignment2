import React from 'react'

export default function MinmaxTemp(props) {
    return (
        <div>
            <h5>
               <span className="px-2">Min {props.min}&deg;</span>
               <span className="px-2">Max {props.max}&deg;</span>
           </h5>
        </div>
    )
}

