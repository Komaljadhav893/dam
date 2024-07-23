


// Handle form submission to display dam information
const damForm = document.getElementById('f1');
const damInfoDiv = document.getElementById('dam-info');
const histogramCanvas = document.getElementById('histogram');
const ctx = histogramCanvas.getContext('2d');

damForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const damName = document.getElementById('dam-name').value;

    // Simulate API call to retrieve dam information
    const damData = getDamData(damName);

    displayDamInfo(damData);
});

function getDamData(damName) {
    // Simulate API response
    const dams = [
        { name: 'Almatti Dam', gates: 12, currentWaterLevel: 50, maxWaterLevel: 100 },
        { name: 'Tungabhadra Dam', gates: 33, currentWaterLevel: 30, maxWaterLevel: 89 },
        { name: 'Vani Vilasa Sagara (Mari Kanive) Dam', gates: 22, currentWaterLevel: 40, maxWaterLevel: 90 },
				{ name: 'KRS Dam (Krishna Raja Sagara)', gates: 152, currentWaterLevel: 50, maxWaterLevel: 100 },
        { name: 'Bhadra Dam', gates: 24, currentWaterLevel: 30, maxWaterLevel: 89 },
        { name: 'Linganamakki Dam', gates: 40, currentWaterLevel: 40, maxWaterLevel: 90 },
				{ name: 'Harangi Dam', gates: 17, currentWaterLevel: 50, maxWaterLevel: 100 },
        { name: 'Hemavathi Dam', gates: 30, currentWaterLevel: 30, maxWaterLevel: 89 },
        { name: 'Kabini Dam', gates: 10, currentWaterLevel: 40, maxWaterLevel: 90 },
				{ name: 'Rameshwara Dam', gates: 10, currentWaterLevel: 40, maxWaterLevel: 90 }
    ];

    const dam = dams.find((dam) => dam.name === damName);

    return dam;
}

function displayDamInfo(damData) {
    if (!damData) {
        damInfoDiv.innerHTML = 'Dam not found!';
        return;
    }

    const labels = ['Gates', 'Current Water Level', 'Maximum Water Level'];
    const data = [damData.gates, damData.currentWaterLevel, damData.maxWaterLevel];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Dam Information',
                data: data,
								backgroundColor: [
									'rgba(255, 165, 0, 0.2)',  // More orange
									'rgba(0, 123, 255, 0.2)',  // More blue
									'rgba(255, 255, 0, 0.2)'   // More yellow
							],
							borderColor: [
									'rgba(255, 165, 0, 1)',
									'rgba(0, 123, 255, 1)',
									'rgba(255, 255, 0, 1)'
							],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Smooth scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
