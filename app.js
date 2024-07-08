document.getElementById('fetchDataBtn').addEventListener('click', fetchData);

function fetchData() {
    fetch('https://reqres.in/api/users?page=1&per_page=6')
        .then(response => response.json())
        .then(data => displayData(data.data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayData(users) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = '';

    users.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('data-item');
        div.innerHTML = `
            <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}" width="50" height="50">
            <div>
                <h2>${user.first_name} ${user.last_name}</h2>
                <p>${user.email}</p>
            </div>
        `;
        dataContainer.appendChild(div);
    });
}
