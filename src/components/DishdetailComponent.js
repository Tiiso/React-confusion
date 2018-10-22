import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Media } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
    super(props);
    this.renderDish = this.renderDish.bind(this);
    this.renderComments = this.renderComments.bind(this);

  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className = "row">
        <div className = "col-12 col-md-5 m-1">
          <Card>
            <CardImg width = "100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className = "col-12 col-md-5 m-1">
          <h4>Comments</h4><br />
          {this.renderComments(dish.comments)}
        </div>
      </div>
      );
    } else {
      return (<div></div>);
    }
  }

  renderComments(comments) {
    if (comments != null) {
      const reviews = comments.map((commenting) => {
        return (
          <div key = {commenting.id}>
            <ul className = "list-unstyled">
              <li>{commenting.comment}</li><br />
              <li>{'--  ' + commenting.author + ', ' + {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}}</li>
            </ul>
          </div>
        );
      });
      return reviews;
    } else {
      return (<div></div>);
    }
  }

  render() {
    return (
      <div>
      {this.renderDish(this.props.dish)}
    </div>
    );
  }
}

export default DishDetail;