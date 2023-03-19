import './index.css'
const SuggestionItem=(props)=>{
    const {id,suggestion,onarrow}=props
    const addText=()=>{
        onarrow(id)
    }
    return(
        <li id={id} className="list-items">
                      <p>{suggestion}</p>
                      <div className="make-center">
                         <img className="arrow-icon" onClick={addText} src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" alt="arrow" />
       
                      </div>
                   </li>
    )
}
export default SuggestionItem