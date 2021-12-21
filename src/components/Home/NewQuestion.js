import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleAddQuestion } from '../../actions/questions';
import './newQuestion.scss';

class NewQuestion extends Component {
  state = {
    textA: '',
    textB: '',
  }

  handleSubmit =(e)=>{
    e.preventDefault();
    const optionA=  this.state.textA;
    const optionB= this.state.textB;
    console.log('OptionA', optionA);
    console.log('OptionB', optionB);
    this.props.dispatch(handleAddQuestion(optionA, optionB));

    this.setState(()=>({
      textA: '',
      textB: ''
    }))
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

function mapStateToProps({authedUser}){
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(NewQuestion);
