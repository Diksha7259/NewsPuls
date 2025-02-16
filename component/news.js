
import React, { Component } from 'react'
import NewsItem from './newsitem'
import PropTypes from 'prop-types';

export class News extends Component {

    // Default Props for the component
    static defaultProps = {
        country: 'us',  // Set a default country that works like 'us'
        pageSize: 9,    // Default page size
        category: 'general'  // Default category
    }

    // PropTypes for type checking
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    // State initialization
    constructor(props) {
        super(props);
        console.log("Constructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1,  // Start from page 1
            totalResults: 0 // To store the total number of results
        }
    }

    // Function to fetch news data from API
    async fetchNews() {
      this.props.setProgress(0);
        const { country, category, pageSize } = this.props;  // Get values from props
        const { page } = this.state;  // Get the current page from state

        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=ccbf5f6faaea4ff5855da792e151b82e&page=${page+1}&pageSize=${pageSize}`;

        this.setState({ loading: true });  // Set loading to true while fetching data

        try {
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);

            if (data.articles && data.articles.length > 0) {
                this.setState({
                    articles: data.articles,
                    totalResults: data.totalResults,
                    loading: false
                });
            } else {
                console.error("No articles found for the given parameters.");
                this.setState({ loading: false });
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            this.setState({ loading: false });
        }
        this.props.setProgress(100);
    }

    // Call fetchNews when the component mounts
    async componentDidMount() {
        this.fetchNews();
    }

    // Previous button click handler
    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 }, () => {
            this.fetchNews();  // Fetch the previous page's news
        });
    }

    // Next button click handler
    handleNextClick = async () => {
        if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
            this.setState({ page: this.state.page + 1 }, () => {
                this.fetchNews();  // Fetch the next page's news
            });
        }
    }

    // Render the news component
    render() {
        return (
            <div className='container my-4'>
                <h1 className="text-center" style={{margin:'35px 25px', marginTop:'90px'}}>NewsPulse - Top Headlines</h1>

                {this.state.loading && <h3>Loading...</h3>}  {/* Show loading message while data is being fetched */}

                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem
                                title={element.title ? element.title.slice(0, 45) : ""}
                                description={element.description ? element.description.slice(0, 88) : ""}
                                imgurl={element.urlToImage}
                                newsUrl={element.url} author={element.author} date={element.publishedAt}
                            />
                        </div>
                    })}
                </div>

                {/* Previous and Next buttons */}
                <div className='container d-flex justify-content-between'>
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={this.handlePrevClick}
                        disabled={this.state.page <= 1}
                    >
                        &larr; Previous
                    </button>
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={this.handleNextClick}
                        disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        )
    }
}

export default News;
