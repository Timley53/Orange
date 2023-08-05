import React from 'react'
import {VictoryPie, VictoryLabel} from 'victory'
import {VictoryPieProps} from 'victory'



function ChartTest({ChartData, sumTotal}){


console.log(ChartData)

      return (
        <div className=" h-[auto] md:h-[auto] ">
            
        <svg viewBox="0 0 400 400" className=' h-auto w-[100%]'>
          <VictoryPie
            standalone={false}
         

            width={400} height={250}
            colorScale={["tomato", "orange", "gold", "cyan", "navy" ]} 
            data=
            
            {
              
              ChartData
          //     [
          //     { x: 1, y: 120 }, { x: 2, y: 150 }, { x: 'food', y: 55 }, { x: 4, y: 20 },{ x: 5, y: 10 }
            
          // ]
        
        }
            innerRadius={48} labelRadius={80}
            style={{ labels: { fontSize: 16, fill: "black" } }}
          />
          <VictoryLabel
            textAnchor="middle"
            style={{ fontSize: 20 }}
            x={200} y={120}
            text={`${sumTotal}`}
          />


         
        </svg>


        
        </div>
      );
    
  }

  export default ChartTest