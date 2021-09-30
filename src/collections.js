const configure = (db) => {
	db.collection("merchant").ensureIndex({name: 1}, {unique: true});
	db.collection("menu").ensureIndex({name: 1, merchantId: 1}, {unique: true});

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
					"name": "Extra Sauce",
					"price": 0.49,
					"description": "An extra helping of sauce on the side."
				}]
			}]
		}]
	});
}

module.exports = {
	configure
};
