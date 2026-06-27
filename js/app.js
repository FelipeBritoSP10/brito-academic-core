let appData = storage.get();

function iniciarDashboard() {
    appData.nome = document.getElementById('nomeAluno').value;
    appData.curso = document.getElementById('cursoAluno').value;
    appData.semestre = document.getElementById('semestreAluno').value;
    appData.id = document.getElementById('idAluno').value;
    if(!appData.nome) return alert("Preencha o nome!");
    storage.save(appData);
    mostrarDashboard();
}

function mostrarDashboard() {
    ui.renderDashboard(appData);
    atualizarUI();
}

function adicionarNota() {
    const disc = document.getElementById('disciplina').value.trim();
    const nota = parseFloat(document.getElementById('nota').value);
    if(!disc || isNaN(nota)) return;
    if(!appData.materias[disc]) appData.materias[disc] = [];
    appData.materias[disc].push(nota);
    storage.save(appData);
    atualizarUI();
}

function removerNota(disc, index) { 
    appData.materias[disc].splice(index, 1); 
    if(appData.materias[disc].length === 0) delete appData.materias[disc]; 
    storage.save(appData); 
    atualizarUI(); 
}

function atualizarUI() {
    ui.updateTable(appData.materias);
    renderizarGrafico();
}

function renderizarGrafico() {
    const ctx = document.getElementById('meuGrafico').getContext('2d');
    if(window.chart) window.chart.destroy();
    const labels = Object.keys(appData.materias);
    const medias = labels.map(d => (appData.materias[d].reduce((a,b) => a+b, 0) / appData.materias[d].length).toFixed(1));
    window.chart = new Chart(ctx, { type: 'bar', data: { labels: labels, datasets: [{ label: 'Média', data: medias, backgroundColor: '#22d3ee' }] }, options: { responsive: true, scales: { y: { max: 10, beginAtZero: true } } } });
}

function resetarTudo() { if(confirm("Apagar dados?")) { storage.clear(); location.reload(); } }
if(appData.nome) mostrarDashboard();