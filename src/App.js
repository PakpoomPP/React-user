import React, {useState,useEffect} from "react";
import Grid from '@mui/material/Grid';
import { Container } from "@mui/system";
import { Input,InputLabel } from "@mui/material";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import UserList from './Components/UserList';
import UserEdit from './Components/UserEdit';
import Axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = ()=> {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");

  const [userList,setUserList] = useState([]);

  useEffect(() => {
      UsersAPI()
  },[]);

  const UsersAPI = () =>{
    Axios.get(`http://localhost:8000/`)
      .then(res => {
          const users = res.data;
          setUserList( users );
      }).catch(err =>{
        console.log(err)
      });
  }


  const addUser = () => {
    const user = { name: name, age: age, position: position };
    Axios.post('http://localhost:8000/addUser', user)
      .then(res => {
        console.log(res.data.insertId)
        let user = {id: res.data.insertId ,
          name: name,
          age: age,
          position: position}
        setUserList([
          ...userList,
          user
        ])
        setName("")
        setAge("")
        setPosition("")
      }).catch(err=>{
        console.log(err)
      });
  }

  const deleteUser = (id) => {
    Axios.delete(`http://localhost:8000/deleteUser/${id}`)
      .then(() => {
        let user = [...userList]
        // user.splice(id,1)
        // setUserList(user)
        setUserList(user.filter(item => item.id !== id))
    }).catch(err=>{
        console.log(err)
    });
  }

  const center = {
    alignItem: "center",
    textAlign: "center"
  }

  return (
    <Router>
      <div className="App">
        <Container>
          
          <Routes>
            <Route path="EditUser/:id" element={<UserEdit  item={userList} />}  ></Route>
              <Route path="/" index element={<Grid container >
                <Grid item xs={12} md={6}  style={center} >
                  <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    className="box"
                  >
                    <h1>User</h1>
                    <FormControl fullWidth variant="standard" >
                      <InputLabel htmlFor="component-simple">Name</InputLabel>
                      <Input type="text" placeholder="Name" id="name" value={name}  onChange={(e) => {setName(e.target.value)}}/>
                    </FormControl>
                    <FormControl fullWidth variant="standard">
                      <InputLabel htmlFor="component-simple">Age</InputLabel>
                      <Input type="text" placeholder="Age" id="age" value={age} onChange={(e) => {setAge(e.target.value)}}/>
                    </FormControl>
                    <FormControl fullWidth variant="standard" >
                      <InputLabel htmlFor="component-simple">Position</InputLabel>
                      <Input type="text" placeholder="Position" id="position" value={position} onChange={(e) => {setPosition(e.target.value)}}/>
                    </FormControl>
                    <Button variant="contained" color="success" onClick={addUser} style={{marginTop:40}}>
                        Add
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} className="infomation">
                  <h1 style={center}>Infomation</h1> 
                  <UserList userList={userList} deleteUser={deleteUser}/>        
                </Grid>
              </Grid>}>
            </Route>
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
