// Opdr. 1, Opdr. 2
let word = prompt("Raad een woord");
while (word !== "VSCode") {
	if (word === "quit") {
		break;
	}

	alert("Foute woord geraden");
	word = prompt("Raad een woord");
}
if (word !== "quit") {
	alert("VSCode");
}

// Opdr. 3
const temperatures = [3.6, 3.9, 6.5, 9.9, 13.4, 16.2, 18.3, 17.9, 14.7, 10.9, 7.0, 4.2];
let highest = 0;
let lowest = 100;
for (let i = 0; i < temperatures.length; i++) {
	const temp = temperatures[i];

	// Bepaal het hoogste getal
	if (temp > highest) {
		highest = temp;
	}
	// Bepaal het laagste getal
	if (temp < lowest) {
		lowest = temp;
	}

	// Toon temperaturen boven de 10 graden
	if (temp > 10) {
		console.log("Groter dan 10: ", temp);
	}
}
console.log("Hoogste temperatuur: ", highest);
console.log("Laagste temperatuur: ", lowest);

// Opdr. 4
const list = [
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
];

const ulList = document.querySelector(".list");
for (let i = 0; i < list.length; i++) {
	const item = list[i];

	// ulList.innerHTML += "<li>" + item.month + ": " + item.temp + "</li>";
	ulList.innerHTML += `<li>${item.month}: ${item.temp}</li>`;
}

// Opdr. 5
const table = document.querySelector("table");
for (let i = 0; i < list.length; i++) {
	const item = list[i];

	table.innerHTML += `
    <tr>
        <td>${item.month}</td>
        <td>${item.temp}</td>
    </tr>`;
}

// Opdr.6
const container = document.querySelector(".container");
const btnCard = document.querySelector(".btn-card");

btnCard.addEventListener("click", function () {
	const message = prompt("Type een chatbericht in");
	container.innerHTML += `
    <div class="card">${message}</div>
    `;
});
