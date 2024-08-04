import React from 'react'
import {Card} from 'react-bootstrap';
import placeholder from '../../assets/placeholder.jpg'
import profile from '../../assets/profile.jpg'
function Post({image,title,description,name}) {

    let dummyText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt similique accusamus, necessitatibus fugiat qui illo? Esse, laboriosam. Maiores repudiandae ipsum deleniti inventore ipsa mollitia alias, impedit ducimus eligendi deserunt."
    return <div className='card-wrapper'>
        <Card style={{ width: '30rem' }}>
            
            <div className='profile-wrapper'>
                <img src={profile} height="50px" width="50px" className='profile'/>

                <h5 className='ml-10'>{name?name:'User name'}</h5>
            </div>

            <Card.Img variant="top" src={image?image:placeholder} />

            <Card.Body>

                <Card.Title>{title?title:"Title Goes Here"}</Card.Title>
                
                <Card.Text>{description?description:dummyText}</Card.Text>

            </Card.Body>

        </Card>
    </div>
}
export default Post