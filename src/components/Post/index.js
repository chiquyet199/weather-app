import React from 'react'
import PropTypes from 'prop-types'

const Post = props => {
  const { title } = props
  return (
    <div>
      <h3>{title}</h3>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string,
}

export default Post
