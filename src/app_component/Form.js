import React,{useState, useEffect} from 'react'
import './form.style.css'


function Form(props) {
    const [InputValue, setInputValue] = useState("");
    const [SavedCountries, setSavedCountries] = useState([""]);
    
    useEffect(() => {
        console.log("loadar")
        onInputClick();
    })
    

    function onInputClick(){
        if(localStorage.getItem("city") != null){
            setSavedCountries(JSON.parse(localStorage.getItem("city")))
        }
    }
    function setInputValueFunction(element){
        
        setInputValue(element.target.value)    
    }
    function saveCity(){
    let listOfCity = localStorage.getItem("city")
    if(listOfCity === null) {
        listOfCity = [`${props.savecity}`]
        localStorage.setItem("city",`${JSON.stringify(listOfCity)}`)
    }
    else{
        listOfCity = JSON.parse(localStorage.getItem("city"))
        listOfCity.push(props.savecity)
        let uniqueArray = listOfCity.filter(function(item, pos, self) {
            return self.indexOf(item) === pos;
        });

        localStorage.setItem("city",`${JSON.stringify(uniqueArray)}`)
    }
    setSavedCountries(JSON.parse(localStorage.getItem("city")))
    }
    return (
        <div className="container">
            <form onSubmit={props.loadweather}>
            <div className="row m-5">
                <div className="col-md-3 offset-md-4">
                    <input list="cityname" placeholder="City" value={InputValue} onChange={setInputValueFunction} type="text" className="form-control" name="city" autoComplete="off" />
                    <datalist id="cityname"> 
                       {SavedCountries.map( city => {
                return <option onClick={setInputValueFunction} value={city} >{city}</option>
                       
                 } )        
        }} 
                     </datalist> 
                </div>
                <div className="col-md-4 mt-md-0 text-md-left">      
                    <button className="btn btn-warning">Get Weather</button>
                </div>               
            </div>
            <h4 className="col-md-2 offset-md-5 text-danger">{props.placeholderinput}</h4>
            </form>
            
            <button className="btn btn-warning text-black" onClick={saveCity}>Save City</button>
            
        </div>
    )
}
export default Form
