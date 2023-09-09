import './country.css'

const country = ({country}) => {
const {name} = country;
  return (
    <div className='country'>
      <h3>Name:{name.common}</h3>
    </div>
  );
};

export default country;