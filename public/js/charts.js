const ctx = document.getElementById('myChart').getContext('2d');
        
        var myChart;
        function mySales() {
            document.getElementById('chart-wrapper').style.backgroundColor = 'white'; 
            document.getElementById('loading').style.display = 'none'; 
            document.getElementById('myChart').style.display = 'block'; 

            if(myChart != null){
                console.log("myChart is not null and destroyed");
                myChart.destroy();
            } else {
                console.log("myChart is null");
            }
            var month = document.getElementById('monthsValue').selectedIndex;
            // console.log(month);
            if (month == 0) {
                console.log("jan selected");
                myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Fruits & Vegetables', 'Dairy & Eggs', 'Bakery', 'Meat & Seafood', 'Snacks & Cookies', 'Beverages', 'Frozen Food', 'Prepare Food',
                            'Pantry', 'Pet Care', 'Floral Garden', 'International', 'Baby care ', 'Home', 'Health & Beauty', 'Cleaning'],
                        datasets: [{
                            label: 'Units Sold ',
                            data: [14, 45, 98, 68, 78, 47, 58, 69, 25, 14, 78, 36, 85, 24, 59, 0],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
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
                    },

                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    },
                    tooltips:
                    {
                        bodyAlign: "center",
                    },
                    Animation: {
                        duration: 5000,
                    }

                });
            }
            else if (month == 1) {
                console.log("feb selected");
                myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Fruits & Vegetables', 'Dairy & Eggs', 'Bakery', 'Meat & Seafood', 'Snacks & Cookies', 'Beverages', 'Frozen Food', 'Prepare Food',
                            'Pantry', 'Pet Care', 'Floral Garden', 'International', 'Baby care ', 'Home', 'Health & Beauty', 'Cleaning'],
                        datasets: [{
                            label: 'Units Sold ',
                            data: [0, 45, 98, 0, 78, 47, 58, 69, 25, 14, 78, 36, 85, 24, 0, 56],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
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
                    },

                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    },
                    tooltips:
                    {
                        bodyAlign: "center",
                    },
                    Animation: {
                        duration: 5000,
                    }
                });
            }
            else if (month == 2) {
                console.log("mar selected");
                myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Fruits & Vegetables', 'Dairy & Eggs', 'Bakery', 'Meat & Seafood', 'Snacks & Cookies', 'Beverages', 'Frozen Food', 'Prepare Food',
                            'Pantry', 'Pet Care', 'Floral Garden', 'International', 'Baby care ', 'Home', 'Health & Beauty', 'Cleaning'],
                        datasets: [{
                            label: 'Units Sold ',
                            data: [14, 45, 98, 68, 78, 47, 58, 69, 25, 14, 78, 36, 85, 24, 59, 56],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
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
                    },

                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    },
                    tooltips:
                    {
                        bodyAlign: "center",
                    },
                    Animation: {
                        duration: 5000,
                    }



                });
            }
            else if (month == 3) {
                console.log("apr selected");
                myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Fruits & Vegetables', 'Dairy & Eggs', 'Bakery', 'Meat & Seafood', 'Snacks & Cookies', 'Beverages', 'Frozen Food', 'Prepare Food',
                            'Pantry', 'Pet Care', 'Floral Garden', 'International', 'Baby care ', 'Home', 'Health & Beauty', 'Cleaning'],
                        datasets: [{
                            label: 'Units Sold ',
                            data: [89, 34, 22, 18, 5, 78, 55, 67, 34, 29, 93, 2, 15, 42, 37, 82],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
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
                    },

                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    },
                    tooltips:
                    {
                        bodyAlign: "center",
                    },
                    Animation: {
                        duration: 5000,
                    }



                });
            }
        }
