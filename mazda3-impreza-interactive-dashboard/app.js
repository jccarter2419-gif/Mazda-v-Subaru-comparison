// Car Comparison Dashboard JavaScript
// Data from the provided JSON
const carData = {
  "cars": {
    "mazda3": {
      "name": "Mazda3 Manual",
      "subtitle": "The Driver's Choice",
      "modelYears": "2014-2019",
      "engines": {
        "2.0L": {"hp": 157, "torque": 150, "displacement": "2.0L SKYACTIV-G"},
        "2.5L": {"hp": 191, "torque": 186, "displacement": "2.5L SKYACTIV-G"}
      },
      "transmission": "6-speed manual (SKYACTIV-MT)",
      "drivetrain": "Front-wheel drive (FWD)",
      "bodyStyles": ["Sedan", "Hatchback"],
      "pricing": {
        "range": "$8,000 - $14,500",
        "average": 11250,
        "sweetSpot": "2016-2019",
        "mileage": "60,000-120,000"
      },
      "performance": {
        "0to60_2.0": 8.7,
        "0to60_2.5": 7.8,
        "topSpeed": 130,
        "handling": "Exceptional - precise steering, balanced chassis"
      },
      "reliability": {
        "rating": 4.0,
        "ratingText": "Excellent",
        "annualMaintenance": 433,
        "majorRepairProb": 10,
        "fiveYearMaintenance": 2165
      },
      "fuelEconomy": {
        "city": 26,
        "highway": 36,
        "combined": 30,
        "realWorld": "28-32"
      },
      "interior": {
        "passengerVolume": 92.7,
        "frontHeadroom": 38.6,
        "frontLegroom": 42.2,
        "rearLegroom": 35.8,
        "cargoHatch": 20.2,
        "cargoSedan": 13.2,
        "quality": "Premium materials, soft-touch surfaces"
      },
      "pros": [
        "6-speed manual transmission with excellent feel",
        "Superior driving dynamics and handling",
        "Premium interior quality and materials",
        "Excellent reliability rating (4.0/5.0)",
        "Lower maintenance costs ($433/year)",
        "More powerful engine options (up to 191 hp)",
        "Better fuel economy potential",
        "Sharp, engaging steering feedback",
        "Modern infotainment system (2017+ models)"
      ],
      "cons": [
        "Front-wheel drive only",
        "Less passenger room, especially rear seat",
        "Higher average purchase price",
        "Road noise at highway speeds",
        "Infotainment reliability issues (2014-2016)",
        "Brake master cylinder problems",
        "Lower ground clearance"
      ],
      "color": "#1e40af"
    },
    "impreza": {
      "name": "Subaru Impreza Manual",
      "subtitle": "The Practical All-Weather Choice",
      "modelYears": "2012-2020",
      "engines": {
        "2.0L": {"hp": 152, "torque": 145, "displacement": "2.0L BOXER"}
      },
      "transmission": "5-speed manual",
      "drivetrain": "Symmetrical All-Wheel Drive (AWD)",
      "bodyStyles": ["Sedan", "Hatchback"],
      "pricing": {
        "range": "$7,500 - $14,000",
        "average": 10750,
        "sweetSpot": "2017-2020",
        "mileage": "50,000-100,000"
      },
      "performance": {
        "0to60_2.0": 8.4,
        "topSpeed": 120,
        "handling": "Solid, predictable with AWD stability advantage"
      },
      "reliability": {
        "rating": 3.5,
        "ratingText": "Average",
        "annualMaintenance": 653,
        "majorRepairProb": 18,
        "fiveYearMaintenance": 3265
      },
      "fuelEconomy": {
        "city": 27,
        "highway": 35,
        "combined": 29,
        "realWorld": "26-30"
      },
      "interior": {
        "passengerVolume": 100.9,
        "frontHeadroom": 39.8,
        "frontLegroom": 43.5,
        "rearLegroom": 36.5,
        "cargoHatch": 20.8,
        "cargoSedan": 12.3,
        "quality": "Functional but less refined, hard plastics evident"
      },
      "pros": [
        "Standard symmetrical all-wheel drive",
        "Significantly more passenger space (100.9 cu ft)",
        "Slightly more cargo space in hatchback",
        "Lower average purchase price",
        "Superior weather and terrain capability",
        "Proven AWD system reliability",
        "Strong resale value retention",
        "Analog, mechanical driving feel",
        "Available in more recent model years"
      ],
      "cons": [
        "Only 5-speed manual (lacks highway 6th gear)",
        "Less powerful engine (152 hp maximum)",
        "Higher maintenance costs ($653/year)",
        "Lower reliability rating (3.5/5.0)",
        "Head gasket issues in older models",
        "Less engaging driving experience in dry conditions",
        "Higher highway engine RPMs and noise",
        "CVT reliability concerns (automatic models)"
      ],
      "color": "#dc2626"
    }
  },
  "verdict": {
    "winner": "Mazda3",
    "mazda3Score": 8.0,
    "imprezaScore": 7.4,
    "summary": "The Mazda3 manual transmission wins through superior driving engagement, better long-term reliability, and lower total cost of ownership."
  },
  "comparisons": {
    "performance": [
      {"metric": "Horsepower (2.5L/2.0L)", "mazda3": 191, "impreza": 152, "unit": "hp", "category": "performance"},
      {"metric": "Torque (2.5L/2.0L)", "mazda3": 186, "impreza": 145, "unit": "lb-ft", "category": "performance"},
      {"metric": "0-60 mph (2.5L/2.0L)", "mazda3": 7.8, "impreza": 8.4, "unit": "sec", "category": "performance"},
      {"metric": "Top Speed", "mazda3": 130, "impreza": 120, "unit": "mph", "category": "performance"}
    ],
    "economics": [
      {"metric": "Average Purchase Price", "mazda3": 11250, "impreza": 10750, "unit": "$", "category": "economics"},
      {"metric": "Annual Maintenance", "mazda3": 433, "impreza": 653, "unit": "$", "category": "economics"},
      {"metric": "5-Year Maintenance", "mazda3": 2165, "impreza": 3265, "unit": "$", "category": "economics"},
      {"metric": "Major Repair Probability", "mazda3": 10, "impreza": 18, "unit": "%", "category": "economics"}
    ],
    "space": [
      {"metric": "Passenger Volume", "mazda3": 92.7, "impreza": 100.9, "unit": "cu ft", "category": "space"},
      {"metric": "Cargo Space (Hatch)", "mazda3": 20.2, "impreza": 20.8, "unit": "cu ft", "category": "space"},
      {"metric": "Front Legroom", "mazda3": 42.2, "impreza": 43.5, "unit": "in", "category": "space"},
      {"metric": "Rear Legroom", "mazda3": 35.8, "impreza": 36.5, "unit": "in", "category": "space"}
    ],
    "efficiency": [
      {"metric": "City MPG", "mazda3": 26, "impreza": 27, "unit": "mpg", "category": "efficiency"},
      {"metric": "Highway MPG", "mazda3": 36, "impreza": 35, "unit": "mpg", "category": "efficiency"},
      {"metric": "Combined MPG", "mazda3": 30, "impreza": 29, "unit": "mpg", "category": "efficiency"}
    ]
  },
  "buyerProfiles": {
    "mazda3": [
      "Driving enthusiasts seeking engagement and fun",
      "Highway commuters who value the 6th gear",
      "Budget-conscious buyers prioritizing long-term value",
      "Urban drivers who rarely encounter severe weather",
      "Style-conscious buyers wanting a premium interior feel"
    ],
    "impreza": [
      "All-weather drivers in snow/rain-prone regions",
      "Families needing maximum passenger space",
      "Outdoor enthusiasts requiring AWD capability",
      "Tall drivers wanting more headroom and legroom",
      "Value seekers prioritizing lower upfront cost"
    ]
  }
};

// Chart colors
const chartColors = {
  mazda3: ['#1FB8CD', '#5D878F', '#13343B'],
  impreza: ['#FFC185', '#B4413C', '#964325'],
  fills: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B']
};

// Global variables
let performanceChart, costChart, spaceChart, mazda3FuelChart, imprezaFuelChart;
let currentQuizQuestion = 1;
let quizAnswers = {};

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    initializeComparisonTable();
    initializeProsConsSection();
    initializeBuyerProfiles();
    initializeQuiz();
    initializeDynamicScoring();
    initializeAnimations();
    initializeInteractiveFeatures();
});

// Initialize all Chart.js visualizations
function initializeCharts() {
    createPerformanceRadarChart();
    createCostAnalysisChart();
    createSpaceComparisonChart();
    createFuelGaugeCharts();
}

// Performance Radar Chart
function createPerformanceRadarChart() {
    const ctx = document.getElementById('performanceRadar').getContext('2d');
    
    performanceChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Horsepower', 'Torque', 'Acceleration', 'Top Speed', 'Handling', 'Reliability'],
            datasets: [{
                label: 'Mazda3',
                data: [
                    (191/200) * 100, // Normalized HP
                    (186/200) * 100, // Normalized Torque
                    ((10-7.8)/10) * 100, // Acceleration (inverted)
                    (130/150) * 100, // Top Speed
                    90, // Handling (subjective score)
                    80 // Reliability score
                ],
                backgroundColor: 'rgba(31, 184, 205, 0.2)',
                borderColor: '#1FB8CD',
                borderWidth: 3,
                pointBackgroundColor: '#1FB8CD',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6
            }, {
                label: 'Impreza',
                data: [
                    (152/200) * 100, // Normalized HP
                    (145/200) * 100, // Normalized Torque
                    ((10-8.4)/10) * 100, // Acceleration (inverted)
                    (120/150) * 100, // Top Speed
                    75, // Handling (subjective score)
                    70 // Reliability score
                ],
                backgroundColor: 'rgba(255, 193, 133, 0.2)',
                borderColor: '#FFC185',
                borderWidth: 3,
                pointBackgroundColor: '#FFC185',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${Math.round(context.parsed.r)}%`;
                        }
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    pointLabels: {
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    },
                    ticks: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// Cost Analysis Bar Chart - Fixed to handle different data scales
function createCostAnalysisChart() {
    const ctx = document.getElementById('costAnalysis').getContext('2d');
    
    // Separate the data into different scales
    const priceData = {
        labels: ['Purchase Price'],
        mazda3: [11.25], // In thousands
        impreza: [10.75]
    };
    
    const maintenanceData = {
        labels: ['Annual Maintenance', '5-Year Maintenance'],
        mazda3: [433, 2.165], // 5-year in thousands
        impreza: [653, 3.265]
    };
    
    const riskData = {
        labels: ['Major Repair Risk'],
        mazda3: [10],
        impreza: [18]
    };
    
    costChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Purchase Price (K$)', 'Annual Maintenance ($)', '5-Year Maintenance (K$)', 'Repair Risk (%)'],
            datasets: [{
                label: 'Mazda3',
                data: [11.25, 433, 2.165, 10 * 50], // Scale repair risk for visibility
                backgroundColor: '#1FB8CD',
                borderColor: '#13343B',
                borderWidth: 2,
                borderRadius: 8
            }, {
                label: 'Impreza',
                data: [10.75, 653, 3.265, 18 * 50], // Scale repair risk for visibility
                backgroundColor: '#FFC185',
                borderColor: '#964325',
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.dataset.label;
                            const value = context.parsed.x;
                            const metric = context.label;
                            
                            if (metric.includes('Purchase Price')) {
                                return `${label}: $${(value * 1000).toLocaleString()}`;
                            } else if (metric.includes('Annual Maintenance')) {
                                return `${label}: $${value.toLocaleString()}`;
                            } else if (metric.includes('5-Year')) {
                                return `${label}: $${(value * 1000).toLocaleString()}`;
                            } else if (metric.includes('Repair Risk')) {
                                return `${label}: ${(value / 50)}%`;
                            }
                            return `${label}: ${value}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        callback: function(value, index) {
                            const labels = this.chart.data.labels;
                            const currentLabel = labels[index];
                            
                            if (currentLabel && currentLabel.includes('Purchase Price')) {
                                return '$' + (value * 1000).toLocaleString();
                            } else if (currentLabel && currentLabel.includes('Annual')) {
                                return '$' + value.toLocaleString();
                            } else if (currentLabel && currentLabel.includes('5-Year')) {
                                return '$' + (value * 1000).toLocaleString();
                            } else if (currentLabel && currentLabel.includes('Risk')) {
                                return (value / 50) + '%';
                            }
                            return value;
                        }
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 11,
                            weight: 'bold'
                        }
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeOutBounce'
            }
        }
    });
}

// Space Comparison Chart
function createSpaceComparisonChart() {
    const ctx = document.getElementById('spaceComparison').getContext('2d');
    
    spaceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Passenger Volume', 'Cargo Space', 'Front Legroom', 'Rear Legroom'],
            datasets: [{
                label: 'Mazda3',
                data: [92.7, 20.2, 42.2, 35.8],
                backgroundColor: '#1FB8CD',
                borderColor: '#13343B',
                borderWidth: 2,
                borderRadius: 8
            }, {
                label: 'Impreza',
                data: [100.9, 20.8, 43.5, 36.5],
                backgroundColor: '#FFC185',
                borderColor: '#964325',
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.dataset.label;
                            const value = context.parsed.y;
                            const metric = context.label;
                            
                            if (metric.includes('Volume') || metric.includes('Cargo')) {
                                return `${label}: ${value} cu ft`;
                            } else {
                                return `${label}: ${value} inches`;
                            }
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value;
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 11,
                            weight: 'bold'
                        }
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeInOutQuint'
            }
        }
    });
}

// Fuel Economy Gauge Charts
function createFuelGaugeCharts() {
    createFuelGauge('mazda3FuelGauge', 30, '#1FB8CD', 'Mazda3');
    createFuelGauge('imprezaFuelGauge', 29, '#FFC185', 'Impreza');
}

function createFuelGauge(canvasId, mpgValue, color, carName) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [mpgValue, 40 - mpgValue],
                backgroundColor: [color, 'rgba(200, 200, 200, 0.3)'],
                borderWidth: 0,
                cutout: '75%'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutElastic'
            }
        },
        plugins: [{
            beforeDraw: function(chart) {
                const width = chart.width;
                const height = chart.height;
                const ctx = chart.ctx;
                
                ctx.restore();
                const fontSize = (height / 100).toFixed(2);
                ctx.font = `bold ${fontSize}em sans-serif`;
                ctx.textBaseline = 'middle';
                ctx.fillStyle = color;
                
                const text = `${mpgValue}`;
                const textX = Math.round((width - ctx.measureText(text).width) / 2);
                const textY = height / 2;
                
                ctx.fillText(text, textX, textY);
                
                ctx.font = `${fontSize * 0.6}em sans-serif`;
                ctx.fillStyle = '#666';
                const unitText = 'MPG';
                const unitX = Math.round((width - ctx.measureText(unitText).width) / 2);
                const unitY = textY + 20;
                
                ctx.fillText(unitText, unitX, unitY);
                ctx.save();
            }
        }]
    });
}

// Initialize Comparison Table
function initializeComparisonTable() {
    populateComparisonTable();
    setupTableFilters();
}

function populateComparisonTable() {
    const tableBody = document.getElementById('specsTableBody');
    const allComparisons = [
        ...carData.comparisons.performance,
        ...carData.comparisons.economics,
        ...carData.comparisons.space,
        ...carData.comparisons.efficiency
    ];
    
    allComparisons.forEach(item => {
        const row = document.createElement('tr');
        row.setAttribute('data-category', item.category);
        
        // Determine winner
        let winner = '';
        let winnerClass = '';
        
        if (item.metric.includes('0-60') || item.metric.includes('Repair') || 
            item.metric.includes('Maintenance') || item.metric.includes('Purchase Price')) {
            // Lower is better
            if (item.mazda3 < item.impreza) {
                winner = 'Mazda3';
                winnerClass = 'mazda3-winner';
            } else if (item.impreza < item.mazda3) {
                winner = 'Impreza';
                winnerClass = 'impreza-winner';
            } else {
                winner = 'Tie';
            }
        } else {
            // Higher is better
            if (item.mazda3 > item.impreza) {
                winner = 'Mazda3';
                winnerClass = 'mazda3-winner';
            } else if (item.impreza > item.mazda3) {
                winner = 'Impreza';
                winnerClass = 'impreza-winner';
            } else {
                winner = 'Tie';
            }
        }
        
        // Format values
        const formatValue = (value, unit) => {
            if (unit === '$') {
                return `$${value.toLocaleString()}`;
            } else if (unit === '%') {
                return `${value}%`;
            } else {
                return `${value} ${unit}`;
            }
        };
        
        row.innerHTML = `
            <td>${item.metric}</td>
            <td class="${winner === 'Mazda3' ? 'winner-cell' : ''}">${formatValue(item.mazda3, item.unit)}</td>
            <td class="${winner === 'Impreza' ? 'winner-cell' : ''}">${formatValue(item.impreza, item.unit)}</td>
            <td class="${winnerClass}">${winner}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function setupTableFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sortBy');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterTable(filter);
        });
    });
    
    sortSelect.addEventListener('change', function() {
        sortTable(this.value);
    });
}

function filterTable(category) {
    const rows = document.querySelectorAll('#specsTableBody tr');
    
    rows.forEach(row => {
        if (category === 'all') {
            row.style.display = '';
        } else {
            const rowCategory = row.getAttribute('data-category');
            row.style.display = rowCategory === category ? '' : 'none';
        }
    });
}

function sortTable(sortBy) {
    const tableBody = document.getElementById('specsTableBody');
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    
    rows.sort((a, b) => {
        if (sortBy === 'metric') {
            return a.cells[0].textContent.localeCompare(b.cells[0].textContent);
        } else if (sortBy === 'mazda3-advantage') {
            return a.cells[3].textContent === 'Mazda3' ? -1 : 1;
        } else if (sortBy === 'impreza-advantage') {
            return a.cells[3].textContent === 'Impreza' ? -1 : 1;
        }
        return 0;
    });
    
    rows.forEach(row => tableBody.appendChild(row));
}

// Initialize Pros & Cons Section
function initializeProsConsSection() {
    populateProsConsData();
    setupProsConsToggle();
    setupImportanceFilter();
}

function populateProsConsData() {
    // Populate Mazda3 pros and cons
    const mazda3Pros = document.getElementById('mazda3Pros');
    const mazda3Cons = document.getElementById('mazda3Cons');
    const mazda3ProsMini = document.getElementById('mazda3ProsMini');
    const mazda3ConsMini = document.getElementById('mazda3ConsMini');
    
    carData.cars.mazda3.pros.forEach(pro => {
        const proElement = document.createElement('div');
        proElement.className = 'pro-item';
        proElement.setAttribute('data-category', categorizeProCon(pro));
        proElement.textContent = pro;
        mazda3Pros.appendChild(proElement);
        
        // Add to mini version
        const proMini = proElement.cloneNode(true);
        mazda3ProsMini.appendChild(proMini);
    });
    
    carData.cars.mazda3.cons.forEach(con => {
        const conElement = document.createElement('div');
        conElement.className = 'con-item';
        conElement.setAttribute('data-category', categorizeProCon(con));
        conElement.textContent = con;
        mazda3Cons.appendChild(conElement);
        
        // Add to mini version
        const conMini = conElement.cloneNode(true);
        mazda3ConsMini.appendChild(conMini);
    });
    
    // Populate Impreza pros and cons
    const imprezaPros = document.getElementById('imprezaPros');
    const imprezaCons = document.getElementById('imprezaCons');
    const imprezaProsMini = document.getElementById('imprezaProsMini');
    const imprezaConsMini = document.getElementById('imprezaConsMini');
    
    carData.cars.impreza.pros.forEach(pro => {
        const proElement = document.createElement('div');
        proElement.className = 'pro-item';
        proElement.setAttribute('data-category', categorizeProCon(pro));
        proElement.textContent = pro;
        imprezaPros.appendChild(proElement);
        
        // Add to mini version
        const proMini = proElement.cloneNode(true);
        imprezaProsMini.appendChild(proMini);
    });
    
    carData.cars.impreza.cons.forEach(con => {
        const conElement = document.createElement('div');
        conElement.className = 'con-item';
        conElement.setAttribute('data-category', categorizeProCon(con));
        conElement.textContent = con;
        imprezaCons.appendChild(conElement);
        
        // Add to mini version
        const conMini = conElement.cloneNode(true);
        imprezaConsMini.appendChild(conMini);
    });
}

function categorizeProCon(text) {
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('driving') || lowerText.includes('handling') || 
        lowerText.includes('transmission') || lowerText.includes('speed') ||
        lowerText.includes('engagement') || lowerText.includes('steering')) {
        return 'performance';
    } else if (lowerText.includes('reliability') || lowerText.includes('rating') ||
               lowerText.includes('issues') || lowerText.includes('problems')) {
        return 'reliability';
    } else if (lowerText.includes('cost') || lowerText.includes('maintenance') ||
               lowerText.includes('price') || lowerText.includes('value')) {
        return 'cost';
    } else if (lowerText.includes('space') || lowerText.includes('room') ||
               lowerText.includes('passenger') || lowerText.includes('cargo') ||
               lowerText.includes('awd') || lowerText.includes('weather')) {
        return 'practicality';
    }
    return 'performance'; // default
}

function setupProsConsToggle() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const prosConsContent = document.querySelectorAll('.car-pros-cons');
    
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const targetCar = this.getAttribute('data-car');
            
            prosConsContent.forEach(content => {
                content.classList.remove('active');
                if (content.classList.contains(`${targetCar}-pros-cons`)) {
                    setTimeout(() => {
                        content.classList.add('active');
                    }, 100);
                }
            });
        });
    });
}

function setupImportanceFilter() {
    const filterCheckboxes = document.querySelectorAll('.filter-option input');
    
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkedCategories = Array.from(filterCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);
            
            filterProsCons(checkedCategories);
        });
    });
}

function filterProsCons(categories) {
    const allItems = document.querySelectorAll('.pro-item, .con-item');
    
    allItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (categories.includes(itemCategory)) {
            item.style.display = '';
            item.style.opacity = '1';
        } else {
            item.style.opacity = '0.3';
        }
    });
}

// Initialize Buyer Profiles
function initializeBuyerProfiles() {
    const mazda3Profiles = document.getElementById('mazda3Profiles');
    const imprezaProfiles = document.getElementById('imprezaProfiles');
    
    carData.buyerProfiles.mazda3.forEach(profile => {
        const li = document.createElement('li');
        li.textContent = profile;
        mazda3Profiles.appendChild(li);
    });
    
    carData.buyerProfiles.impreza.forEach(profile => {
        const li = document.createElement('li');
        li.textContent = profile;
        imprezaProfiles.appendChild(li);
    });
}

// Initialize Quiz
function initializeQuiz() {
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    nextBtn.addEventListener('click', nextQuestion);
    prevBtn.addEventListener('click', prevQuestion);
    
    setupQuizOptions();
    updateQuizNavigation();
}

function setupQuizOptions() {
    const quizOptions = document.querySelectorAll('.quiz-option');
    
    quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            const question = this.closest('.quiz-question');
            const questionNum = question.getAttribute('data-question');
            
            // Remove selected class from siblings
            question.querySelectorAll('.quiz-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Add selected class
            this.classList.add('selected');
            
            // Store answer
            quizAnswers[questionNum] = this.getAttribute('data-value');
            
            // Enable next button
            document.getElementById('nextBtn').disabled = false;
        });
    });
}

function nextQuestion() {
    const currentQuestion = document.querySelector(`.quiz-question[data-question="${currentQuizQuestion}"]`);
    
    if (currentQuizQuestion < 3) {
        currentQuestion.classList.remove('active');
        currentQuizQuestion++;
        
        setTimeout(() => {
            const nextQuestion = document.querySelector(`.quiz-question[data-question="${currentQuizQuestion}"]`);
            nextQuestion.classList.add('active');
            updateQuizNavigation();
        }, 200);
    } else {
        // Show result
        showQuizResult();
    }
}

function prevQuestion() {
    if (currentQuizQuestion > 1) {
        const currentQuestion = document.querySelector(`.quiz-question[data-question="${currentQuizQuestion}"]`);
        currentQuestion.classList.remove('active');
        currentQuizQuestion--;
        
        setTimeout(() => {
            const prevQuestion = document.querySelector(`.quiz-question[data-question="${currentQuizQuestion}"]`);
            prevQuestion.classList.add('active');
            updateQuizNavigation();
        }, 200);
    }
}

function updateQuizNavigation() {
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    prevBtn.disabled = currentQuizQuestion === 1;
    
    if (currentQuizQuestion === 3) {
        nextBtn.textContent = 'Get Recommendation';
    } else {
        nextBtn.textContent = 'Next';
    }
    
    // Check if current question is answered
    const hasAnswer = quizAnswers[currentQuizQuestion];
    nextBtn.disabled = !hasAnswer;
}

function showQuizResult() {
    const resultDiv = document.getElementById('quizResult');
    const recommendation = calculateQuizRecommendation();
    
    resultDiv.innerHTML = `
        <h4>🎯 Your Recommendation: ${recommendation.winner}</h4>
        <p>${recommendation.explanation}</p>
        <div class="recommendation-confidence">
            <strong>Confidence Level:</strong> ${recommendation.confidence}%
        </div>
    `;
    
    // Hide questions, show result
    document.querySelectorAll('.quiz-question').forEach(q => {
        q.classList.remove('active');
    });
    
    resultDiv.classList.add('show');
    
    // Hide navigation
    document.querySelector('.quiz-navigation').style.display = 'none';
}

function calculateQuizRecommendation() {
    let mazda3Score = 0;
    let imprezaScore = 0;
    
    // Scoring based on answers
    if (quizAnswers['1'] === 'urban') mazda3Score += 2;
    if (quizAnswers['1'] === 'weather') imprezaScore += 3;
    if (quizAnswers['1'] === 'mixed') { mazda3Score += 1; imprezaScore += 1; }
    
    if (quizAnswers['2'] === 'driving') mazda3Score += 3;
    if (quizAnswers['2'] === 'space') imprezaScore += 2;
    if (quizAnswers['2'] === 'cost') imprezaScore += 1;
    if (quizAnswers['2'] === 'reliability') mazda3Score += 2;
    
    if (quizAnswers['3'] === 'purchase') imprezaScore += 2;
    if (quizAnswers['3'] === 'maintenance') mazda3Score += 3;
    if (quizAnswers['3'] === 'total') mazda3Score += 2;
    
    const winner = mazda3Score > imprezaScore ? 'Mazda3' : 'Impreza';
    const confidence = Math.round((Math.abs(mazda3Score - imprezaScore) / Math.max(mazda3Score, imprezaScore)) * 100);
    
    let explanation = '';
    if (winner === 'Mazda3') {
        explanation = 'Based on your preferences for driving engagement and long-term value, the Mazda3 is your ideal choice.';
    } else {
        explanation = 'Based on your need for all-weather capability and space, the Impreza suits you better.';
    }
    
    return { winner, explanation, confidence };
}

// Initialize Dynamic Scoring
function initializeDynamicScoring() {
    const sliders = document.querySelectorAll('input[type="range"]');
    
    sliders.forEach(slider => {
        slider.addEventListener('input', function() {
            updateSliderValue(this);
            calculateDynamicScores();
        });
    });
    
    // Initial calculation
    calculateDynamicScores();
}

function updateSliderValue(slider) {
    const valueSpan = document.getElementById(slider.id.replace('Weight', 'Value'));
    valueSpan.textContent = slider.value + '%';
}

function calculateDynamicScores() {
    const performanceWeight = parseInt(document.getElementById('performanceWeight').value) / 100;
    const reliabilityWeight = parseInt(document.getElementById('reliabilityWeight').value) / 100;
    const costWeight = parseInt(document.getElementById('costWeight').value) / 100;
    const practicalityWeight = parseInt(document.getElementById('practicalityWeight').value) / 100;
    
    // Base scores (out of 10)
    const mazda3Scores = {
        performance: 9.0,
        reliability: 8.0,
        cost: 8.5,
        practicality: 6.5
    };
    
    const imprezaScores = {
        performance: 7.0,
        reliability: 7.0,
        cost: 7.0,
        practicality: 8.5
    };
    
    // Calculate weighted scores
    const mazda3Final = (
        mazda3Scores.performance * performanceWeight +
        mazda3Scores.reliability * reliabilityWeight +
        mazda3Scores.cost * costWeight +
        mazda3Scores.practicality * practicalityWeight
    );
    
    const imprezaFinal = (
        imprezaScores.performance * performanceWeight +
        imprezaScores.reliability * reliabilityWeight +
        imprezaScores.cost * costWeight +
        imprezaScores.practicality * practicalityWeight
    );
    
    // Update display
    document.getElementById('mazda3FinalScore').textContent = mazda3Final.toFixed(1);
    document.getElementById('imprezaFinalScore').textContent = imprezaFinal.toFixed(1);
    
    // Update score bars
    document.getElementById('mazda3ScoreFill').style.width = (mazda3Final * 10) + '%';
    document.getElementById('imprezaScoreFill').style.width = (imprezaFinal * 10) + '%';
    
    // Update recommendation
    const winner = mazda3Final > imprezaFinal ? 'Mazda3' : 'Impreza';
    const margin = Math.abs(mazda3Final - imprezaFinal).toFixed(1);
    
    let recommendationText = '';
    if (winner === 'Mazda3') {
        recommendationText = `With your current priorities, the Mazda3 scores ${mazda3Final.toFixed(1)}/10 vs Impreza's ${imprezaFinal.toFixed(1)}/10. `;
        if (margin > 1.0) {
            recommendationText += 'This is a strong recommendation for the Mazda3.';
        } else {
            recommendationText += 'Both cars are very close - consider your specific needs carefully.';
        }
    } else {
        recommendationText = `With your current priorities, the Impreza scores ${imprezaFinal.toFixed(1)}/10 vs Mazda3's ${mazda3Final.toFixed(1)}/10. `;
        if (margin > 1.0) {
            recommendationText += 'This is a strong recommendation for the Impreza.';
        } else {
            recommendationText += 'Both cars are very close - consider your specific needs carefully.';
        }
    }
    
    document.getElementById('dynamicRecommendation').textContent = recommendationText;
}

// Initialize Animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for animations
    document.querySelectorAll('.car-overview-card, .chart-container-wrapper, .reliability-scorecard, .pros-cons-card, .recommendation-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Staggered animations for comparison table rows
    const tableRows = document.querySelectorAll('#specsTableBody tr');
    tableRows.forEach((row, index) => {
        row.style.animationDelay = `${index * 0.05}s`;
        row.classList.add('slide-in-left');
    });
    
    // Animate stats on hero section
    animateCounters();
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseFloat(counter.textContent);
        const increment = target / 50;
        let current = 0;
        
        const updateCount = () => {
            if (current < target) {
                current += increment;
                counter.textContent = current.toFixed(1);
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target.toFixed(1);
            }
        };
        
        updateCount();
    });
}

// Initialize Interactive Features
function initializeInteractiveFeatures() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Enhanced hover effects for cards
    document.querySelectorAll('.car-overview-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-nav');
    });
    
    // Chart interaction enhancements
    addChartInteractions();
}

function addChartInteractions() {
    // Add click handlers for chart legends to toggle datasets
    const chartInstances = [performanceChart, costChart, spaceChart];
    
    chartInstances.forEach(chart => {
        if (chart && chart.canvas) {
            chart.canvas.addEventListener('click', function(e) {
                const activeElements = chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false);
                
                if (activeElements.length > 0) {
                    // Add visual feedback for clicked elements
                    const element = activeElements[0];
                    const datasetIndex = element.datasetIndex;
                    
                    // Temporarily highlight the dataset
                    const originalBorderWidth = chart.data.datasets[datasetIndex].borderWidth;
                    chart.data.datasets[datasetIndex].borderWidth = originalBorderWidth + 2;
                    chart.update('none');
                    
                    setTimeout(() => {
                        chart.data.datasets[datasetIndex].borderWidth = originalBorderWidth;
                        chart.update('none');
                    }, 200);
                }
            });
        }
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Error handling and loading states
function handleChartError(chartId, error) {
    console.error(`Error creating chart ${chartId}:`, error);
    const container = document.getElementById(chartId).parentElement;
    container.innerHTML = `
        <div class="chart-error">
            <p>Unable to load chart. Please refresh the page.</p>
        </div>
    `;
}

// Performance monitoring
function trackPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
            }, 0);
        });
    }
}

// Initialize performance tracking
trackPerformance();

// Export functions for potential external use
window.CarDashboard = {
    initializeCharts,
    initializeComparisonTable,
    calculateDynamicScores,
    carData
};