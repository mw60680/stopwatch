import React, { Fragment, useEffect, useState } from 'react'

const Stopwatch = () => {
    const [running, setRunning] = useState(false);

    const [startTime, setStartTime] = useState();

    const [time, setTime] = useState({
        hrs: 0,
        min: 0,
        sec: 0,
        ms: 0
    });

    const parseTime = () => {
        const now = Date.now();
        const diff = now - startTime;

        const ms = diff % 1000;
        const sec = Math.floor((diff/1000)%60);
        const min = Math.floor(((diff/1000)/60)%60);
        const hrs = Math.floor(((diff/1000)/60)/60);

        return {hrs, min, sec, ms};
    }

    useEffect(() => {
        running && setTimeout(setTime(parseTime()), 10);
    }, [time, running])

    const startTimer = () => {
        setRunning(true);
        setStartTime(Date.now());
    }

    const stopTimer = () => {
        setRunning(false);
    }

    const resetTimer = () => {
        setTime({hrs: 0, min: 0, sec: 0, ms: 0})
    }

    const start = () => {
        return (
            <button onClick={startTimer}>Start Timer</button>
        )
    }

    const stop = () => {
        return (
            <button onClick={stopTimer}>Stop Timer</button>
        )
    }

    const reset = () => {
        return (
            <button onClick={resetTimer}>Reset</button>
        )
    }
    
    const timer = () => {
        return (
            <Fragment>
                <div>Timer</div>
                <div className='timer'>
                    <span>{time.hrs}</span>:
                    <span>{time.min}</span>:
                    <span>{time.sec}</span>:
                    <span>{time.ms}</span>
                </div>
                {start()}
                {stop()}
                {reset()}
            </Fragment>
        );
    }

    return timer();
}

export default Stopwatch
