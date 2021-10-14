import React, { Component } from 'react'

export default class ClassComp extends Component {
constructor(){
    super()
    this.state={compteur:500}
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
            {this.state.compteur}<br/>
              JE SUIS LE VENDEUR
              <button onClick={()=>this.setState({compteur:this.state.compteur+500})}>Acheter</button>
            </div>
        )
    }
    componentWillUnmount(){
        console.log("noop heep")
    }
}
