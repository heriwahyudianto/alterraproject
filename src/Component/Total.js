import '../App.css';
import { useEffect, useState } from "react";

function Total(props) {  
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
