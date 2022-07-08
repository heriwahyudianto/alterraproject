import '../App.css';
import { useSelector } from 'react-redux'

function Total(props) {  
  const leads = useSelector(state => state.leads);
  return (
    <div className='w50Cent txtCenter'>
      <div className=' bold colorGray'>
        {props.title}
      </div>
      <div className=' h2'>
        {props.total}
      </div>
    </div>
  );
}

export default Total;
