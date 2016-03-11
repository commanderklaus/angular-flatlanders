(function () {
	var app = angular.module('store', []);

	var gems = [
		{
			price: 2,
			name: 'Dodecahedron',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis quis quam vel tincidunt. Vestibulum ullamcorper tincidunt est.',
			canPurchase: true,
			soldOut: false,
			images: [{
				full: "http://curvebank.calstatela.edu/hamiltoncircuit/dodecasolid/dodecaforever.gif",
				thumb: "http://curvebank.calstatela.edu/hamiltoncircuit/dodecasolid/dodecaforever.gif"
			}],
			reviews: [
			{
				stars: 5,
				body: "I love this product",
				author: "joe@joeschmo.com" 
			},
			{
				stars: 1,
				body: "I love this product",
				author: "joe@joeschmo.com" 
			}
			]
		},
		{
			price: 2.5,
			name: 'Pentagonal Gem',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis quis quam vel tincidunt. Vestibulum ullamcorper tincidunt est.',
			canPurchase: false,
			soldOut: false
		}
	];

	app.controller('StoreController', function () {
		this.products = gems;
	});

	app.controller('PanelController', function () {
		this.tab = 1;

		this.selectTab = function (setTab) {
			this.tab = setTab;
		}

		this.isSelected = function (checkTab) {
			return this.tab === checkTab;
		}
	});

})();