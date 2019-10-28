import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody} from 'reactstrap';

class DishDetail extends Component{

    renderDish(dish){
        if(dish != null){

            return(
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
            );

        }
        else{

            return(
                <div></div>
            );
            
        }

    }
    renderComments(comments){
        if(comments!=null){

            return (
                <div>
                    {comments.map((comment)=> 
                        <div className="list-unstyled">
                            <li>{comment.comment}</li>
                            <br />
                            <li>-- {comment.author} , {comment.date}</li>
                            <br />
                        </div>
                        
                    )}
                </div>
            );

        }
        else{

            return(
                <div></div>
            );

        }
    }
    render(){

        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    
                    {this.renderComments(this.props.comments)}
                </div>
            </div>
        );

    }
}
export default DishDetail;