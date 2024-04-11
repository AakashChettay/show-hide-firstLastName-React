import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {firstNameHided: true, lastNameHided: true}
  toggleFirstName = () =>{
    this.setState((prevState)=>{
      return {firstNameHided: !prevState.firstNameHided, lastNameHided: prevState.lastNameHided}
    })
  }
  toggleLastName = () =>{
    this.setState((prevState)=>{
      return {firstNameHided: prevState.firstNameHided, lastNameHided: !prevState.lastNameHided}
    })
  }
  render() {
    const {firstNameHided, lastNameHided} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="namePhraseContainer">
          <div className="nameHideContainer">
            <div>
              <button onClick={this.toggleFirstName} className="btnStyle">Show/Hide Firstname</button>
            </div>
            {firstNameHided ? null : (
              <div className="hideShowContainer">
                <p className="name">Joe</p>
              </div>
            )}
          </div>
          <div className="nameHideContainer">
            <div>
              <button onClick={this.toggleLastName} className="btnStyle">Show/Hide Lastname</button>
            </div>
            {lastNameHided ? null : (
              <div className="hideShowContainer">
                <p className="name">Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
