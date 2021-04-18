import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layoout/Spinner'
import GithubContext from '../../context/github/GithubContext'


function Users() {
    const githubContext = useContext(GithubContext)

    const { loading, users } = githubContext;

    return (loading ? <Spinner /> :
        <div style={customStyle} >
            {(users !== undefined) && users.map(user => {
                return <UserItem key={user.id} user={user} />;
            })}
        </div >)

}

const customStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users