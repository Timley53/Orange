// import React from 'react'
// import { ResponsivePie } from '@nivo/pie'
// import { PieData } from '../../../resources/Data'


// function ReportPie() {
//   return (
//     <div className= "h-[150px] md:h-[150px] w-[100%]">

//         <MyResponsivePie data={PieData}/>

//     </div>

//     )
// }

// export default ReportPie

// const MyResponsivePie = ({ data /* see data tab */ }) => (
//     <ResponsivePie
//     data={data}
//     margin={{ top: 40, right: 80, bottom: 80, left: 80 }}

//     startAngle={-104}
//     sortByValue={true}
//     innerRadius={0.45}
//     cornerRadius={6}
//     activeOuterRadiusOffset={8}
//     colors={{ scheme: 'nivo' }}
//     borderColor={{
//         from: 'color',
//         modifiers: [
//             [
//                 'darker',
//                 '0.5'
//             ]
//         ]
//     }}
//     arcLinkLabelsSkipAngle={12}
//     arcLinkLabelsTextOffset={7}
//     arcLinkLabelsTextColor="#343232"
//     arcLinkLabelsOffset={-10}
//     arcLinkLabelsDiagonalLength={14}
//     arcLinkLabelsStraightLength={3}
//     arcLinkLabelsThickness={3}
//     arcLinkLabelsColor={{ from: 'color' }}
//     arcLabelsRadiusOffset={0.35}
//     arcLabelsSkipAngle={10}
//     arcLabelsTextColor={{
//         from: 'color',
//         modifiers: [
//             [
//                 'darker',
//                 2
//             ]
//         ]
//     }}
//     defs={[
//         {
//             id: 'dots',
//             type: 'patternDots',
//             background: 'inherit',
//             color: 'rgba(255, 255, 255, 0.3)',
//             size: 4,
//             padding: 1,
//             stagger: true
//         },
//         {
//             id: 'lines',
//             type: 'patternLines',
//             background: 'inherit',
//             color: 'rgba(255, 255, 255, 0.3)',
//             rotation: -45,
//             lineWidth: 6,
//             spacing: 10
//         }
//     ]}
//     fill={[
//         {
//             match: {
//                 id: 'ruby'
//             },
//             id: 'dots'
//         },
//         {
//             match: {
//                 id: 'c'
//             },
//             id: 'dots'
//         },
//         {
//             match: {
//                 id: 'go'
//             },
//             id: 'dots'
//         },
//         {
//             match: {
//                 id: 'python'
//             },
//             id: 'dots'
//         },
//         {
//             match: {
//                 id: 'scala'
//             },
//             id: 'lines'
//         },
//         {
//             match: {
//                 id: 'lisp'
//             },
//             id: 'lines'
//         },
//         {
//             match: {
//                 id: 'elixir'
//             },
//             id: 'lines'
//         },
//         {
//             match: {
//                 id: 'javascript'
//             },
//             id: 'lines'
//         }
//     ]}
//     legends={[]}
// />
// )