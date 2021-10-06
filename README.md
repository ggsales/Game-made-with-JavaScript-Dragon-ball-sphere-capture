# Jogo criado com JavaScript - dragon-ball-sphere-capture
game com a temática do anime Dragon Ball Z, com  foco no uso do JavaScript para a produção do mesmo. 

<img width="960" alt="Captura de tela 2021-10-06 005856" src="https://user-images.githubusercontent.com/67559431/136138606-c13de66b-584b-4223-80fd-716a049d9698.png">

### O propósito do jogo é simples, capturar as esferas que aparecerão na tela e não perder vidas. Após o nivel de jogo for escohido, o player é direcionado a tela do game, no qual a velocidade de renderização da esfera, vai de acordo com a dificuldade escolhida. A vitória vem caso a quantidade de vidas seja superior a 1, durante os 15 segundos, e a derrota caso o oposto disso ocorra.


## Vitoria

https://user-images.githubusercontent.com/67559431/136139556-355eebbe-10b2-4e46-84d9-91f1d4f6f30f.mp4


## Derrota

https://user-images.githubusercontent.com/67559431/136139626-7d272676-6bd1-4713-9bb7-8a86ff757cd5.mp4

## O que foi usado ?

### A ideia do projeto é apenas praticar/estudar conceitos do Javascript. Nesse em questão, vale destacar as seguintes tecnicas:

## [Window.innerHeight](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/innerHeight) e [Window.innerWidth](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth)
<p> para que fosse possível as esferas aparecerem de forma aleatória, foi necessário, primeiramente, limitar a mesma para que não "vazasse" conteúdo no meio da dinamica do jogo. Então junto das propriedades InnerHeight e InnerWidth foram aplicadas variaveis de altura e largura, contidas no escopo global, com o valor 0, para a manipulação de forma dinamica desses valores de acordo com cada tela. </p>
  
## [Math](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math)
<p>E graças ao objeto Math foi possivel criar as cordenadas de renderização de forma aleatória das esferas. Com o Math.Random era gerado um valor aleatório, que se multiplicado pelo valor das variaveis altura largura, ditas anteriormente, ja nos retorna um valor que se limita justamente  a elas. </p>
  
##  [Dom](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
<p>Com o número aleatório criado, era necessário apenas a manipulação do DOM para a criação de um novo elemento html img e associar o mesmo a esses numeros de acordo com as posições .</p>
