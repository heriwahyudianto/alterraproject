import '../App.css';
import { useEffect, useState } from "react";

function Footer(props) {  
  return (
    <div className='bgLightGray p1rem mt2rem paginationTitle'><span className='h2 colorRed'>
      {props.persen < 100 
        ? props.totalCreatedLeads - props.totalPurchasedLeads
        : '0'
      }
      </span> Leads pending purchase
    </div>
  );
}

export default Footer;
