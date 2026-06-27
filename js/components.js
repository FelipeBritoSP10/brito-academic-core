async function loadComponent(path) {
    const res = await fetch(path);
    return await res.text();
}

async function renderApp() {
    const app = document.getElementById("app");

    const navbar = await loadComponent("components/navbar.html");
    const cadastro = await loadComponent("components/cadastro.html");
    const dashboard = await loadComponent("components/dashboard.html");
    const footer = await loadComponent("components/footer.html");

    app.innerHTML = `
        ${navbar}
        <div class="container">
            ${cadastro}
            ${dashboard}
        </div>
        ${footer}
    `;
}

renderApp();