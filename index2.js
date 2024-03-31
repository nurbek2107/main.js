
    let username = prompt("Foydalanuvchi nomi: user");
    let password = prompt("Parol: admin");
    if (username === "user" && password === "admin") {
        window.location.href = "https://erp.student.najottalim.uz";
    } else {
        alert("Noto'g'ri foydalanuvchi nomi yoki parol. Iltimos, qayta urinib ko'ring.");
    }