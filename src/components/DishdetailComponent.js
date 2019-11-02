import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody} from 'reactstrap';


    function RenderDish({dish}){

        if(dish != null){

            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );

        }
        else{

            return(
                <div></div>
            );

        }

    }
    function Dateformat(date){
        let dateObj = new Date(date);
        let dateFormat = dateObj.toLocaleString('default', {month: 'long'}).substring(0,3) + 
        " " + dateObj.getDate() + ", " + dateObj.getFullYear();
        return(
            <span>{dateFormat}</span>
        );
    }
    function RenderComments({dish}){
        if(dish!=null){
 
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                        {dish.comments.map((comment)=> 
                            <ul class="list-unstyled">
                                <li>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {Dateformat(comment.date)}</p>
                                </li>
                            </ul>  
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
    const DishDetail=(props)=>{

            return(
                <div className="container">
                    <div className="row">
                            <RenderDish dish ={props.dish} />
                            <RenderComments dish={props.dish} />
                    </div>
                </div>
            );
        }

export default DishDetail;