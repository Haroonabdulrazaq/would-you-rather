import React, { Component } from 'react';
import './newQuestion.scss';

class NewQuestion extends Component {
  state = {
    textA: '',
    textB: '',
  }
  handleSubmit =(e)=>{
    e.preventDefault();
    console.log(e);
  }
  handleChange=(e)=>{
    const {name, value} = e.target;
    this.setState(()=>({
      [name]: value
    }))
  }
  render() {
    const {textA, textB} = this.state
    return (
      <div className='new-wrapper'> 
        <div className='cover'>
          <h3>Would you Rather?</h3>
        </div>
        <div className='form-wrapper'>
          <h3>Add Question</h3>
          <div className='form'>
            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  type='text'
                  placeholder='OptionA'
                  className='input'
                  value={textA}
                  name='textA'
                  onChange={(e)=> this.handleChange(e)}/>
              </div>
              <div>
                <input
                  type='text'
                  placeholder='OptionB'
                  className='input'
                  value={textB}
                  name='textB'
                  onChange={(e)=> this.handleChange(e)}/>
              </div>
              <div>
                <button className='submit'>Submit</button>
              </div>
            </form> 
          </div>
        </div>
      </div>
    )
  }
}

export default NewQuestion;
