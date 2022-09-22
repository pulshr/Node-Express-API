import express from 'express';
import {v4 as uuidv4} from 'uuid';

const router = express.Router();
const users = []

router.get('/',(req,res)=>{
    res.send(users);
});

router.post('/',(req,res)=>{
    const newUser = req.body;
    users.push({...newUser, id:uuidv4()});
    res.send(`User with the name ${newUser.firstName} added to the database.`);
});

router.post('/:id',(req,res)=>{
    const {id} = req.params;
    const foundUser = users.find((user)=>user.id===id);
    res.send(foundUser);
});

export default router;