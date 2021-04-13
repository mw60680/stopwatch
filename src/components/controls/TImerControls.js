import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faRedo, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import wrapper from '../Wrapper'

const start = (control, display) => wrapper(<FontAwesomeIcon icon={faPlay} onClick={control} size={'2x'} />, display);

const stop = (control, display) => wrapper(<FontAwesomeIcon icon={faStop} onClick={control} size={'2x'} />, display);

const reset = (control, display) => wrapper(<FontAwesomeIcon icon={faRedo} onClick={control} size={'2x'} />, display);

const lap = (control, display) => wrapper(<FontAwesomeIcon icon={faSyncAlt} onClick={control} size={'2x'} />, display);

export {
    start,
    stop,
    reset,
    lap
};
