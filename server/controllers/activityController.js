const User = require("../db/models/user")
const Activity = require("../db/models/activity")


User.hasMany(Activity)
Accomodation.belongsTo(User)


const createActivity = async (req,res) => {
    const {name,location,description} = req.body
    if (!name || !location || !description) res.json({message:"All fields are required"})
    try {
        const newActivity = {
            name,
            location,
            description
        }
        await Activity.create(newActivity)
        res.json({message:"Activity created successfully"})
    } catch (error) {
        console.log(error.message)
    }
}

const deleteActivity = async (req,res) => {
    const {id} =req.body
    try {
        await Activity.destroy({where:{id}})
        res.json({message:"Activity destroyed successfully"})
    } catch (error) {
        console.log(error.message)
    }
}

const getActivitys = async (req,res) => {
    const {id} = req.body
    try {
        const activity = await Activity.findAll()
        res.json({message:activity})
    } catch (error) {
        console.log(error.message)
    }
}

const updateActivity = async (req,res) => {
    const {id,name,location,description} =req.body
    try {
        const activityFound = await Activity.findOne({where:{id}})
        if(activityFound == null) res.json({message:"No such activity"})
        const updatedActivity = {
            name:name ? name : activityFound.name,
            location:location ? location : activityFound.location,
            description:description ? description : activityFound.description,
        }
        await Activity.update(updatedActivity,{
            where:{
                id
            }
        })

        res.json({message:"Activity updated successfully"})
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = {
    createActivity,
    deleteActivity,
    getActivitys,
    updateActivity
}