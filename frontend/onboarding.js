document.getElementById("onboarding-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const goal = document.getElementById("goal").value;
    const level = document.getElementById("level").value;
    const sport = document.getElementById("sport").value;

    // Salva no localStorage
    localStorage.setItem("avx_goal", goal);
    localStorage.setItem("avx_level", level);
    localStorage.setItem("avx_sport", sport);
    localStorage.setItem("avx_first_time", "false");

    // Redireciona para o chat
    window.location.href = "index.html";
});
