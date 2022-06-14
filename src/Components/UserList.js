import React from "react";
import UserCard from "./UserCard";

const UserList = ({userList,deleteUser}) => {
    return (
        <div>
            {
                userList.map((user,index) => { 
                    return (
                        <UserCard key={index} name={user.name} age={user.age} position={user.position} onClickRemove={()=> deleteUser(index)}/>
                    )
                })
            }
            
        </div>
    )
}

export default UserList;