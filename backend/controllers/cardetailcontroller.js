import cars from '../model/cardetailmodel.js'


export const getcardetails = (req,res)=>{
    console.log('get requsted')
    cars.find()
    .then(data => res.send(data))
    .catch(err => {console.log(err)})
}


export const getindividualcardetails = (req,res)=>{
    console.log("getting individual car details")

    cars.findById(req.params.id)
    .then(data =>{
        if(data) res.send(data)
        else res.status(404).json({error : `no record found in this id`})
    })
    .catch(err =>console.log(err))
    
}

export const addcardetails = async(req,res)=>{
    console.log("post requsted")

    const data = new cars({
        id:req.body.id,
        brand:req.body.brand,
        carName:req.body.carName,
        price:req.body.price,
        ratings:req.body.ratings,
        model:req.body.model,
        speed:req.body.speed,
        transmission:req.body.transmission,
        gpsNavigation:req.body.gpsNavigation,
        heatedSeats:req.body.heatedSeats,
        description:req.body.description
    })

    const result = await data.save()
    res.status(201).json(result)

    console.log("New car data added")
}


export const deletecardetails = (req, res)=>{
    console.log("delete requsted")

    cars.findByIdAndDelete(req.params.id)
    .then((data)=>{
        if(data)res.send(data)
        else res.status(404).json({error: `no record with this id`})
    })
    .catch(err =>{console.log(err)})
    console.log("car data deleted")

}