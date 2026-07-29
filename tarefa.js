const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const aprovados = alunos.filter((aluno, indice) => {
    return medias[indice] >= 7;
});
console.log('Aprovados:', aprovados);

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const recuperacao = alunos.filter((aluno, indice) => {
    return medias[indice] >= 5 && medias[indice] < 7;
});

console.log('Recuperação:', recuperacao)