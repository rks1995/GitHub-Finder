import React, { useState } from 'react'
import PropTypes from 'prop-types'


const Search = ({ searchUsers, clearUsers, showClear, setAlert }) => {
    const [text, setText] = useState('')

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        if (text === '') {
            setAlert('please enter something', 'light')
        } else {
            searchUsers(text)
            setText('');
        }

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="text" name='text' placeholder='Search Users..' value={text} />
                <input type="submit" className="btn btn-dark btn-block" />
            </form>
            {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}

        </div>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export default Search;