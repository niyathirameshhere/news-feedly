import React, { Component } from 'react';

import ArticleList from './../components/ArticleList';
import Navigation from './../components/Navigation';

import RestService from './../services/rest-service';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			// url: '/article',
			url: '/users',
		};
		this.restService = new RestService();
	}

	getArticles() {
		this.restService.getArticlesAPI(this.state.url).then(result => {
			if (result && result.length) {
				this.setState(() => {
					return {
						articles: result,
					};
				});
			} else {
				this.setState(() => {
					return {
						articles: [],
					};
				});
			}
		});
	}

	componentDidMount() {
		this.getArticles();
	}

	render() {
		return (
			<React.Fragment>
				<header>Home</header>
				{this.state.articles.length ? (
					<ArticleList articles={this.state.articles} />
				) : (
					<div>nothing to show</div>
				)}
				<Navigation />
			</React.Fragment>
		);
	}
}
