import React from 'react';
import {connect} from 'react-redux'
import {createPost} from "../redux/actions";

//test commit
class PostForm extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }
    submitHandler = event => {
        event.preventDefault()

        const {title} = this.state

        const newPost = {
            title, id: Date.now().toString()
        }

        console.log(newPost)
        this.props.createPost(newPost)
        this.setState({title: ''})
    }

    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({...prev, ...{
                [event.target.name]: event.target.value
            }}))
    }

    render()  {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost
}

export default connect(null,mapDispatchToProps)(PostForm)
