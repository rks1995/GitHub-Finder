import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layoout/Spinner'
import PropTypes from 'prop-types'


function Users({ data, loading }) {
    return (loading ? <Spinner /> :
        <div style={customStyle} >
                {(data !== undefined) && data.map(user => {
                    return <UserItem key={user.id} user={user} />;
                })} 
        </div >)

}

Users.propTypes = {
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const customStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users