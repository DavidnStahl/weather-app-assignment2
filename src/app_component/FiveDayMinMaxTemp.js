import React,{useState} from 'react'

export default function FiveDayMinMaxTemp(props) {

    const [max] = useState(() => {
        let max = props.tempMinMax.sort((a,b) => (b-a))[0]
        return max
    })
    const [min] = useState(() => {
        let min = props.tempMinMax.sort((a,b) => (a-b))[0]
        return min
    })
    
    
    return (
        <div>
            <h5>
               <span className="px-2">Min {min}&deg;</span>
               <span className="px-2">Max {max}&deg;</span>
           </h5>
        </div>
    )
}