import React from 'react'
import {Card,Button} from 'react-bootstrap';
import placeholder from '../../assets/placeholder.png'
function Feed({image,title,description}) {
    let dummyText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt similique accusamus, necessitatibus fugiat qui illo? Esse, laboriosam. Maiores repudiandae ipsum deleniti inventore ipsa mollitia alias, impedit ducimus eligendi deserunt."
  return <Card style={{ width: '30rem' }}>
  <Card.Img variant="top" src={image?image:placeholder} />
  <Card.Body>
    <Card.Title>{title?title:"Title Goes Here"}</Card.Title>
    <Card.Text>
     {description?description:dummyText}
    </Card.Text>
   
  </Card.Body>
</Card>
}
export default Feed
