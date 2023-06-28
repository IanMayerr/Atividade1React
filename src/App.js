import Footer from "./componets/Footer/Footer";
import Header from "./componets/Header/Header";
import Nav from "./componets/Nav/Nav";
import Home from "./page/Home/Home";
import "./style.css"


function App() {


  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }


  return (

    <body>
      <div class="tela-inteira">

        <Header />  self-close: tag que se abre e fecha no mesmo lugar.

        <main>

          <Nav />

          <Home reproduz={reproduzVideo} />

        </main>

        <Footer />

      </div>
    </body>

  );
}

export default App;