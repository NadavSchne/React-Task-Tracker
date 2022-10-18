import React from "react";
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onAdd,showAdd}) => {



    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close New Tasks Form' : 'Open New Tasks Form'}
            onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


// CSS IN JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }
export default Header