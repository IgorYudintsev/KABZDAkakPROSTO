import React, { useMemo, useState} from 'react';
import './App.css';


const Component1=(props:{count:number})=>{
    console.log('Component1')
    return(
        <div>Component 1 : {props.count}</div>
    )
}

const Component2 = (props: { count: number }) => {
    console.log('Component2')
    const fact = (n: number): number => {
        if (n === 1) return 1
        return fact(n - 1) * n + (fact(n - 1))
    }

   // const res = fact(props.count * 2)

    const res = useMemo(() => {
        return fact(props.count * 2)
    }, [props.count])

    return (
        <div>Component 2 : {res}</div>
    );
}

function UseMemoApp() {
    // useMemo не заменяет Memo, он будет запускать не нужную неотрисуемую компоненту-Component2
    // но при ее отрисовке, если в нее не будут приходить новые пропсы, то внутри не будут
    // запускаться вычисления
    // Т.е запускается, консолится, но вычисления не производит.


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
            <button onClick={() => setCounter2(counter2 + 1)}>COUNTER</button>
            <Component1 count={counter1}/>
            <Component2 count={counter2}/>
        </div>
    );
}

export default UseMemoApp;


