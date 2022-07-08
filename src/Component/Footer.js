import '../App.css';
import { useDispatch, useSelector } from 'react-redux'
import {add, decrease, fromBackend} from '../features/leads/leadSlice'

function Footer(props) {    
  const leads = useSelector(state => state.leads);
  console.log('Footer leads data', leads)
  const dispatch = useDispatch();
  return (
    <div className='bgLightGray p1rem mt2rem paginationTitle'
      onClick={() => dispatch(add({
        totalCreatedLeads: 100,
        totalPurchasedLeads: 90,
        percentage:90
      }))}
    >
      <span className='h2 colorRed'>
      {leads.percentage < 100 
        ? leads.totalCreatedLeads -leads.totalPurchasedLeads
        : '0'
      }
      </span> Leads pending purchase
    </div>
  );
}

export default Footer;
