import userdetailsdata from "../model/userdetailsmodel.js"



export const getuserdetails = (req, res)=>{
    console.log("user details get requested")

    userdetailsdata.find()
    .then(data => res.send(data))
    .catch(err =>{console.log(err)})

}


export const adduserdetails = async(req, res)=>{
    console.log("post requested")

    const data = new userdetailsdata({
     
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        phonenumber:req.body.phonenumber,
        fromaddress:req.body.fromaddress,
        toaddress:req.body.toaddress,
        personopt:req.body.personopt,
        luggagecount:req.body.luggagecount,
        date:req.body.date,
        time:req.body.time,
        description: req.body.description
    })

    const result = await data.save()
    res.status(201).json(result)

    console.log("new user details added")
}


export const deleteuserdata = (req,res)=>{
    console.log("delete requsted")
    
    userdetailsdata.findByIdAndDelete(req.params.id)
    .then(data => {
        if(data) res.send(data)
        else res.status(404).json({error:`no record found in thid id`})
    })
    .catch(err =>{console.log(err)})

    console.log(`testimonial data deleted`)
}