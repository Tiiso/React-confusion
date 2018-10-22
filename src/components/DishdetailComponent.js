import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
    
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

    function RenderComments({comments}) {
      
      if (comments != null) {
      const reviews = comments.map((commenting) => {
        return (
          <div key = {commenting.id}>
            <ul className = "list-unstyled">
              <li>{commenting.comment}</li><br />
             <p>-- {comment.author}, {new Date(comment.date).toLocaleDateString('en-US', options)}</p>
            </ul>
          </div>
        );
      });
      return reviews;
    } else {
      return (<div></div>);
    }      
    }

    const  DishDetail = (props) => {

      <RenderDish dish={props.dish} />
      <RenderComments comments={props.dish.comments} />
      
    }

export default DishDetail;