let users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('addButton').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('userForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    users.push({name, email, phone, address});
    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('toggleButton').addEventListener('click', () => {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    
    users.forEach((user, index) => {
        const userElement = document.createElement('div');
        userElement.className = 'user';
        userElement.innerHTML = `
            <div>Serial Number: ${index + 1}</div>
            <div>Name: ${user.name}</div>
            <div>Email: ${user.email}</div>
            <div>Phone: ${user.phone}</div>
            <div>Address: ${user.address}</div>
            <button class="updateButton" data-index="${index}">Update</button>
            <button class="deleteButton" data-index="${index}">Delete</button>
        `;
        userList.appendChild(userElement);
    });

    document.getElementById('userData').classList.toggle('hidden');
    document.getElementById('toggleButton').textContent = document.getElementById('userData').classList.contains('hidden') ? 'Show Users' : 'Hide Users';
});

document.getElementById('userData').addEventListener('click', (event) => {
    if (event.target.classList.contains('updateButton')) {
        const index = event.target.dataset.index;
        const user = users[index];
        const name = prompt('Name:', user.name);
        const email = prompt('Email:', user.email);
        const phone = prompt('Phone:', user.phone);
        const address = prompt('Address:', user.address);

        if (name && email && phone && address) {
            users[index] = {name, email, phone, address};
            localStorage.setItem('users', JSON.stringify(users));
        }
    } else if (event.target.classList.contains('deleteButton')) {
        const index = event.target.dataset.index;
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));

        const userList = document.getElementById('userList');
        userList.innerHTML = '';
        users.forEach((user, index) => {
            const userElement = document.createElement('div');
            userElement.className = 'user';
            userElement.innerHTML = `
                <div>Customer Id: ${index + 1}</div>
                <div>Name: ${user.name}</div>
                <div>Email: ${user.email}</div>
                <div>Phone: ${user.phone}</div>
                <div>Address: ${user.address}</div>
                <button class="updateButton" data-index="${index}">Update</button>
                <button class="deleteButton" data-index="${index}">Delete</button>
            `;
            userList.appendChild(userElement);
        });
    }
});
