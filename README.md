# Laudite Backend

Esse repositório tem como intuito armazenar e dar instruções referentes ao projeto da Laudite usado para teste de Login com AD em servidor local.

## Primeiros Passos
Dentro da pasta do projeto, abra seu terminal de preferência e execute o seguinte comando:

    npm install
  Após isso aguarde a instalação de todos os pacotes para continuar.
  
Depois de instalado volte ao terminal já dentro do projeto e rode o seguinte comando:

    npm run dev
   Após esse comando ser finalizado seu terminal ficará com a seguinte mensagem:
![Imagem do terminal rodando o servidor local da api](https://prnt.sc/rf5w6rU5c-S0)

Seu servidor estará rodando na porta: **3000** no endereço: http://localhost:3000.

Pronto !! <3 Seu backend está rodando e pronto para receber requisições.

## Estrutura do projeto:

![Foto da estrutura do projeto backend](https://prnt.sc/zaWps8RgC9V4)

*Temos as seguintes pastas:*
	**Nodemodules** - Padrão do NodeJs para armazenas as libs utilizadas;
	**SRC** - Pasta onde ficam todos os arquivos referentes a configurações, roteamento e controllers do projeto;
	**Config** - Pasta onde se localiza a configuração do active directory;
	**Controllers** - Pasta onde fica localizado todos os controllers dessa API;
	**Routes** - Pasta onde fica localizado o arquivo de roteamento da API

Fora da pasta **src** temos um arquivo chamado server.js, esse arquivo é responsável pela criação do nosso servidor que está rodando na porta 3000.

## Bibliotecas utilizadas:

Para esse projeto foram utilizadas as bibliotecas:
	

 - express
 - body-parser
 - cors
 - activeDirectory
 - dotenv
## Variáveis de ambiente:
Nesse projeto temos as seguintes variaveis de ambiente:
	
 - **AD_URL** - IP e porta do servidor AD Ex: ldap://XXX.XXX.XXX.XXX:XXX
 - **DOMAIN_CONTROLLER** - Nome do domínio, exemplo: teste.local
 - **AD_USERNAME** - Usuário do AD para configuração de acesso
 - **AD_PASSWORD** - Senha do usuário
	
Para realizar a conexão com o AD foi utilizado a seguinte biblioteca: [Active Directory Lib](https://www.npmjs.com/package/activedirectory)

Em relação a bliblioteca há algumas formas de adaptar login para multiplos AD's, tanto login pelo usuario e senha quando por windows ou azure AD. Fiz apenas uma base nesse teste, mas sei que dá para implementar com mais opções.

## Considerações finais:

Quero agradecer ao Dr. Valter pela oportunidade e dizer que me senti em casa desde o primeiro contato.
E se selecionado ( o que se Deus quiser serei ) darei o meu melhor no trabalho e para ajudar todos da empresa.
Moro com meus pais e cuido deles, esse emprego seria muito importante para mim.

Um grade abraço ! Que Deus abençõe ! 
