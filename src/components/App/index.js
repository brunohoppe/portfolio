import React from 'react';
import Content from 'components/Content';
import Footer from 'components/Footer';
import './styles.css';
const App = () => (
  <React.Fragment>
    <Content>
      <div className="portifolio">
      <div className="header-portifolio">
        <div className="img-portifolio">
          <img width="100" height="100" src="inst.jpg" alt="bruno"/>
        </div>
        <b>Bruno Botêlho</b>
        <div className="descricao-portifolio">
        <div>
          <hr/>
          <span>Engenheiro de Software</span>
        </div>
          <p>Sou apaixonado por computadores.
            Não me defino apenas como desenvolvedor, mas, atualmente, é com esta função que me sustento. Dedico uma parte considerável
            do meu tempo desenvolvendo sistemas web e mobile. Quando não estou no computador, passo meu tempo assistindo animes e lendo livros.
          </p>
        </div>
      </div>
        <div className="content-portifolio">
          <div>
            <p>Com o que me divirto hoje:</p>
            <div>
            <img width="50" height="40" src="angular.png" alt="angular"/>
            <img width="50" height="40" src="react.svg" alt="react"/>
            <img width="50" height="40" src="python.png" alt="python"/>
            <img width="50" height="40" src="spring-boot.png" alt="node"/>
            </div>
            <small>
            Imagens retiradas da internet</small>
          </div>
          <div>
            <p>Experiências:</p>
            <p className="em-breve">Em Breve!!!</p>
          </div>
        </div>
      </div>
    </Content>
    <Footer />
  </React.Fragment>
)
export default App;
