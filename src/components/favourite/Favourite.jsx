import React from 'react'
import { loadFavouritePRoduct } from '../../redux/actions/favourite-action'
import { connect } from 'react-redux'
const Favourite = () => {
    return (
        <div>Favourite</div>
    )
}

export default connect(null, { loadFavouritePRoduct })(Favourite)