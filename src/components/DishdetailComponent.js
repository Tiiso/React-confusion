import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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

      const options = { year: "numeric", month: "numeric", day: "numeric" };
      
      if (comments != null) {
      const reviews = comments.map((commenting) => {
        return (
          <div key = {commenting.id}>
            <ul className = "list-unstyled">
              <li>{commenting.comment}</li><br />
             <p>-- {comments.author}, {new Date(comments.date).toLocaleDateString('en-US', options)}</p>
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
      return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
            );
    }

export default DishDetail;