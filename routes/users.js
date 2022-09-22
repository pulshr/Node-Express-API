import express from 'express';
import { createUser,findUser,deleteUser,updateUser} from '../controllers/users.js';

const router = express.Router();

router.get('/',(req,res)=>{
    res.send(users);
});

router.post('/',createUser);
router.post('/:id',findUser);
router.delete('/:id',deleteUser);
router.patch('/:id',updateUser);

export default router;