import { Component } from "react";
import Header from "./MainApp/Header";
import Footer from "./MainApp/Footer";
import Adduser from "./MainApp/AddUser";
import Users from "./MainApp/Users";




export default class MainApp extends Component{
   
    componentDidMount(){
        const json=localStorage.getItem('users')
        const userData=JSON.parse(json)
        if(userData){
            this.setState(()=>{
                return userData
            })
        }
    }

    componentDidUpdate(){
        const json=JSON.stringify(this.state.userData)
        localStorage.setItem("users",json)
    }


    state={
        userData:[],
        headerData:"wel to header",
        footerData:"wel to Footer"
    }



    addUser=(data)=>{
        this.setState((prevState)=>{
    
            return{
                userData:prevState.userData.concat(data)
            }
        })
    }

    deleteall=()=>{
        this.setState(()=>{
            return{
                userData:[]
            }

        })
    }

    deleteone=(user)=>{
        this.setState((prevState)=>{
            return{
                userData:prevState.userData.filter((us)=>user!==us)
            }
        })
    }



    render(){
    
        
        
        return(
            <div>

                <Header hdata={this.state.headerData}/>
                <p>MainApp Component</p>
                <Adduser au={this.addUser}/>
                <Users udata={this.state.userData} da={this.deleteall}
                hasdata={this.state.userData.length} dOne={this.deleteone}/>
                
                <Footer fdata={this.state.footerData}/>
            </div>
        )
    }
}