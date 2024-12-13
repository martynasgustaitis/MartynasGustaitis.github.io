document.getElementById("submitButton").addEventListener("click", function () {
    // Surenkame įvesties duomenis
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;
    const num3 = parseFloat(document.getElementById("num3").value) || 0;
    const num4 = parseFloat(document.getElementById("num4").value) || 0;
    const num5 = parseFloat(document.getElementById("num5").value) || 0;

    let errors = [];

    // Patikrinimai
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("Invalid email address.");
    }

    if (!/^\d{7,15}$/.test(phone)) {
        errors.push("Phone number must contain 7-15 digits only.");
    }

    if (address.length < 5) {
        errors.push("Address must be at least 5 characters long.");
    }

    // Jei yra klaidų, rodome jas
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }

    // Skaičiuojame vidurkį
    const average = (num1 + num2 + num3 + num4 + num5) / 5;

    // Vidurkio spalvų pritaikymas
    let averageColor = "black";
    if (average < 4) {
        averageColor = "red";
    } else if (average >= 4 && average < 7) {
        averageColor = "orange";
    } else {
        averageColor = "green";
    }

    // Rodome rezultatus
    document.getElementById("result").innerHTML = `
        <strong>Inputted Information:</strong><br>
        Name: ${name}<br>
        Surname: ${surname}<br>
        Email: ${email}<br>
        Phone: ${phone}<br>
        Address: ${address}<br>
        Field 1: ${num1}<br>
        Field 2: ${num2}<br>
        Field 3: ${num3}<br>
        Field 4: ${num4}<br>
        Field 5: ${num5}
    `;

    // Rodome vidurkį su spalva
    const averageElement = document.getElementById("average");
    averageElement.textContent = `Average: ${average.toFixed(2)}`;
    averageElement.style.color = averageColor;
});
  