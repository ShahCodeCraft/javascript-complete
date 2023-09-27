// import React,{useState} from 'react';

// const DigitalClock = () =>{

//     let time = new Date().toLocaleTimeString();
//     let date = new Date().toLocaleDateString();
    
//     const [ctime,setCtime] = useState(time);

//     const UpdateTime = () =>{
//         time = new Date().toLocaleTimeString();
//         setCtime(time);
//         setInterval(UpdateTime,1000);
//     }
//     return(
//         <>
//         <h1>Digital Clock</h1>
//         <h1>Time : {ctime}</h1>
//         <h1>Date : {date}</h1>
//         <button onClick={UpdateTime}>Get time</button>
//         </>
//     )
// }
// export default DigitalClock;







import React,{useState} from 'react';

const Demo  = () =>{
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();

    const datetime = new Date().toLocaleString();
const [ctime,setCtime] = useState('');
    const updateTime = () =>{
        setCtime(time);
        setInterval(updateTime,1000);
    }
    return(
        <>
        <h1>Digital Watch</h1>
        <h1>Time : {time} </h1>
        <h3>Date : {date} </h3>
        <h4>Date & Time : {datetime}</h4>
        <button onClick={updateTime}>Get Updated Time</button>
        </>
    )
}
export default Demo;