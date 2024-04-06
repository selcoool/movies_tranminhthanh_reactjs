import React, { useEffect, useState } from 'react'
import {Bar, Line,Pie} from "react-chartjs-2"
import {Chart } from "chart.js/auto"

function ManagementGeneral({listUsers}) {
  const Data_GET = [
    {
      id: 1,
      year: 2018,
      userGain: 7888,
      userLost: 555,
    },
    {
      id: 2,
      year: 2019,
      userGain: 7999,
      userLost: 5444,
    },
    {
      id: 3,
      year: 2020,
      userGain: 797,
      userLost: 5444,
    },
    {
      id: 4,
      year: 2021,
      userGain: 700,
      userLost: 5454,
    },
  ];

  const [getData, setGetData] = useState({
    labels: Data_GET.map((data) => data.year),
    datasets: [
      {
        label: 'User Gained',
        data: Data_GET.map((data) => data.userGain),
        backgroundColor:[
          'blue',
          'green',
          'yellow',
          'pink'
        ]
       
      },
    ],
  });

  useEffect(() => {
    const handleResize = () => {
      setGetData({
        ...getData,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [getData]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className='flex flex-col justify-center items-center mx-10'>
      <h1 className='text-4xl text-center text-cyan-500 py-4'>Thống Kê Chi Tiết</h1>

     <div className='w-full flex flex-col lg:flex-row gap-4 justify-center items-center'>
      <div className='lg:w-2/6 w-full '>
      <Bar data={getData} options={options} />
      </div>

      <div className='lg:w-2/6 w-full'>
      <Line data={getData} options={options} />
      </div>

      <div className='lg:w-2/6 w-full'>
      <Pie data={getData} options={options} />
      </div>
      </div>
     
      
    </div>

  );
}


export default ManagementGeneral
