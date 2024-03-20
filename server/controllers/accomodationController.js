const User = require("../db/models/user")
const Accomodation = require("../db/models/accomodation")


User.hasMany(Accomodation)
Accomodation.belongsTo(User)


const createAccomodation = async (req,res) => {
    const {name,location,description,image} = req.body
    if (!name || !location || !description || !image) res.json({message:"All fields are required"})
    try {
        const newAccomodation = {
            name,
            location,
            description,
            image
        }
        await Accomodation.create(newAccomodation)
        res.json({message:"Accomodation created successfully"})
    } catch (error) {
        console.log(error.message)
    }
}

const deleteAccomodation = async (req,res) => {
    const {id} =req.body
    try {
        await Accomodation.destroy({where:{id}})
        res.json({message:"Accomodation destroyed successfully"})
    } catch (error) {
        console.log(error.message)
    }
}

const getAccomodations = async (req,res) => {
    const {id} = req.body
    try {
        const accomodation = await Accomodation.findAll()
        res.json({message:accomodation})
    } catch (error) {
        console.log(error.message)
    }
}

const updateAccomodation = async (req,res) => {
    const {id,name,location,description} =req.body
    try {
        const accomodationFound = await Accomodation.findOne({where:{id}})
        if(accomodationFound == null) res.json({message:"No such accomodation"})
        const updatedAccomodation = {
            name:name ? name : accomodationFound.name,
            location:location ? location : accomodationFound.location,
            description:description ? description : accomodationFound.description,
        }
        await Accomodation.update(updatedAccomodation,{
            where:{
                id
            }
        })

        res.json({message:"Accomodation updated successfully"})
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = {
    createAccomodation,
    deleteAccomodation,
    getAccomodations,
    updateAccomodation
}