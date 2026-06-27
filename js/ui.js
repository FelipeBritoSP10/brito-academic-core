const ui = {
    renderDashboard: (appData) => {
        document.getElementById('screenCadastro').classList.remove('active');
        document.getElementById('screenDashboard').classList.add('active');
        document.getElementById('viewNome').innerText = "Dashboard | " + appData.nome;
        document.getElementById('viewInfo').innerText = `${appData.curso} • ${appData.semestre} Semestre • ID: ${appData.id}`;
    },
    updateTable: (materias) => {
        const tbody = document.querySelector('#tabelaNotas tbody');
        tbody.innerHTML = '';
        for (let disc in materias) {
            let notasHtml = materias[disc].map((n, i) => `<span class="nota-tag" onclick="removerNota('${disc}', ${i})">${n}</span>`).join('');
            tbody.innerHTML += `<tr><td><strong>${disc}</strong></td><td>${notasHtml}</td></tr>`;
        }
    }
};