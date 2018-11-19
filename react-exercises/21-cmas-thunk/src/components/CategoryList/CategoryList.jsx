import React, { Component } from "react";
import { Link } from "react-router-dom";

import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

class CategoryList extends Component {
  componentDidMount() {
    if (!this.props.categories) this.props.fetchAllNominees();
  }
  render() {
    return (
      <div className="text-center">
        <p className="mb-4">
          <Link to="/category/1" className="btn btn-outline-primary btn-lg">
            Start Voting
          </Link>
        </p>
        <h1 className="h4">Categories</h1>
        {this.props.isLoading && <Loading />}
        {this.props.hasError && (
          <ErrorMessage>
            Oops! The CMAs are down. Are engineers are aware of the problem and
            are hard at work trying to fix it. Please come back later.
          </ErrorMessage>
        )}
        <ul className="list-group">
          {this.props.categories &&
            Object.entries(this.props.categories).map(([index, category]) => {
              const key = "category-" + index;
              return (
                <li className="list-group-item" key={key}>
                  {category.category}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default CategoryList;
