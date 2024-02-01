import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}}

  componentDidMount() {
    this.getBlogListDetails()
  }

  getBlogListDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }

    this.setState({blogDetails: updatedData})
  }

  render() {
    const {blogDetails} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogDetails

    console.log(blogDetails)
    return (
      <div className="blogDetails-container">
        <h1 className="title">{title}</h1>
        <div className="avatarUrl-container">
          <img src={avatarUrl} alt={author} className="avatarUrl" />
          <p>{author}</p>
        </div>
        <img src={imageUrl} className="imageUrl-container" alt={author} />
        <p>{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
