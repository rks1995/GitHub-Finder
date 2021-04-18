import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/alertContext'


const Search = () => {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)
    const [text, setText] = useState('')

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('please enter something', 'light')
        } else {
            githubContext.searchUsers(text)
            setText('');
        }

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="text" name='text' placeholder='Search Users..' value={text} />
                <input type="submit" className="btn btn-dark btn-block" />
            </form>
            {githubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}

        </div>
    )
}

export default Search;