const axios = require("axios")
require("dotenv").config()


const generateToken = async () => {
    const secretKey = process.env.CONSUMER_SECRET
    const consumer = process.env.CONSUMER_KEY
    const auth  = new Buffer.from(`${consumer}:${secretKey}`).toString("base64")
    try {
        const data = await axios.get("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",{
            headers:{
                authorization:`Basic ${auth}`
            }
        })
        console.log(data.data.access_token)
        return data.data.access_token
        
    } catch (error) {
        console.log(error.message)
    }
    
}

const sendMoney = async (req,res) => {
    const {paybill,amount,phone} = req.body

    token = await generateToken()
    console.log(token)
    if (token != undefined) {
        const date = new Date()
        const timestamp = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + (date.getDate() + 1)).slice(-2) + ("0" + (date.getHours() + 1)).slice(-2) + ("0" + (date.getMinutes() + 1)).slice(-2) + ("0" + (date.getSeconds() + 1)).slice(-2)
        const shortCode = paybill
        const passKey = process.env.PASS_KEY
        const phoneNumber = phone.substring(1)
        const password = new Buffer.from(shortCode + passKey + timestamp).toString("base64")
        try {
            const data = axios.post("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",{
                "BusinessShortCode": shortCode,    
                "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3",    
                "Timestamp":timestamp,    
                "TransactionType": "CustomerPayBillOnline",   // CustomerBuyGoodsOnline  
                "Amount": amount,    
                "PartyA":`254${phoneNumber}`,    
                "PartyB":shortCode,    
                "PhoneNumber":`254${phoneNumber}`,    
                "CallBackURL": "https://mydomain.com/pat",    
                "AccountReference":`254${phoneNumber}`,    
                "TransactionDesc":"Gift Apartment Paid"  
            },{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            console.log(data)
            res.status(503).json({message:"issues"})
            res.json({data})
        } catch (error) {
            console.log(error.message)
            res.json({error:error.message})
        }
    }
}

module.exports = {
    generateToken,
    sendMoney
}