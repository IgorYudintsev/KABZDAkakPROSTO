import React, {memo, useState} from 'react';
import './App.css';


const Component1=(props:{count:number})=>{
    console.log('Component1')
    return(
        <div>Component1{props.count}</div>
    )
}

// const Component2=(props:{count:number})=>{
//     console.log('Component2')
//     return(
//         <div>Component2{props.count}</div>
//     )
// }

const Component2= memo((props:{count:number})=>{
    console.log('Component2')
    return(
        <div>Component2{props.count}</div>
    )
})

function MemoApp() {
    //проблема в том, что нажатие на любой из каунтеров приводит к перерисовки обоих
    //даже того, в котором ничего не поменялось. Значит задача-мемоизировать его.
    //обворачиваем Component2 в memo(), и теперь когда я буду нажимать counter1 в counter2
    //в котором нет изменений-не будет изменеий

    const myStyles: { [key: string]: string } = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column'
    };
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(10);

    return (
        <div style={myStyles}>

            <button onClick={() => setCounter1(counter1 + 1)}>COUNTER</button>
            <button onClick={() => setCounter2(counter2 + 1)}>COUNTER2</button>

            <Component1 count={counter1}/>
            <Component2 count={counter2}/>
        </div>
    );
}

export default MemoApp;


