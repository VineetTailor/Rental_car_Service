import testimonialdata from "../model/testimonialmodel.js"



export const gettestimonials = (req, res)=>{
    console.log("Testimonial get requested")

    testimonialdata.find()
    .then(data => res.send(data))
    .catch(err =>{console.log(err)})

}


export const addtestimonials = async(req, res)=>{
    console.log("post requested")

    const data = new testimonialdata({
        id:req.body.id,
        name:req.body.name,
        type:req.body.type,
        feedback:req.body.feedback
    })

    const result = await data.save()
    res.status(201).json(result)

    console.log("new testimonial added")
}

export const deletetestimonials = (req,res)=>{
    console.log("delete requsted")
    
    testimonialdata.findByIdAndDelete(req.params.id)
    .then(data => {
        if(data) res.send(data)
        else res.status(404).json({error:`no record found in thid id`})
    })
    .catch(err =>{console.log(err)})

    console.log(`testimonial data deleted`)
}