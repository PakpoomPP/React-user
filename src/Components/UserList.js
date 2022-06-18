import React from "react";
import UserCard from "./UserCard";

const UserList = ({userList,deleteUser}) => {

        return (
            <div>
                {
                    userList.map((user) => { 
                        return (
                            <UserCard key={user.id} id={user.id} name={user.name} age={user.age} position={user.position} onClickRemove={()=> deleteUser(user.id)}/>
                        )
                    })
                }
                
            </div>
        )
    
    
}

export default UserList;