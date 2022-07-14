import './App.css';
import { useEffect, useState } from "react";
import { VictoryPie, VictoryLabel, VictoryAnimation, VictoryLegend } from "victory";
import Footer from './Component/Footer';
import Total from './Component/Total';
import { useDispatch, useSelector } from 'react-redux'
import {add, decrease, fromBackend, fetchLeads} from './features/leads/leadSlice'

function App() {
  const dispatch = useDispatch();
  const leads = useSelector(state => state.leads);
  console.log(leads)
  const leadsStatus = useSelector(state => state.leads.status)
  console.log('leadsStatus = ', leadsStatus)
  const getData = (percent) => {
    return [
      { x: 1, y: 100 - percent },
      { x: 2, y: percent }
    ];
  };

  const [graph, setGraph] = useState({
    percent: 0,
    data: getData(0)
  });
  
  useEffect(() => {
    if (leadsStatus === 'idle') {
      console.log('diaktif')
      dispatch(fetchLeads())
    }
  }, [leadsStatus, dispatch]);

   return (
    <div className="App">
      {leadsStatus === 'fulfilled' ? (
        <>        
        <div className='txtCenter mt1rem bold'>TOTAL LEADS WHO HAVE PURCHASED</div>      
        <div className='pieCnt'>
          <svg viewBox="0 0 400 400" width="100%" height="100%">
            <circle cx={200} cy={200} r={100} fill="#f4f4f4" />
            <text cx={200} cy={200} r={100}></text>
            <VictoryPie
              standalone={false}
              animate={{ duration: 500 }}
              width={400}
              height={400}
              data={getData(leads.percentage)}
              innerRadius={120}
              cornerRadius={25}
              labels={() => null}
              startAngle={135}
              endAngle={-135}
              style={{
                data: {
                  fill: ({ datum }) => {
                    return datum.x === 1 ? "#f4f4f4" : datum.y < 50 ? '#ED1E21' : datum.y < 99 ? "#348cf7" :  "#5ED327";
                  }
                }
              }}
            />
            <VictoryAnimation duration={500} data={{
    percent: 10,
    data: getData(10)
  }}>
              {(newProps) => {
                return (
                  <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={200}
                    y={200}
                    text={`${Math.round(leads.percentage)}%`}
                    style={{ fontSize: 45, fontWeight: "bold" }}
                  />
                );
              }}
            </VictoryAnimation>
          </svg>  
          <div className='ketPersenCnt'>
            <div>0%</div>
            <div>100%</div>
          </div>    
        </div>
        <div className='totalCnt'>
          <Total title="TOTAL CREATED LEADS" total={leads.totalCreatedLeads} />
          <div className='leftBorder'></div>
          <Total title="TOTAL PURCHASED LEADS" total={leads.totalPurchasedLeads} />
        </div>
        <Footer
          onClick={() => dispatch(add({
            totalCreatedLeads: 100,
            totalPurchasedLeads: 90,
            percentage:90
          }))}
        />
        </>)
      : <div className='bgLightGray p1rem  txtCenter bold'>{leads.status}</div> 
      }
    </div>
  );
}

export default App;