document.addEventListener("DOMContentLoaded", function() {
    const citButton = document.getElementById("citButton");
    const busButton = document.getElementById("busButton");
    const studentData = document.getElementById("studentData");

    function fetchDataAndRender() {
        fetch('cit5students.json')
        .then(response => response.json())
        .then(data => renderData(data));
    }

    function renderData(data) {
        const source = document.getElementById("student-template").innerHTML;
        const template = Handlebars.compile(source);
        studentData.innerHTML = template({ students: data});
    }
    citButton.addEventListener("click", function() {
        fetchAndFilterData("CIT");
    });

    busButton.addEventListener("click", function() {
        fetchAndFilterData("BUS");
    });

    function fetchAndFilterData(major) {
        fetch('cit5students.json')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(student => student.major === major);
            renderData(filteredData);
        });

    }

    fetchDataAndRender();
});

