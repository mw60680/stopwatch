import React from 'react'
import PropTypes from 'prop-types'

const Nav = props => {
    return (
        <header>
            <div onClick={(e) => props.onSelect('stopwatch')} name={'stopwatch'}>
                Stopwatch
            </div>
            <div onClick={(e) => props.onSelect('countdown')} name={'countdown'}>
                Countdown
            </div>
        </header>
    )
}

Nav.propTypes = {
    onSelect: PropTypes.func.isRequired,
}

export default Nav
