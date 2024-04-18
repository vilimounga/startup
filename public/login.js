async function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);

    try {
        const response = await fetch('your_authentication_endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userName, password })
        });

        if (response.ok) {
            const userData = await response.json();
            localStorage.setItem("userData", JSON.stringify(userData));
            window.location.href = "record.html";
        } else {
            console.error('Authentication failed');
        }
    } catch (error) {
        console.error('Error during authentication:', error);
    }

    window.location.href = "record.html";
}