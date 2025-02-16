import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title , description , imgurl , newsUrl , author, date }= this.props
    let formattedDate = date ? new Date(date).toGMTString() : "Unknown date";


    
    return (
      <div className='my-3'>
        <div className="card" >
  <img className="card-img-top" src={imgurl} alt="Card img cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small class="text-muted">By{!author? " unknown " :author} on {formattedDate} </small></p>
    <a href={newsUrl} target = "blank" class="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem