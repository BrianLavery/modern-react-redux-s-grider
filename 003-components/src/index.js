import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { CommentDetail } from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import faker from '@faker-js/faker'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" 
                timeAgo="Today at 4:45PM" 
                avatar={faker.image.avatar()} 
                content="Nice blog post!" 
                />  
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" 
                timeAgo="Today at 2:00AM" 
                avatar={faker.image.avatar()} 
                content="Way to go buddy!
                " />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" 
                timeAgo="Yesterday at 5:00PM" 
                avatar={faker.image.avatar()} 
                content="I liked it!" 
                />
            </ApprovalCard>
        </div>
    )
}

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)
root.render(<App tab="home" />)
