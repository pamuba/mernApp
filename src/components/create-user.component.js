import React, { Component } from 'react'

export default class CreateUsers extends Component {
    constructor(props) {
        super()

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    
        this.state = {
             username:'',
        }
    }

    onChangeUsername(e){
        this.setState({
            username:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const exercise = {
          username: this.state.username,
          description: this.state.description,
          duration: this.state.duration,
          date: this.state.date
        }
        console.log(exercise)

      //   window.location = '/'
    }

    render() {
        return (
            <div>
                <p>You are in Create Users Component</p>
            </div>
        )
    }
}


