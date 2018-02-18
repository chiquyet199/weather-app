import React from 'react'
import PropTypes from 'prop-types'
import Post from 'components/Post'

const PostList = props => {
  const { data } = props
  return (
    <div>
      {data.map(item => {
        return <Post key={item.id} title={item.title} />
      })}
    </div>
  )
}

PostList.propTypes = {
  data: PropTypes.array,
}

export default PostList
