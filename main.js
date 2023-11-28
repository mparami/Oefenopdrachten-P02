console.log("main is running...");

// Opdr. 1, opdr. 2
// let word = prompt("Type iets in");
// while (word !== "geheim") {
// 	if (word === "quit") {
// 		break;
// 	}

// 	alert("Verkeerd geraden, probeer nog eens");
// 	word = prompt("Type weer iets in");
// }
// alert("Je hebt goed geraden");

// Opdr. 3
let temperatures = [3.6, 3.9, 6.5, 9.9, 13.4, 16.2, 18.3, 17.9, 14.7, 10.9, 7.0, 4.2];
let highest = 0;
let coldest = 100;
for (let i = 0; i < temperatures.length; i++) {
	const temp = temperatures[i];

	// bepaal of temp hoger is dan highest
	if (temp > highest) {
		highest = temp;
	}

	// bepaal of temp lager is dan coldest
	if (temp < coldest) {
		coldest = temp;
	}

	if (temp > 10) {
		console.log("Temperatuur hoger dan 10 graden: ", temp);
	}
}
console.log("Hoogste temperatuur: ", highest);
console.log("Laagste temperatuur: ", coldest);

// Opdr. 4
temperatures = [
	{
		temp: 3.6,
		month: "januari",
	},
	{
		temp: 3.9,
		month: "februari",
	},
	{
		temp: 6.5,
		month: "maart",
	},
	{
		temp: 9.9,
		month: "april",
	},
	{
		temp: 13.4,
		month: "mei",
	},
	{
		temp: 16.2,
		month: "juni",
	},
	{
		temp: 18.3,
		month: "juli",
	},
	{
		temp: 17.9,
		month: "augustus",
	},
	{
		temp: 14.7,
		month: "september",
	},
	{
		temp: 10.9,
		month: "oktober",
	},
	{
		temp: 7.0,
		month: "november",
	},
	{
		temp: 4.2,
		month: "december",
	},
];

const list = document.querySelector(".list");
const table = document.querySelector("table");
for (let i = 0; i < temperatures.length; i++) {
	const temp = temperatures[i];
	list.innerHTML += "<li>" + temp.month + ": " + temp.temp + "</li>";

	table.innerHTML += `<tr><td>${temp.month}</td><td>${temp.temp}</td></tr>`;
}
