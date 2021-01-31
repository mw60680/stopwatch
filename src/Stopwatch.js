import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faRedo } from '@fortawesome/free-solid-svg-icons';

const Stopwatch = ({ heading }) => {
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
        !startTime && setStartTime(Date.now());
    }

    const stopTimer = () => {
        setRunning(false);
    }

    const resetTimer = () => {
        setTime({hrs: 0, min: 0, sec: 0, ms: 0})
        setStartTime();
    }

    const start = () => <FontAwesomeIcon icon={faPlay} onClick={startTimer} size={'2x'}/>

    const stop = () => <FontAwesomeIcon icon={faStop} onClick={stopTimer} size={'2x'}/>

    const reset = () => <FontAwesomeIcon icon={faRedo} onClick={resetTimer} size={'2x'}/>
    
    const timer = () => {
        return (
            <Fragment>
                <div className='heading'>
                    <h1>{ heading }</h1>
                </div>
                <div className='timer'>
                    <span className='timer-values'>{time.hrs}</span>
                    <span className='timer-values'> : </span>
                    <span className='timer-values'>{time.min}</span>
                    <span className='timer-values'> : </span>
                    <span className='timer-values'>{time.sec}</span>
                    <span className='timer-values'> : </span>
                    <span className='timer-values'>{time.ms}</span>
                </div>
                <div className='timer-controls'>
                    {start()}
                    {stop()}
                    {reset()}
                </div>
            </Fragment>
        );
    }

    return timer();
}

Stopwatch.propTypes = {
    /**
     * Heading for the component - Timer heading
     */
    heading: PropTypes.string,
}

Stopwatch.defaultProps = {
    heading: 'Stopwatch Timer'
}

export default Stopwatch
