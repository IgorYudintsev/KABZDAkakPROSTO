import * as React from 'react';
import { useEffect, useState } from "react";

const myStyles: { [key: string]: string } = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column'
};
export const ClockApp = () => {
    const [date, setDate] = useState(new Date());
    const [intervalId, setIntervalId] = useState<any>(null);
    const[refresh,setRefresh]=useState(false)

    useEffect(() => {
        const id = setInterval(() => {
            setDate(new Date());
        }, 1000);
        setIntervalId(id);

        return () => {
            clearInterval(id);
        };
    }, [refresh]);

    const h = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();



    return (
        <div style={myStyles}>
            <div>
                <span>{h}:</span>
                <span>{min}:</span>
                <span>{sec}</span>
                <button onClick={()=> clearInterval(intervalId)}>STOP</button>
                <button onClick={()=> setRefresh(!refresh)}>REFRESH</button>
            </div>

        </div>
    );
};

