const STORAGE_KEY = 'acadData_Brito';
const storage = {
    get: () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || { nome: '', curso: '', semestre: '', id: '', materias: {} },
    save: (data) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data)),
    clear: () => localStorage.removeItem(STORAGE_KEY)
};