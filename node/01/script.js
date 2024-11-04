function cadastrarPessoa() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const escolaridade = document.querySelector('input[name="escolaridade"]:checked').value;
    const deslocamento = Array.from(document.querySelectorAll('input[name="deslocamento"]:checked')).map(el => el.value);

    const pessoa = {
        nome: nome,
        idade: idade,
        escolaridade: escolaridade,
        deslocamento: deslocamento
    };

    console.log(pessoa);
    alert('Cadastro realizado com sucesso!');
}