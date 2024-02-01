import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogList} = props
  const {author, avatarUrl, id, imageUrl, title, topic} = blogList
  return (
    <Link to={`/blogs/${id}`}>
      <li className="blogItem-container">
        <img src={imageUrl} alt="" className="imageUrl" />
        <div className="details-container">
          <p className="para1">{topic}</p>
          <p className="para">{title}</p>
          <div className="avatar-container">
            <img src={avatarUrl} alt={avatarUrl} className="avatarUrl" />
            <p className="para1">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
