import React from "react";


const Hello= () => {

    // using JSX
    // return(
    //     <div>
    //         <h1>
    //             Hello Omega
    //         </h1>
    //     </div>
    // )

    return React.createElement(
        'div',
         {id: 'helo',className:'dummyClass'},  
         React.createElement('h1', null,'Hello Omega')
         
         )
}

export default Hello;