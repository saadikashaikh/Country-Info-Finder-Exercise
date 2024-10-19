function getCountryInfo() {
    const countryName = document.getElementById("countryInput").value;
    
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => response.json())
        .then(data => {
            const country = data[0];  // First result
            const details = `
                <p><strong>Common Name:</strong> ${country.name.common}</p>
                <p><strong>Official Name:</strong> ${country.name.official}</p>
                <p><strong>Population:</strong> ${country.population}</p>
                <p><strong>Capital(s):</strong> ${country.capital.join(', ')}</p>
            `;
            document.getElementById("countryDetails").innerHTML = details;
        })
        .catch(error => {
            document.getElementById("countryDetails").innerHTML = `<p>Country not found</p>`;
        });
}
