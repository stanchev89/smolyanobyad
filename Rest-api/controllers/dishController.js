const { dishModel } = require("../models");

function getAllDishes(req, res, next) {
	dishModel.find().then((dishes) => res.json(dishes)).catch(next);
}

function getDishesByCategory(req, res, next) {
	const { category } = req.params;
	dishModel.find({category:{'$regex': `${category}`}}).then((dishes) => res.json(dishes)).catch(next)
}

function addNewDish(req, res, next) {
	const newDish = req.body;
	dishModel.find( { name:newDish.name } )
		.then(dish => {
			if(dish.length > 0) {
				return Promise.reject({message:'Dish already exist!'})
			}
			dishModel.create(newDish)
				.then(() => {
					res.status(200).send({message:'Successful added dish!'})
				}).catch(err => {
				if (err.name === "MongoError" && err.code === 11000) {
					let field = err.message.split("index: ")[1];
					field = field.split(" dup key")[0];
					field = field.substring(0, field.lastIndexOf("_"));

					res.status(409).send({ message: `This ${field} is already registered!` });
					return;
				}
				next(err);
			})

		}).catch(next)
}

function removeDish(req, res, next) {
	const dishName = req.body;
	dishModel.findOneAndDelete({ name: dishName})
		.then(deletedDish => {
			res.status(200).json(deletedDish);
		})
		.catch(next);
}

function editDish(req, res, next) {
	const dishProps =  ['name', 'products', 'meatless', 'category', 'price', 'weight', 'img', 'options']
	const update = {
		$addToSet: {},
		$push:{},
		$set: {},
		$pull: {}
	};
	req.body.forEach(param => {
		const[prop,value] = Object.entries(param);
		if(dishProps.includes(prop)) {
			update.$set[prop] = value;
		}
	})
	
	
	userModel.findOneAndUpdate({ name: req.body.name}, update) // to return newDish add {new: true}
		.then(oldDish => {
			res.status(200).json(oldDish);
		})
		.catch(next)

}


module.exports = {
	getAllDishes,
	getDishesByCategory,
	addNewDish,
	removeDish,
	editDish
};