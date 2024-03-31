// import { Component } from "react";



function Adduser(props){

        const addUser=(e)=>{
        e.preventDefault()
         

         const data=e.target.elements.uname.value
         props.au(data)
    }
    return(
                    <div>
                        <form onSubmit={addUser}>
                        <input type="text" name="uname" placeholder="Your Name" required></input>
                        <button >add User</button>
        
                        </form>
                        <p>Adduser Component</p>
                        
                     
                    </div>
                )
}

export default Adduser 



// export default class Adduser extends Component{

//     addUser=(e)=>{
//         e.preventDefault()
         

//          const data=e.target.elements.uname.value
//          this.props.au(data)
//     }
//     render(){
//         return(
//             <div>
//                 <form onSubmit={this.addUser}>
//                 <input type="text" name="uname" placeholder="Your Name" required></input>
//                 <button >add User</button>

//                 </form>
//                 <p>Adduser Component</p>
                
             
//             </div>
//         )
//     }
// }