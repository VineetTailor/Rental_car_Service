import cars from '../model/cardetailmodel.js'


export const getcardetails = async (req, res) => {
    try {
        const data = await cars.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


export const getindividualcardetails = async (req, res) => {
    try {
        // Try to find by car name first
        let car = await cars.findOne({ carName: req.params.id });
        
        // If not found by name, try to find by ID
        if (!car && !isNaN(req.params.id)) {
            car = await cars.findOne({ id: parseInt(req.params.id) });
        }

        if (car) {
            res.json(car);
        } else {
            res.status(404).json({ error: 'Car not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const addcardetails = async (req, res) => {
    try {
        const newCar = new cars({
            id: req.body.id,
            brand: req.body.brand,
            carName: req.body.carName,
            imgUrl: req.body.imgUrl,
            model: req.body.model,
            price: req.body.price,
            speed: req.body.speed,
            mileage: req.body.mileage,
            transmission: req.body.transmission,
            gpsNavigation: req.body.gpsNavigation,
            heatedSeats: req.body.heatedSeats,
            ratings: req.body.ratings,
            description: req.body.description
        });

        const savedCar = await newCar.save();
        res.status(201).json(savedCar);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


export const deletecardetails = async (req, res) => {
    try {
        const car = await cars.findOneAndDelete({ id: parseInt(req.params.id) });
        if (car) {
            res.json({ message: 'Car deleted successfully' });
        } else {
            res.status(404).json({ error: 'Car not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}