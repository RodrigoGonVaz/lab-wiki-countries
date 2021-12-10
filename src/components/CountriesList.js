import { Link, Outlet } from "react-router-dom"




const CountriesList = (props) => {

    console.log(props) // {allCountries: Array(250)}- objeto con 1 propiedad allCountries
    const {allCountries} = props // dame solo el valor del objeto 
    //El .map sirve para recorrer un arreglo y te devuelve uno nuevo 
    //con el mismo largo que el original y tu puedes modificar los datos que quieres mostrar
    // key={index} dale un identificador unico al elemento mas PADRE que nos permite darle el metodo como el link
    return (
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: '90vh', overflow: 'scroll' }}
            >
              <div className="list-group">
                {allCountries.map((elemento, i) => {
                  return (
                    <Link
                      key={i}
                      className="list-group-item list-group-item-action"
                      to={`/countries/${elemento.cca3}`}
                    >
                      {`${elemento.flag} ${elemento.name.common}`}
                    </Link>
                  );
                })}
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      );
    };
    
    export default CountriesList;