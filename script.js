document.addEventListener('DOMContentLoaded', function() {
    fetchPopulationData();
    fetchEmploymentData();
});

function fetchPopulationData() {
    fetch('https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff')
        .then(response => response.json())
        .then(populationData => {
            fetchEmploymentData(populationData);
        })
        .catch(error => console.error('Error fetching population data:', error));
}

function fetchEmploymentData(populationData) {
    fetch('https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065')
        .then(response => response.json())
        .then(employmentData => {
            populateTable(populationData, employmentData);
        })
        .catch(error => console.error('Error fetching employment data:', error));
}

function populateTable(populationData, employmentData) {
    const municipalities = populationData.dataset.dimension.Alue.category.label;
    const populationValues = populationData.dataset.value;
    const employmentValues = employmentData.dataset.value;

    const tableBody = document.getElementById('table-body');

    Object.keys(municipalities).forEach((key, index) => {
        const municipality = municipalities[key];
        const population = populationValues[index];
        const employment = employmentValues[index];
        const employmentPercent = ((employment / population) * 100).toFixed(2);

        const row = document.createElement('tr');

        if (employmentPercent > 45) {
            row.classList.add('high-employment');
        } else if (employmentPercent < 25) {
            row.classList.add('low-employment');
        }

        row.innerHTML = `
            <td>${municipality}</td>
            <td>${population}</td>
            <td>${employment}</td>
            <td>${employmentPercent}%</td>
        `;

        tableBody.appendChild(row);
    });
}
