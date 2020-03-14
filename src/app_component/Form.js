import React from 'react'
import './form.style.css'

function Form(props) {
    return (
        <div className="container">
            <form onSubmit={props.loadweather}>
            <div className="row m-5">
            
                <div className="col-md-2 offset-md-4">
                    <input placeholder="City" type="text" className="form-control" name="city" autoComplete="off" />
                </div>
                <div className="col-md-2 mt-md-0 text-md-left">
                    <button className="btn btn-warning">Get Weather</button>
                </div>
            </div>
            <h4 className="col-md-2 offset-md-5 text-danger">{props.placeholderinput}</h4>
            </form>
        </div>
    )
}

export default Form
