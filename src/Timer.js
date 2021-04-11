import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faRedo, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { start, stop } from './Controls'
import wrapper from './Wrapper'

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

    const inputTime = () => {
        return (
            <div className='timer'>
                <form>
                    <input type='number' name='hrs' placeholder='Hrs' value={time.hrs} disabled={running} onChange={onChange} />
                    <input type='number' name='mins' placeholder='Mins' value={time.mins} disabled={running} onChange={onChange} />
                    <input type='number' name='secs' placeholder='Secs' value={time.secs} disabled={running} onChange={onChange} />
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
            setInitialTime(((time.hrs * 60 * 60) + (time.mins * 60) + (time.secs)));
            setRunning(true);
            !startTime && setStartTime(Date.now());
            setButtonDisplay({start: 'none', stop: 'block', reset: 'none'});
        }
    }

    const stopTimer = () => {
        setRunning(false);
        setStartTime();
        setButtonDisplay({start: 'block', stop: 'none', reset: 'block'});
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
            hrs: Math.floor((currentTime/60)/60/60),
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
