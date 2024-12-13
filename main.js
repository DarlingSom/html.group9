function convert() {
    const inputValue = document.getElementById('input-value').value;
    const inputUnit = document.getElementById('input-unit').value;
    const outputUnit = document.getElementById('output-unit').value;

    let convertedValue;

    // Conversion logic for length
    if (inputUnit === 'meters' && outputUnit === 'feet') {
        convertedValue = inputValue * 3.28084; // Meters to feet
    }

    // Conversion logic for weight
    else if (inputUnit === 'kilograms' && outputUnit === 'pounds') {
        convertedValue = inputValue * 2.20462; // Kilograms to pounds
    }

    // Conversion logic for temperature
    else if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
        convertedValue = (inputValue * 9/5) + 32; // Celsius to Fahrenheit
    }

    // Handle invalid conversions
    else {
        document.getElementById('converted-value').value = 'Invalid conversion';
        return;
    }

    document.getElementById('converted-value').value = convertedValue.toFixed(2);
}
