import React from 'react';
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail
                author="Sam"
                timeago="Today at 4:50"
                text="Wow you suck"
                image={faker.image.avatar()}
            />
            <CommentDetail
                author="Alex"
                timeago="Today at 9:12"
                text="LOL"
                image={faker.image.avatar()}
            />
            <CommentDetail
                author="Aigul"
                timeago="Today at 13:20"
                text="Putin did this"
                image={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))