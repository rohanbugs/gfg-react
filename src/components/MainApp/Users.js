import User from "./User";


function Users(props){
    return(
        <div>
          
            <p>Users Component</p>
            <div>{props.udata.map(ud=><User key={ud} newuser={ud} do={props.dOne}/>)}</div>
            <button disabled={!props.hasdata} onClick={props.da}>deleteall</button>
            

        </div>
    )
}

export default Users






