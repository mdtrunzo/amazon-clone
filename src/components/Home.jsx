import Product from "./Product"

function Home() {
  return (
    <div className="home">
        <img 
        className="home-image"
        src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/magellan/country/spain/EvergreenRefresh/fromDec19/ES_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363.jpg" 
        alt="Home Banner" />

      <div className="home-row">
        <Product
         id="123445"
         title="Funko Pop Back To The Future"
         price={9.99}
         rating={5}
         image="https://http2.mlstatic.com/D_NQ_NP_723955-MLA44250790198_122020-O.jpg"
         />
          <Product 
         id="5354389"
         title="AirPods de Apple con funda de carga (cableado)."
         price={299.99}
         rating={5}
         image="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SX679_.jpg"
         />
      </div>
      <div className="home-row">
        <Product 
         id="5329203"
         title="Pintola All Natural Peanut Butter (Crunchy) (2.5 kg) (Unsweetened, Non-GMO, Gluten Free, Vegan)"
         price={799}
         rating={3}
         image="https://images-na.ssl-images-amazon.com/images/I/81ghNg%2BDC9L._SL1500_.jpg"
         />
          <Product 
         id="354647"
         title="Learning React: Functional Web Development with React and Redux Paperback – 1e"
         price={29.99}
         rating={5}
         image="https://images-na.ssl-images-amazon.com/images/I/51imLrht6lL._SX389_BO1,204,203,200_.jpg"
         />
         <Product 
         id="398290"
         title="Awestuffs LED Lights for Home Decoration (20 LED Photo Clip 3 Metre String (Warm White))"
         price={129.80}
         rating={4}
         image="https://images-na.ssl-images-amazon.com/images/I/41EsI0Fsf1L.jpg"
         />
      </div>
      <div className="home-row">
         <Product 
         id="123445"
         title="Sceptre E205W-16003R - Monitor LED ultradelgado sin marco, con HDMI, VGA, altavoces integrados, color negro metálico 2018"
         price={139.99}
         rating={5}
         image="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX679_.jpg"
         />
      </div>
    </div>
  )
}

export default Home