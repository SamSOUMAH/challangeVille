import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(){
        super()
        this.state={
            PrixUn:500
        }
    }

    componentDidMount(){
        console.log("Je suis composant qui affiche le html")
    }
    componentDidUpdate(){
   console.log("je modifie le state")
    }

    render() {
        return (
            <div>
               {this.state.PrixUn}
                <br/>
                bonjour
                <button onClick={()=>this.setState({PrixUn:this.state.PrixUn +500})}> Vendre</button>
               
            </div>
        )
    }
    componentWillUnmount(){
        console.log("noop heep")
    }
}
