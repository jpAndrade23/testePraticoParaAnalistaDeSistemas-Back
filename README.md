# testePraticoParaAnalistaDeSistemas-Back
Este é o MER do projeto:
<br>
<img src="https://media.discordapp.net/attachments/1082383095078076509/1181873235688685648/testeIntegrado_1.jpg?ex=6582a439&is=65702f39&hm=d0529fa78fea35cbfb990c32cb1c41fddb948b721d46e9b6e6454ae51cab5cf2&=&format=webp&width=427&height=468" />


<p> Optei por transformar Modalidade e Tipo em duas entidades para limitar o escopo do curso e evitar disparidade, o tipo se refere a se o curso é Graduação ou Pós-Graduação e modalidade se o curso é se o curso é presencial ou EAD</p>
<p>Este projeto utiliza o gerenciador de pacotes npm, para utilizá-lo basta ter o node instalado em sua máquina</p>
<p>Para executar este projeto é necessário um banco de dados postgres</p>
<p>Faça um clone do repositório e dentro da pasta do projeto use o comando abaixo para baixar todas as depêndencias</p>
<code>npm install</code>
<p>Após isso crie um dotenv para conectar o banco de dados ao projeto</p>
<p>Crie uma variável <code>DATABASE_URL=</code> e atribua a ela</p>
<code> postgresql://meu_usuario:minha_senha@meu_host:minha_porta/meu_banco_de_dados?schema=meu_esquema</code>
<p>Dentro do projeto existe um arquivo chamado <code>api.http</code> para utilizá-lo baixe a extensão do VS Code</p>
<img src="https://cdn.discordapp.com/attachments/1082383095078076509/1181878820815519764/image.png?ex=6582a96d&is=6570346d&hm=ab256ae8a6020c99eca911eab16b20fd54fff228f69cef833f093841a60b0892&" />
<p> Esta extensão realiza requisições http para a API sem a necessidade de uma interface, utilize está extensão para testar a API, alguns exemplos de como usar e como é o formato do JSON estão no arquivo</p>
<p>Para executar o projeto utilize o comando</p>
<code>npm run start:dev</code>
<h2>Como foi desenvolver a aplicação</h2>
<p>Para o desenvolvimento desta aplicação foi usado Nest, escolhi este framework pois segundo minhas pesquisas o seu uso seria simples pois sua estrutura de arquivos é bem simples. Sua utilização foi simples e intuitiva, todas as dúvidas que surgiram foram simples de solucionar pois a comunidade do Nest é muito grande</p>
