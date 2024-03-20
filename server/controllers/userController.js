const User = require("../db/models/user")



const deleteUser = async (req,res) => {
    const {id} =req.body
    try {
        await User.destroy({where:{id}})
        res.json({message:"User destroyed successfully"})
    } catch (error) {
        console.log(error.message)
    }
}

const getUsers = async (req,res) => {
    try {
        const user = await User.findAll({
            attributes:['name','email','phone','role']
        })
        console.log(user)
        res.json({message:user})
    } catch (error) {
        console.log(error.message)
    }
}


const updateUser = async (req,res) => {
    const {id,role} =req.body
    try {
        const userFound = await User.findOne({where:{id}})
        if(userFound == null) res.json({message:"No such user"})
        
        await User.update({role:role},{
            where:{
                id
            }
        })

        res.json({message:"User updated successfully"})
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = {
    deleteUser,
    getUsers,
    updateUser
}