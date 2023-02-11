const {CityService} = require('../services/index')


const cityService = new CityService();

const create = async (req,res)=>{
    try {
        const city = await cityService.createCity(req.body)
        return res.status(201).json({
            data: city,
            success:true,
            message: 'City created successfully',
            err:{}
        }); 
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a city",
            err:error
        })
    }
}

// DELETE. -> /city/:id
const destroy = async (req,res)=>{
    try {
        const city = await cityService.deleteCity(req.params.id)
        return res.status(200).json({
            data: city,
            success:true,
            message: 'City deleted successfully',
            err:{}
        });  
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to delete a city",
            err:error
        })
    }
}

// Patch -> /city/:id -> req.body
const update = async (req,res)=>{
    try {
        const city = await cityService.deleteCity(req.params.id,req.body)
        return res.status(200).json({
            data: city,
            success:true,
            message: 'City updated successfully',
            err:{}
        }); 
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to update a city",
            err:error
        })
    }
}

// GET -> /city/:id
const get = async (req,res)=>{
    try {
        const city = await cityService.getCity(req.params.id)
        return res.status(200).json({
            data: city,
            success:true,
            message: 'City get successfully',
            err:{}
        }); 
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to get a city",
            err:error
        })
    }
}

module.exports={
    create,update,destroy,get
}