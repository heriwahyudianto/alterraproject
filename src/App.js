import './App.css';
import { useEffect, useState } from "react";
import { VictoryPie, VictoryLabel, VictoryAnimation, VictoryLegend } from "victory";
import Footer from './Component/Footer';
import Total from './Component/Total';

function App() {
  const getData = (percent) => {
    return [
      { x: 1, y: 100 - percent },
      { x: 2, y: percent }
    ];
  };

  const [state, setState] = useState({
    percent: 0,
    data: getData(0)
  });
  const [persen,setPersen] = useState(0)
  const [totalCreatedLeads, setTotalCreatedLeads] = useState(100)
  const [totalPurchasedLeads, setTotalPurchasedLeads] = useState(80)
  const [errMsg, setErrMsg] = useState(null)
  
  const getBackendData = async () => {
    //let result = await response.json()
    let result = {
      success: true,
      message: 'Database connection lost',
      data: {
        total_created_leads: 100,
        total_purchased_leads: 20,
        percentage:20
      }
    }
    if (result.success) {  
      setTotalCreatedLeads(result.data.total_created_leads)
      setTotalPurchasedLeads(result.data.total_purchased_leads)
      setPersen(result.data.percentage)
      setState({
        percent: result.data.percentage,
        data: getData(result.data.percentage)
      }); 
    } else {
      setErrMsg(result.message)
    }
  }

  useEffect(() => {
    getBackendData()
  }, []);

   return (
    <div className="App">
      {errMsg === null ? (
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
              data={state.data}
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
            <VictoryAnimation duration={500} data={state}>
              {(newProps) => {
                return (
                  <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={200}
                    y={200}
                    text={`${Math.round(newProps.percent)}%`}
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
          <Total title="TOTAL CREATED LEADS" total={totalCreatedLeads} />
          <div className='leftBorder'></div>
          <Total title="TOTAL PURCHASED LEADS" total={totalPurchasedLeads} />
        </div>
        <Footer persen={persen} totalCreatedLeads={totalCreatedLeads} totalPurchasedLeads={totalPurchasedLeads} />
        </>)
      : <div className='bgLightGray p1rem  txtCenter bold'>{errMsg}</div> 
      }
    </div>
  );
}

export default App;