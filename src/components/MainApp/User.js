
function User(props){
    return(
        <div>
          
            <p>{props.newuser}</p> 
            <button className="btn btn-primary" onClick={()=>props.do(props.newuser)}>delete</button>
         

        </div>
    )
}

export default User 


