import { Formik, Form, Field } from "formik";
import "./header.css";
import "./content.css";
import { useState } from "react";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const open = url => window.open(url)
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            //Lllamada a API de unsplash
            const response = await fetch(
              // Segun la documentacion este el endpoint al que hay que mandar la solicitud de busqueda
              `https://api.unsplash.com/search/photos?page=1&query=${values.search}`,
              {
                // Objeto de configuracion para la API
                headers: {
                  Authorization:
                    "Client-ID geDtFxILV2XFkurPBso4vFgdEbmMh8k4CZtOtrOaOcs",
                },
              }
            );
            const data = await response.json();
            console.log(data)
            setPhotos(data.results);
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
      <div className="container">
        <div className="center">      
          {photos.map(photo => 
            <article key={photo.id} onClick={()=> open(photo.links.html)}>
              <img src={photo.urls.regular} alt={photo.alt_description}/>
              <p>{photo.description === null ?  photo.alt_description : photo.description}</p>
            </article>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
