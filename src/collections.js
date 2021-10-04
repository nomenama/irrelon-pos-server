const configure = (db) => {
	db.collection("merchant").ensureIndex({name: 1}, {unique: true});
	db.collection("merchant").ensureIndex({menus: {name: 1}}, {unique: true});

	db.collection("merchant").insert({
		"_id": "SueFoodTruck",
		"name": "Sue Food Truck",
		"displayName": "Sue Food Truck",
		"enabled": true,
		"menus": [{
			"_id": "Menu",
			"name": "Menu",
			"displayName": "Menu",
			"enabled": true,
			"menuItems": [{
				"_id": db.objectId(),
				"name": "Chicken Noodles",
				"price": 6.5,
				"description": "A tasty chicken noodle",
				"ingredients": [{
					"name": "Chicken"
				}, {
					"name": "Noodle"
				}, {
					"name": "Chicken Broth"
				}],
				"allergens": ["Gluten", "Wheat"],
				"options": [{
					"_id": db.objectId(),
					"name": "Thai Tea - (Ice Optional)",
					"price": 1.5,
					"description": "Thai tea with condensed milk",
					"ingredients": [{
						"name": "Thai tea"
					}, {
						"name": "Condensed Milk"
					}, {
						"name": "Water"
					}],
					"allergens": ["Lactose"],
				}, {
					"_id": db.objectId(),
					"name": "Mineral Water",
					"price": 1.5,
					"description": "A bottle of 500ml Mineral Water",
					"ingredients": [{
						"name": "Mineral Water"
					}],
					"allergens": ["None"],
				}, {
					"_id": db.objectId(),
					"name": "Sprite",
					"price": 1.5,
					"description": "A can of 330ml Sprite",
					"ingredients": [{
						"name": "Bicarbonate Drink"
					}],
					"allergens": ["None"],
				}, {
					"_id": db.objectId(),
					"name": "Sprite",
					"price": 1.5,
					"description": "A can of 330ml Coke",
					"ingredients": [{
						"name": "Bicarbonate Drink"
					}],
					"allergens": ["None"],
				}]
			}, {
				"_id": db.objectId(),
				"name": "Beef Noodles",
				"price": 6.5,
				"description": "A tasty beef noodle",
				"ingredients": [{
					"name": "beef"
				}, {
					"name": "Noodle"
				}, {
					"name": "Chicken Broth"
				}],
				"allergens": ["Gluten", "Wheat"],
				"options": [{
					"_id": db.objectId(),
					"name": "Thai Tea - (Ice Optional)",
					"price": 1.5,
					"description": "Thai tea with condensed milk",
					"ingredients": [{
						"name": "Thai tea"
					}, {
						"name": "Condensed Milk"
					}, {
						"name": "Water"
					}],
					"allergens": ["Lactose"],
				}, {
					"_id": db.objectId(),
					"name": "Mineral Water",
					"price": 1.5,
					"description": "A bottle of 500ml Mineral Water",
					"ingredients": [{
						"name": "Mineral Water"
					}],
					"allergens": ["None"],
				}, {
					"_id": db.objectId(),
					"name": "Sprite",
					"price": 1.5,
					"description": "A can of 330ml Sprite",
					"ingredients": [{
						"name": "Bicarbonate Drink"
					}],
					"allergens": ["None"],
				}, {
					"_id": db.objectId(),
					"name": "Sprite",
					"price": 1.5,
					"description": "A can of 330ml Coke",
					"ingredients": [{
						"name": "Bicarbonate Drink"
					}],
					"allergens": ["None"],
				}]
			}, {
				"_id": db.objectId(),
				"name": "Chicken Rice",
				"price": 6.5,
				"description": "A tasty chicken rice",
				"ingredients": [{
					"name": "Chicken"
				}, {
					"name": "Jasmine Rice"
				}, {
					"name": "Soy Sauce"
				}],
				"allergens": ["Gluten", "Wheat"],
				"options": [{
					"_id": db.objectId(),
					"name": "Thai Tea - (Ice Optional)",
					"price": 1.5,
					"description": "Thai tea with condensed milk",
					"ingredients": [{
						"name": "Thai tea"
					}, {
						"name": "Condensed Milk"
					}, {
						"name": "Water"
					}],
					"allergens": ["Lactose"],
				}, {
					"_id": db.objectId(),
					"name": "Mineral Water",
					"price": 1.5,
					"description": "A bottle of 500ml Mineral Water",
					"ingredients": [{
						"name": "Mineral Water"
					}],
					"allergens": ["None"],
				}, {
					"_id": db.objectId(),
					"name": "Sprite",
					"price": 1.5,
					"description": "A can of 330ml Sprite",
					"ingredients": [{
						"name": "Bicarbonate Drink"
					}],
					"allergens": ["None"],
				}, {
					"_id": db.objectId(),
					"name": "Sprite",
					"price": 1.5,
					"description": "A can of 330ml Coke",
					"ingredients": [{
						"name": "Bicarbonate Drink"
					}],
					"allergens": ["None"],
				}]
			}, {
				"_id": db.objectId(),
				"name": "Crispy Fried Chicken",
				"price": 4.5,
				"description": "Crispy Fried Chicken cooked to perfection",
				"ingredients": [{
					"name": "Chicken"
				}, {
					"name": "Spices"
				}],
				"allergens": ["chicken"],
				"options": [{
					"_id": db.objectId(),
					"name": "Plain Jasmine Rice",
					"price": 1.5,
					"description": "Plain Jasmine Rice",
					"ingredients": [{
						"name": "Thai Jasmine Rice"
					}],
					"allergens": ["None"],
				}, {
					"_id": db.objectId(),
					"name": "Thai Tea - (Ice Optional)",
					"price": 1.5,
					"description": "Thai tea with condensed milk",
					"ingredients": [{
						"name": "Thai tea"
					}, {
						"name": "Condensed Milk"
					}, {
						"name": "Water"
					}],
					"allergens": ["Lactose"],
				}, {
					"_id": db.objectId(),
					"name": "Mineral Water",
					"price": 1.5,
					"description": "A bottle of 500ml Mineral Water",
					"ingredients": [{
						"name": "Mineral Water"
					}],
					"allergens": ["None"],
				}, {
					"_id": db.objectId(),
					"name": "Sprite",
					"price": 1.5,
					"description": "A can of 330ml Sprite",
					"ingredients": [{
						"name": "Bicarbonate Drink"
					}],
					"allergens": ["None"],
				}, {
					"_id": db.objectId(),
					"name": "Sprite",
					"price": 1.5,
					"description": "A can of 330ml Coke",
					"ingredients": [{
						"name": "Bicarbonate Drink"
					}],
					"allergens": ["None"],
				}]
			}, {
				"_id": db.objectId(),
				"name": "Chicken Red Curry",
				"price": 4.5,
				"description": "Chicken Red Curry Thai Style",
				"ingredients": [{
					"name": "Chicken"
				}, {
					"name": "Thai Spices"
				}],
				"allergens": ["chicken"],
				"options": [{
					"_id": db.objectId(),
					"name": "Plain Jasmine Rice",
					"price": 1.5,
					"description": "Plain Jasmine Rice",
					"ingredients": [{
						"name": "Thai Jasmine Rice"
					}],
					"allergens": ["None"],
				}, {
					"_id": db.objectId(),
					"name": "Thai Tea - (Ice Optional)",
					"price": 1.5,
					"description": "Thai tea with condensed milk",
					"ingredients": [{
						"name": "Thai tea"
					}, {
						"name": "Condensed Milk"
					}, {
						"name": "Water"
					}],
					"allergens": ["Lactose"],
				}, {
					"_id": db.objectId(),
					"name": "Mineral Water",
					"price": 1.5,
					"description": "A bottle of 500ml Mineral Water",
					"ingredients": [{
						"name": "Mineral Water"
					}],
					"allergens": ["None"],
				}, {
					"_id": db.objectId(),
					"name": "Sprite",
					"price": 1.5,
					"description": "A can of 330ml Sprite",
					"ingredients": [{
						"name": "Bicarbonate Drink"
					}],
					"allergens": ["None"],
				}, {
					"_id": db.objectId(),
					"name": "Sprite",
					"price": 1.5,
					"description": "A can of 330ml Coke",
					"ingredients": [{
						"name": "Bicarbonate Drink"
					}],
					"allergens": ["None"],
				}]
			}, {
				"_id": db.objectId(),
				"name": "Spring Rolls",
				"price": 4.5,
				"description": "Homemade Spring Rolls",
				"ingredients": [{
					"name": "Chicken"
				}, {
					"name": "Thai Spices"
				}],
				"allergens": ["chicken"],
				"options": [{
					"_id": db.objectId(),
					"name": "Thai Tea - (Ice Optional)",
					"price": 1.5,
					"description": "Thai tea with condensed milk",
					"ingredients": [{
						"name": "Thai tea"
					}, {
						"name": "Condensed Milk"
					}, {
						"name": "Water"
					}],
					"allergens": ["Lactose"],
				}, {
					"_id": db.objectId(),
					"name": "Mineral Water",
					"price": 1.5,
					"description": "A bottle of 500ml Mineral Water",
					"ingredients": [{
						"name": "Mineral Water"
					}],
					"allergens": ["None"],
				}, {
					"_id": db.objectId(),
					"name": "Sprite",
					"price": 1.5,
					"description": "A can of 330ml Sprite",
					"ingredients": [{
						"name": "Bicarbonate Drink"
					}],
					"allergens": ["None"],
				}, {
					"_id": db.objectId(),
					"name": "Sprite",
					"price": 1.5,
					"description": "A can of 330ml Coke",
					"ingredients": [{
						"name": "Bicarbonate Drink"
					}],
					"allergens": ["None"],
				}]
			}]
		}]
	});


	db.collection("cart").insert({
		_id: "myCart",
		lineItems: {}
	});

	db.collection("users");
};

module.exports = {
	configure
};
