import './country.css'

const country = ({country}) => {
const {name,flags} = country;
  return (
    <div className='country'>
      <h3>Name:{name.common}</h3>
      <img src={flags.png}/>
    </div>
  );
};

export default country;