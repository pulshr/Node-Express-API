import {v4 as uuidv4} from 'uuid';

let users = []
export const createUser = (req,res)=>{
    const newUser = req.body;
    users.push({...newUser, id:uuidv4()});
    res.send(`User with the name ${newUser.firstName} added to the database.`);
}

export const findUser = (req,res)=>{
    const {id} = req.params;
    const foundUser = users.find((user)=>user.id===id);
    res.send(foundUser);
}

export const deleteUser = (req,res)=>{
    const {id} = req.params;
    users = users.filter((user)=>user.id!==id);
    res.send(`User with the id ${id} deleted from the database.`);
}

export const updateUser = (req,res)=>{
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const foundUser = users.find((user)=>user.id===id);
    if(firstName) {
        foundUser.firstName = firstName;
    }
    if(lastName) {
        foundUser.lastName = lastName;
    }
    if(age) {
        foundUser.age = age;
    }
    res.send(`User with the id ${id} has been updated in the database.`);
}