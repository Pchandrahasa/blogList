import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogItem()
  }

  getBlogItem = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(i => ({
      author: i.author,
      avatarUrl: i.avatar_url,
      id: i.id,
      imageUrl: i.image_url,
      title: i.title,
      topic: i.topic,
    }))
    this.setState({blogList: updatedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state

    return (
      <ul className="bloglist-ul">
        {isLoading ? (
          <Loader
            type="TailSpin"
            color="#00BFFF"
            className="TailSpin"
            height={50}
            width={50}
          />
        ) : (
          blogList.map(i => <BlogItem blogList={i} key={i.id} />)
        )}
      </ul>
    )
  }
}

export default BlogList
