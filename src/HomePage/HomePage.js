import React from "react";
import "./HomePage.css";

/**
 * 
 * props
 *  
 */
const Card = ({image, title, authors}) => {
  //
  //const {image, title} = props
  return <React.Fragment>
    <img src={image.src} alt={image.alt}/>
    <p>{title}</p>
    <ul>
      {authors.map((author, index) => {
        return <li key={index}>{author}</li>
      })}
    </ul>
  </React.Fragment>
}

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="list-books-title">Minhas leituras</h1>
        <div className="container home">
          <h3>Tô lendo</h3>
          <div className="row">
            <div className="col-md-3">
                <Card title="Titulo 01" 
                image={{src: "http://placekitten.com/200/300", alt: "Its a cat"}} 
                authors={['author01', 'authors02']}
                />
            </div>
            <div className="col-md-3">
                <img src="http://placekitten.com/200/300" alt="It's an cat"/>
                <p>Titulo do livro</p>
                <ul>
                    <li>autor</li>
                    <li>autor</li>
                </ul>
            </div>
            <div className="col-md-3">
                <img src="http://placekitten.com/200/300" alt="It's an cat"/>
                <p>Titulo do livro</p>
                <ul>
                    <li>autor</li>
                    <li>autor</li>
                </ul>
            </div>
          </div>
          <h3>Quero ler</h3>
          <div className="row">
            <div className="col-md-3">
                <img src="http://placekitten.com/200/300" alt="It's an cat"/>
                <p>Titulo do livro</p>
                <ul>
                    <li>autor</li>
                    <li>autor</li>
                </ul>
            </div>
            <div className="col-md-3">
                <img src="http://placekitten.com/200/300" alt="It's an cat"/>
                <p>Titulo do livro</p>
                <ul>
                    <li>autor</li>
                    <li>autor</li>
                </ul>
            </div>
          </div>
          <h3>Já li</h3>
          <div className="row">
            <div className="col-md-3">
                <img src="http://placekitten.com/200/300" alt="It's an cat"/>
                <p>Titulo do livro</p>
                <ul>
                    <li>autor</li>
                    <li>autor</li>
                </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default HomePage;
