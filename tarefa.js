const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

// 1. Reprovados (média menor que 5)
const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 5;
});

console.log('Reprovados:', reprovados);


// 2. Aprovados (média maior ou igual a 7)
const aprovados = alunos.filter((aluno, indice) => {
    return medias[indice] >= 7;
});

console.log('Aprovados:', aprovados);


// 3. Recuperação (média entre 5 e 6.9)
const recuperacao = alunos.filter((aluno, indice) => {
    return medias[indice] >= 5 && medias[indice] < 7;
});

console.log('Recuperação:', recuperacao);