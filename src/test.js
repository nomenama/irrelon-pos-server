	db.collection("merchant").insert({
		"_id": "SueFoodTruck",
		"name": "Sue Vietnamese Food Truck",
		"displayName": "Sue Vietnamese Food Truck",
		"enabled": true,
		"menus": [{
			"_id": "Menu",
			"name": "Sue Menu",
			"displayName": "Sue Menu",
			"enabled": true,
			"menuItems": [{
				"_id": db.objectId(),
				"name": "Chicken Noodle",
				"price": 6.50,
				"description": "Special Vietnamese Chicken Noodle",
				"ingredients": [{
					"name": "Chicken"
				}, {
					"name": "Glaze Sauce"
				}, {
					"name": "Broth with vietnamese spices"
				}],
				"allergens": ["Gluten", "Wheat", "egg"],
				"options": [{
					"_id": db.objectId(),
					"name": "Thai Tea - (Ice Optional)",
					"price": 1.5,
					"description": "Special Thai Tea from Thailand",
					"ingredients": [{
						"name": "Milk"
					}, {
						"name": "Thai Tea"
					}, {
						"name": "Water"
					}],
					"allergens": ["Milk"],
				},{
					"_id": db.objectId(),
					"name": "Coke",
					"price": 1.5,
					"description": "330ml can of coke",
					"ingredients": [{
						"name": "sugar"
					}, {
						"name": "Water"
					}, {
						"name": "Calcium Bicarbonate"
					}],
					"allergens": [""],
				}, {
					"_id": db.objectId(),
					"name": "Sprite",
					"price": 1.5,
					"description": "330ml can of Sprite",
					"ingredients": [{
						"name": "water"
					}, {
						"name": "sugar"
					}, {
						"name": "Calcium Bicarbonate"
					}],
					"allergens": [""],
				}, {
					"_id": db.objectId(),
					"name": "Mineral Water",
					"price": 1.5,
					"description": "A bottle of 500ml Mineral Water",
					"ingredients": [{
						"name": "Water"
					}],
					"allergens": ["NA"],
				}]
			}]
		}]
	});

	db.collection("merchant").insert({
		"_id": "testMerchant",
		"name": "Irrelon Test Merchant",
		"displayName": "Test Merchant",
		"enabled": true,
		"menus": [{
			"_id": "testMenu",
			"name": "Irrelon Test Menu",
			"displayName": "Test Menu",
			"enabled": true,
			"menuItems": [{
				"_id": db.objectId(),
				"name": "Chicken Yum Yum",
				"price": 5.99,
				"description": "A tasty chicken dish with honey glazed sauce and boiled white rice.",
				"ingredients": [{
					"name": "Chicken"
				}, {
					"name": "Glaze Sauce"
				}, {
					"name": "Boiled White Rice"
				}],
				"allergens": ["Gluten", "Wheat"],
				"options": [{
					"_id": db.objectId(),
					"name": "Extra Sauce",
					"price": 0.49,
					"description": "An extra helping of sauce on the side.",
					"ingredients": [{
						"name": "Chicken"
					}, {
						"name": "Glaze Sauce"
					}, {
						"name": "Boiled White Rice"
					}],
					"allergens": ["Gluten", "Wheat"],
				}]
			}]
		}]
	});
