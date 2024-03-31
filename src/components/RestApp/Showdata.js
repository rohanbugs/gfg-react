


function Showdata(props){
    return(
        <div>
          
          {props.sdata.map((udata)=> (
       <div>
         {udata.username} -- {udata.email}
       </div>
     ))}
         

        </div>
    )
}

export default Showdata 
