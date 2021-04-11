import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { reset, start, stop } from './Controls'

const Timer = ({heading}) => {
    const [startTime, setStartTime] = useState();
    const [time, setTime] = useState({
        hrs: 0,
        mins: 0,
        secs: 0
    });
    const [initialTime, setInitialTime] = useState();
    const [runningTime, setRunningTime] = useState(time);
    const [running, setRunning] = useState(false);
    const [freezeInput, setFreezeInput] = useState(false);
    const [buttonDisplay, setButtonDisplay] = useState({
        start: 'block',
        stop: 'none',
        reset: 'none',
    });

    const onChange = (event) => {
        const target = event.target.name
        const newTime = {
            ...time
        }
        newTime[event.target.name] = parseInt(event.target.value);
        setTime(newTime)
    }

    const renderInputField = (name, placeholder, value) => {
        return <input type='number' name={name} placeholder={placeholder} value={value} disabled={freezeInput} onChange={onChange} />
    }

    const inputTime = () => {
        return (
            <div className='timer'>
                <form>
                    {renderInputField('hrs', 'Hours', time.hrs)}
                    {renderInputField('mins', 'Minutes', time.mins)}
                    {renderInputField('secs', 'Seconds', time.secs)}
                </form>
            </div>
        );
    };

    const checkValidTime = () => {
        if(time.hrs < 1 && time.mins < 1 && time.secs < 1) {
            return false;
        }
        return true;
    }

    const startTimer = () => {
        if(checkValidTime()) {
            setFreezeInput(true);
            setInitialTime(((time.hrs * 60 * 60) + (time.mins * 60) + (time.secs)));
            setRunning(true);
            !startTime && setStartTime(Date.now());
            setButtonDisplay({start: 'none', stop: 'block', reset: 'block'});
        }
    }

    const stopTimer = () => {
        setRunning(false);
        setStartTime();
        setButtonDisplay({start: 'block', stop: 'none', reset: 'block'});
    }

    const resetTimer = () => {
        setFreezeInput(false);
        stopTimer();
        setButtonDisplay({start: 'block', stop: 'none', reset: 'none'});
        setTime({
            hrs: 0,
            mins: 0,
            secs: 0
        });
    }

    /**
     * Convert system time to object {hrs, min, sec, ms}
     */
    const parseTime = () => {
        const now = Date.now();
        const diff = now - startTime;

        const sec = Math.floor((diff/1000)%60);
        const min = Math.floor(((diff/1000)/60)%60);
        const hrs = Math.floor(((diff/1000)/60)/60);

        const lapsedTime = (hrs * 60 * 60) + (min * 60) + sec;

        const currentTime = initialTime - lapsedTime;

        const newTime = {
            hrs: Math.floor((currentTime/60)/60),
            mins: Math.floor((currentTime/60) % 60),
            secs: currentTime % 60
        }

        return newTime;
    }

    /**
     * update time to be displayed
     */
    const updateTime = () => {
        if (time.hrs === 0 && time.mins === 0 && time.secs === 0) {
            stopTimer();
        }
        setTimeout(() => {
            setTime(parseTime());
        }, 10);
    }

    useEffect(() => {
        setRunningTime(time);
    }, [time])

    useEffect(() => {
        running && updateTime();
    }, [running, runningTime]);

    return (
        <div>
            {heading}
            {inputTime()}
            <div className='timer-controls'>
                {start(startTimer, buttonDisplay.start)}
                {stop(stopTimer, buttonDisplay.stop)}
                {reset(resetTimer, buttonDisplay.reset)}
            </div>
        </div>
    )
}

Timer.propTypes = {
    /**
     * Heading for the component
     */
    heading: PropTypes.string,
};

Timer.defaultProps = {
    heading: 'Countdown'
};

export default Timer;
