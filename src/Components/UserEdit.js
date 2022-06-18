import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import Grid from '@mui/material/Grid';
import { Container } from "@mui/system";
import { Input,InputLabel } from "@mui/material";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Axios from 'axios';

const UserEdit = ({item}) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [position, setPosition] = useState("");

    const {id} = useParams();

  useEffect(() => {
      UsersAPI()
  },[]);

  const UsersAPI = () =>{
    Axios.get(`http://localhost:8000/${id}`)
      .then(res => {
          setName(res.data[0].name)
          setAge(res.data[0].age)
          setPosition(res.data[0].position)
      }).catch(err =>{
        console.log(err)
      });
  }
    // const getUser = () =>{
    //   console.log(item)
    //   setUser(item.filter(res => res.id === parseInt(id)))
    //   console.log(user)
    // }

    const editUser = (id) => {
      Axios.put(`http://localhost:8000/updateUser`, {id:id, name: name, age: age, position: position })
        .then(res => {
            alert(res.data.message)
            console.log(res.data.data)
        }).catch(err=>{
            console.log(err)
        });
    }

    const center = {
        alignItem: "center",
        textAlign: "center"
    }

    return(
        <Container>
          <Grid container >
            <Grid item xs={12} md={12}  style={center} >
              <Box
                component="form"
                noValidate
                autoComplete="off"
                className="box"
              >
                <h1>Edit User</h1>
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
                
                <Button variant="contained" color="success" onClick={()=>{editUser(id)}} style={{marginTop:40}}>
                    Save
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
    )
}

export default UserEdit;