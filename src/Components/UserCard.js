import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";

const UserCard = ({name,age,position,onClickRemove}) => {
    // const [name,age,position] = user;
    return (
        <Card variant="outlined" className="card-userList" >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Age: {age}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Position: {position}
                </Typography>
                <Button variant="contained" color="error" onClick={onClickRemove}>Delete</Button>

            </CardContent>
        </Card>
    )
}

export default UserCard;