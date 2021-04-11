import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faRedo, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const Stopwatch = ({ heading }) => {
    /**
     * States used in the function
     */
    const [running, setRunning] = useState(false);
    const [startTime, setStartTime] = useState();
    const [time, setTime] = useState({
        hrs: 0,
        min: 0,
        sec: 0,
        ms: 0
    });
    const [buttonDisplay, setButtonDisplay] = useState({
        start: 'block',
        stop: 'none',
        reset: 'none',
        lap: 'none'
    });
    const [laps, setLaps] = useState([]);
    // end of states

    /**
     * Stopwatch control functions
     */
    const startTimer = () => {
        setRunning(true);
        !startTime && setStartTime(Date.now());
        setButtonDisplay({start: 'none', stop: 'block', reset: 'none', lap: 'block'});
    }

    const stopTimer = () => {
        setRunning(false);
        setButtonDisplay({start: 'block', stop: 'none', reset: 'block', lap: 'none'});
    }

    const resetTimer = () => {
        setTime({hrs: 0, min: 0, sec: 0, ms: 0})
        setStartTime();
        setButtonDisplay({start: 'block', stop: 'none', reset: 'none', lap: 'none'});
    }

    const lapTimer = () => {
        setLaps(laps => [...laps, time]);
    }
    // End of stopwatch control functions

    // Component render functions
    const wrapper = (item, display) => <div style={{display}}>{item}</div>;

    const start = () => wrapper(<FontAwesomeIcon icon={faPlay} onClick={startTimer} size={'2x'} />, buttonDisplay.start);

    const stop = () => wrapper(<FontAwesomeIcon icon={faStop} onClick={stopTimer} size={'2x'} />, buttonDisplay.stop);

    const reset = () => wrapper(<FontAwesomeIcon icon={faRedo} onClick={resetTimer} size={'2x'} />, buttonDisplay.reset);

    const lap = () => wrapper(<FontAwesomeIcon icon={faSyncAlt} onClick={lapTimer} size={'2x'} />, buttonDisplay.lap);

    const lapTimes = () => {
        return (
            <div className='lap-times'>
                {
                    laps.map((item, index) => {
                        return (<div key={index}>{index}. {item.hrs}:{item.min}:{item.sec}:{item.ms}</div>)
                    })
                }
            </div>
        );
    };
    // End of component rendering

    /**
     * Convert system time to object {hrs, min, sec, ms}
     */
    const parseTime = () => {
        const now = Date.now();
        const diff = now - startTime;

        const ms = diff % 1000;
        const sec = Math.floor((diff/1000)%60);
        const min = Math.floor(((diff/1000)/60)%60);
        const hrs = Math.floor(((diff/1000)/60)/60);

        return {hrs, min, sec, ms};
    }

    /**
     * update time to be displayed
     */
    const updateTime = () => {
        setTimeout(setTime(parseTime()), 10);
    }

    /**
     * create repeat rendering to update timer on screen
     * Dependency array - time state and timer running flag
     */
    useEffect(() => {
        running && updateTime();
    }, [time, running]);
    
    // main export function
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
                    {lap()}
                </div>
                {laps.length > 0 && lapTimes()}
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
};

Stopwatch.defaultProps = {
    heading: 'Stopwatch Timer'
};

export default Stopwatch;
