import { Component } from "react";
 import './index.css'
 import SuggestionItem from "../SuggestionItem";
class GoogleSuggestions extends Component{
    
    state={inputvalue:""}
    inputChange=(event)=>{
       
        this.setState({inputvalue:event.target.value})
    }
    render(){
        const {suggestionsList} = this.props
        const {inputvalue} = this.state
        const updatedsuggestionsList = suggestionsList.filter(eachItem=>eachItem.suggestion.includes(inputvalue))
        console.log(inputvalue)
        
        return(
            <div className="container">
                <div className="inner-container">
                    <img className="logo" src="https://assets.ccbp.in/frontend/react-js/google-logo.png" alt="google logo" />
                     <br />
                     
                <div className="bottom-part">
                <div className="middle">
                    <img className="search-icon" src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png" alt="" />
                    <input value={inputvalue} onChange={this.inputChange} type="search" className="searchInput" name="" id="" placeholder="Search Google" />
                </div>
                <ul>
                {updatedsuggestionsList.map((eachItem)=><SuggestionItem suggestion={eachItem.suggestion} id={eachItem.id} key={eachItem.id}/>)}

                </ul>
                  
                   
                   
                </div>
                
             </div>
        </div>
        )
    }
}
export default GoogleSuggestions