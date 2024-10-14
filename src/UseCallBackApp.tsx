import React, {memo, useCallback, useState} from 'react';
import './App.css';

const Component1 = memo((props: { count: number }) => {
    console.log('Component1');

    return (
        <div>

        </div>
    );
});

const Component2 = memo((props: { counter2: number, addCounter: () => void }) => {
    console.log('Component2');

    return (
        <button onClick={() => props.addCounter()}>COUNTER2</button>
    );
});

function UseCallBackApp() {
    //useCallback -он не нужен в дочерней компоненте, т.к. страхует memo
    //использовать нужно в родительской компоненте
    //При каждом рендере компонента создается новое лексическое окружение,
    // и это приводит к тому, что функции, объявленные внутри компонента, получают новую ссылку.
    //Т.е. просит ее запомнить.

    const myStyles: { [key: string]: string } = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column'
    };
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const addCounter = useCallback(() => {
        setCounter2(counter2+1)
    }, [counter2])

    // const addCounter =() => {
    //     setCounter2(counter2+1)
    // }


    return (
        <div style={myStyles}>
            <div>Component1 : {counter}</div>
            <div>Component2 : {counter2}</div>
            <button onClick={() => setCounter(counter+1)}>COUNTER</button>
            <Component1 count={counter}/>
            <Component2 counter2={counter2} addCounter={addCounter}/>
        </div>
    );
}

export default UseCallBackApp;

