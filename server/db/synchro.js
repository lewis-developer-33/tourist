const { sequelize } = require( "./connect");

const User = require( "./models/user");
const Activity = require( "./models/activity");
const Accomodation = require( "./models/accomodation");


User.hasMany(Activity)
Accomodation.belongsTo(User)

User.hasMany(Accomodation)
Accomodation.belongsTo(User)


const synchroTables = async () => {
    try {
        await sequelize.sync({alter:true})
        console.log("DB synced")
    } catch (error) {
        console.log("Sync failed",error.message)
    }
}

synchroTables()