import react from 'react'

// function Greet(){
//     return <h1>Hello Omega</h1>
// }

const Greet = (props) => {

    console.log(props)
    //if I assign name a value like i did below/ I will get errors when I try to compile it, with new added values in the App.js file. 
    //props.name = 'Omega'
return(
<div>
  <h1> {props.name} a.k.a {props.heroName}</h1> 
  {props.children}
 </div>
) 

}
export default Greet;