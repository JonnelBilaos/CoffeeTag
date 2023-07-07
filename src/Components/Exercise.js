import React from 'react'

 function Exercise() {
const users = [
    {name: "Jonnel", male: true},
    {name: "Ron", male: true},
    {name: "Cha", male: false},
];

  return (
    
    <div>
        <h1>Hello</h1>
        {users.map((user, key) => {
           if(user.male)
            return <div><h1>{user.name}</h1>
                    <h1>{key}</h1>
                    </div>
           
            
           
        })}
    </div>
  )
}
const UsersName = (props) =>{

    return(
        <div>
            {props.name} {props.male}
        </div>
    )
}

export default Exercise;
