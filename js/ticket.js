var data = [
	{
		"name": "Avengers",
		"date": "Sep. 2014",
		"price": 15,
		"sold": false
	},

	{
		"name": "Star Wars",
		"date": "Oct. 2015",
		"price": 10,
		"sold": false
	},

	{
		"name": "Tinanic",
		"date": "Mar. 1996",
		"price": 16,
		"sold": false
	}
];

function buyTicket(i) {
	data[i].sold = true;
	loadData(data);
}

function loadData(d) {
	$(".table-data").remove();
	for (var i = 0; i < d.length; i++) {
		if (d[i].price >= 10) {
			if (d[i].sold) {
				var button = "<button disabled>Sold Out</button>";
			} else {
				var button = "<button onClick='buyTicket(" + i + ")'>Purchase</button>";
			}
			
			var tableRow = "<tr class='table-data'>" +
					"<td>" + d[i].name + "</td>" + 
					"<td>" + d[i].date +"</td>" + 
					"<td>" + d[i].price + "</td>" + 
					"<td>" + button + "</td>" +
				"</tr>";

			$('table tbody').append(tableRow);
		}
	}
}

loadData(data);
