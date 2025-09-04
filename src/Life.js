import React, { PureComponent} from 'react'


class Life extends PureComponent {
    // 1. First get default props
    // 2. Set default state
    state = {
        title : "life Circle"
    }

    // 4. before rendering template
    componentWillMount(){
        console.log("3. before rendering")   
    } 

    // 4. rendering template
    // 5. after rendering template
    componentDidMount(){
        console.log("5. before rendering template")
        document.querySelector("h1").style.color = "red"
    }
    
    // Update state
    // 1. before update template 
    componentWillUpdate(){
        console.log("1. before update template")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(`nextProps : ${nextProps}`);
        console.log(nextState);
        return true;
    }
    // 2. render update to the template

    // 3 after update the template
    componentDidUpdate(){
        console.log("3 after update the template")
    }

    // Propes 
    // Before Receved Props ( click nav to reload the same pages)
    componentWillReceveProps(){
        console.log("Before Receved Props")
    }

    // When goto other pages
    componentWillUnmount(){
        console.log("UnMount")
    }

    render(){
        // console.log(`1. Props: ${this.prop}`)
        console.log("4. Template Rending ")
        return (
            <>
             <h1>{this.state.title}</h1>
             <button class="btn" onClick={()=> this.setState({
                title : "Change Life Circle"
             })}>Click me</button>
            </>
        )
    }
}

export default Life;