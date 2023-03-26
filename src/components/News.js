import React, { Component } from 'react'
import NewsItem from './NewsItem'
import "./News.css"

export class News extends Component {
   

    constructor(){
      super();
      // console.log("Hello I'm a constructor from News component");
      this.state={
        articles:[],
        loading:false,
        page:1
      }
    }

    async componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=dca6d55a7d8046448e82d337f74cd4d1";
      let data=await fetch(url);
      // console.log(data);
      let parsedData=await data.json()
      // console.log(parsedData);
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
    }

  //   async componentDidMount(){
  //     try{       
  //       let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=dca6d55a7d8046448e82d337f74cd4d1"; 
  //         const res = await fetch(url);
  //         const data = await res.json();
  //         this.setState({
  //             articles: data.articles
  //         });
  //     }
  //     catch(e) {
  //         console.log("something is not working");
  //     }
  // }
  handlePrevClick = async ()=>{
    // console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dca6d55a7d8046448e82d337f74cd4d1&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);  
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
    })

}

 handleNextClick = async ()=>{
    // console.log("Next"); 
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dca6d55a7d8046448e82d337f74cd4d1&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);  
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
}
}
  
  render() {
    return (
      <div>
      <div className="horizontalItems">

      {this.state.articles.map((element)=>{
        return<div key={element.url}> 

        <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} publishedAt={element.publishedAt} newsUrl={element.url}/>
        </div>

      })}
        </div>
        <div className="buttons">
                <button className="btnLeft" disabled={this.state.page<=1} onClick={this.handlePrevClick}> &larr; Previous</button>
                <button className="btnRight" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
        </div>
    )
  }
}

export default News