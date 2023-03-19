import './index.css'
const SuggestionItem=(props)=>{
    const {id,suggestion}=props
    return(
        <li id={id} className="list-items">
                      <p>{suggestion}</p>
                      <div className="make-center">
                         <img className="arrow-icon" src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" alt="arrow" />
       
                      </div>
                   </li>
    )
}
export default SuggestionItem