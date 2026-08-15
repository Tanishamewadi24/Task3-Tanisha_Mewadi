function convertTemperature() {

    let temp = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    let output = document.getElementById("output");

    // Input Validation
    if (temp === "" || isNaN(temp)) {
        output.innerHTML = "⚠️ Please enter a valid number.";
        return;
    }

    temp = parseFloat(temp);

    let result = "";

    if (unit === "celsius") {

        let fahrenheit = (temp * 9/5) + 32;
        let kelvin = temp + 273.15;

        result = `
            ${temp} °C <br><br>
            = ${fahrenheit.toFixed(2)} °F <br>
            = ${kelvin.toFixed(2)} K
        `;

    }

    else if (unit === "fahrenheit") {

        let celsius = (temp - 32) * 5/9;
        let kelvin = celsius + 273.15;

        result = `
            ${temp} °F <br><br>
            = ${celsius.toFixed(2)} °C <br>
            = ${kelvin.toFixed(2)} K
        `;

    }

    else if (unit === "kelvin") {

        let celsius = temp - 273.15;
        let fahrenheit = (celsius * 9/5) + 32;

        result = `
            ${temp} K <br><br>
            = ${celsius.toFixed(2)} °C <br>
            = ${fahrenheit.toFixed(2)} °F
        `;

    }

    output.innerHTML = result;

}