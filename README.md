# Desafio_nginx_nodejs

Nesse desafio você coloquei em prática o que aprendi em relação a utilização do nginx como proxy reverso. 
A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. 
Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

* A linguagem de programação para este desafio é Node/JavaScript.

Clone este repositório:
git clone git@github.com:eliaslferreir/Desafio_nginx_nodejs.git -b fullcycle

cd desafio-nginx-node

Execute o Docker Compose:

docker-compose up -d --buid

Este comando iniciará os containers necessários e os deixará em execução em segundo plano.

Acesse a aplicação em seu navegador:
http://localhost:8080/
