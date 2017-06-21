var people  = [
	{
		firstname: 'Jack',
		lastname: 'Doe',
		addresses: [
			'123 fake street',
			'456 fake street'
		]
	},

	{
		firstname: 'John',
		lastname: 'Smith',
			addresses: [
			'789 fake street',
			'000 fake street'
		],
		greet: function() {
			return 'Owned';
		}
	}
]
console.log(people)