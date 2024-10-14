import React, {useEffect, useState} from 'react';
import './App.css';



function UseEffectApp() {
    const myStyles: { [key: string]: string } = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column'
    };

    const [count, setCount] = useState(0)

    // useEffect -запускается один раз и запускает setInterval
    // setInterval работает без перерыва-он запомнил свое лекс.окружение=0 и добавлет к нему 1
    // каждый раз сетает 1 -т.е. каунтер не растет.
    // useEffect(() => {
    //     setInterval(() => {
    //         console.log('count: ',count)
    //         setCount(count + 1)
    //         //а вот так будет рости каунт в отрисовке, но в консоли будет все равно 0
    //         //setCount(prevState => prevState + 1);
    //     }, 1000)
    //
    // }, []);

    // useEffect -запускается первый раз и запускает setInterval
    // мы сетаем count и useEffect опять срабатывает и в его лекс. окружение
    // попадает свежий count
    // useEffect(() => {
    //     setInterval(() => {
    //         console.log('hello')
    //         setCount(count+1)
    //     }, 1000)
    //
    // }, [count]);

    // будет размонтирован, когда перешли на другую страницу, и текущий компонент больше не нужен
    // в той же вкладке, в том же ЛокалХосте (в одном и том де приложении)

    useEffect(() => {
      const int= setInterval(() => {
          console.log('tic')
            setCount(prevCount => prevCount + 1)
        }, 1000)
        // return()=>{
        //    clearInterval(int)
        // }

    }, []);

    return (
        <div style={myStyles}>
            <div>{count}</div>
        </div>
    );
}

export default UseEffectApp;

