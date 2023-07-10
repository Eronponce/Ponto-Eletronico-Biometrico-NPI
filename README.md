<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]


<!-- Logo Projeto -->
<br />
<div align="center">
    <img src="https://cdn.dribbble.com/userupload/4044191/file/original-01a5f83799ba27822830ff21ed5e7c3c.png?compress=1&resize=400x300&vertical=center" height='200' alt="Logo">
  <h3 align="center">Projeto Ponto Biométrico - NPI</h3>
  <p align="center">
    Sistema de ponto biométrico feito com ESP32
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explorar Arquivo»</strong></a>
    <br />
    <a href="https://youtu.be/2p1bW34Ef7o">Demo</a>
    ·
    <a href="https://github.com/Eronponce/Ponto-Eletronico-Prot-tipo/issues">Reportar Erro</a>
    ·
    <a href="https://github.com/Eronponce/Ponto-Eletronico-Prot-tipo/issues">Sugerir Melhoria</a>
  </p>
</div>

<!-- Sumário -->
<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#bibliotecas-e-frameworks">Bibliotecas e Frameworks</a></li>
        <li><a href="#esquematico">Esquemático</a></li>
        <li><a href="#custos">Custos</a></li>
        <li><a href="#usage">Como Usar</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Como Fazer o Meu?</a>
      <ul>
        <li><a href="#prerequisites">Pré Requisitos</a></li>
        <li><a href="#installation">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#colaboradores">Colaboradores</a></li>
    <li><a href="#contributing">Contribuindo</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>


<!-- Sobre o Projeto -->
## Sobre o Projeto

O Ponto Biométrico, consiste na criação de um sistema de controle de ponto biométrico utilizando o NodeMCU ESP32. 

Esse é um pequeno, porém poderoso, dispositivo de placa de desenvolvimento baseado em WiFi que pode ser programado usando a linguagem de programação Arduino. 

O sistema é capaz de identificar usuários através de suas impressões digitais, registrar a hora em que entram ou sairam e enviar essas informações para um banco de dados na nuvem. 

Isso permite um acompanhamento em tempo real, garantindo transparência e confiabilidade na gestão do tempo dos funcionários.

O projeto também tem um design compacto feito através de impressão 3D, o que facilita a sua implementação em qualquer ambiente de trabalho.

Entre as principais vantagens deste projeto, podemos citar:

<ul>
<li> Precisão: o uso da biometria para identificar usuários elimina a possibilidade de "bater ponto" para outra pessoa, um problema comum com sistemas tradicionais.</li>

<li>Acessibilidade: o NodeMCU ESP32 é um hardware de baixo custo e de fácil acesso, o que torna o projeto economicamente viável.</li>

<li>Automação: a possibilidade de sincronizar os dados automaticamente com um banco de dados na nuvem torna o processo de controle de ponto mais eficiente e reduz o trabalho manual.</li>

<li>Segurança: todas as transações são seguras, pois são baseadas em biometria e os dados são transmitidos através de conexões criptografadas.</li>
</ul>

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>



### Bibliotecas e Frameworks

Para o desenvolvimento desse projeto, utilizamos as seguintes bibliotecas, frameworks, programas, linguagens e aplicaticos:

[![Arduino](https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white)](https://www.arduino.cc/)
[![NodeMCU](https://img.shields.io/badge/NodeMCU-1B1B1B?style=for-the-badge&logo=nodemcu&logoColor=white)](https://nodemcu.readthedocs.io/)
[![Google Sheets](https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white)](https://www.google.com/sheets/about/)
[![C++](https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)](https://en.cppreference.com/)
[![Font Awesome 5](https://img.shields.io/badge/Font%20Awesome%205-339AF0?style=for-the-badge&logo=font-awesome&logoColor=white)](https://fontawesome.com/)



<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

<!-- Esquematico -->
### Esquematico

<!-- Custos -->
### Custos

<p>Ola mundo</p>

<!-- Como Usar -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>




<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.


<a id="prerequisites"></a>

## 💻 Pré-requisitos


Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Instalar as dependencias do esp8266 `<http://arduino.esp8266.com/stable/package_esp8266com_index.json>`
* Instalar a IDE do Arduino `<https://www.arduino.cc/en/software>`
* Instalar a Biblioteca do esp8266 `<esp8266 by esp8266 community>`
* Instalação do conversor USB Serial `<NodeMCU V2 / ESP32 com conversor USB serial CP210x>`
* Instalação do conversor USB Serial `<NodeMCU com conversor USB serial CH340G (V3)>`
* Instalação da biblioteca fingerprint `<ESP8266WiFi.h/Adafruit_Fingerprint.h/WiFiClientSecure.h>`
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>


<!-- Colaboradores -->

## 🤝 Colaboradores
Agradecemos às seguintes pessoas que contribuíram para este projeto:
<a id='colaboradores'></a>
<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/124714081?v=4" width="100px;" alt="Foto do GitHub"/><br>
        <sub>
          <b>Lucas Oliveira</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://pps.whatsapp.net/v/t61.24694-24/340053964_987266349323018_3626577910372774478_n.jpg?ccb=11-4&oh=01_AdQXUH2emrPjEMJqiFBfleGDv1DWHtkqsDiErCEPtOvOTw&oe=64B96FA4" width="100px;" alt="Foto"/><br>
        <sub>
          <b>Eron Ponce</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/113468321?v=4" width="100px;" alt="Foto"/><br>
        <sub>
          <b>Davi Giovanni</b>
        </sub>
      </a>
    </td>
  </tr>
</table>


<!-- CONTACT -->
##  📞 Contato

<a id="contato"></a>

Lucas Oliveira - Lucas.oliveira@edu.unifil.br

Eron Ponce - Eronponcepereira@edu.unifil.br

Davi - Davi.giovanni@edu.unifil.br


<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/Eronponce/Ponto-Eletronico-Prot-tipo.svg?style=for-the-badge
[contributors-url]: https://github.com/Eronponce/Ponto-Eletronico-Prot-tipo/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/Eronponce/Ponto-Eletronico-Prot-tipo.svg?style=for-the-badge
[forks-url]: https://github.com/Eronponce/Ponto-Eletronico-Prot-tiponetwork/members

[stars-shield]: https://img.shields.io/github/stars/Eronponce/Ponto-Eletronico-Prot-tipo.svg?style=for-the-badge
[stars-url]: https://github.com/Eronponce/Ponto-Eletronico-Prot-tipo/stargazers

[issues-shield]: https://img.shields.io/github/issues/Eronponce/Ponto-Eletronico-Prot-tipo.svg?style=for-the-badge
[issues-url]: https://github.com/Eronponce/Ponto-Eletronico-Prot-tipo/issues

