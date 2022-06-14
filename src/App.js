import React, {useState} from "react";
import Grid from '@mui/material/Grid';
import { Container } from "@mui/system";
import { Input,InputLabel } from "@mui/material";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import UserList from './Components/UserList';

const App = ()=> {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");

  const [userList,setUserList] = useState([]);

  const onChangeName = (e) =>{
    setName(e)
    console.log(name)
  }

  const addUser = () => {
    setUserList([
      ...userList,
      {
        name : name,
        age : age,
        position : position
      }
    ])
  }
  const deleteUser = (index) => {
    let user = [...userList]
    user.splice(index,1)
    setUserList(user)
  }
  const center = {
    alignItem: "center",
    textAlign: "center"
  }

  return (
    <div className="App">
      <Container>
        <Grid container >
          <Grid item xs={12} md={6}  style={center} >

            <Box
              component="form"
              noValidate
              autoComplete="off"
              className="box"
            >
              <h1>Product</h1>
              <FormControl fullWidth variant="standard" >
                <InputLabel htmlFor="component-simple">Name</InputLabel>
                <Input type="text" placeholder="Name" id="name"  onChange={(e) => {onChangeName(e.target.value)}}/>
              </FormControl>
              <FormControl fullWidth variant="standard">
                <InputLabel htmlFor="component-simple">Age</InputLabel>
                <Input type="text" placeholder="Age" id="age" onChange={(e) => {setAge(e.target.value)}}/>
              </FormControl>
              <FormControl fullWidth variant="standard" >
                <InputLabel htmlFor="component-simple">Position</InputLabel>
                <Input type="text" placeholder="Position" id="position" onChange={(e) => {setPosition(e.target.value)}}/>
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
        </Grid>
      </Container>
    </div>
  );
}

export default App;
