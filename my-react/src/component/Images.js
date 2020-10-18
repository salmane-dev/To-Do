import React, { Component } from 'react'

export default class Images extends Component {

    componentWillUnmount(){
        //console.log('app UnMounted DDDDDD')
    }

    render() {
        return (
            <div>
                 <img src="https://images.unsplash.com/photo-1544896478-d5b709d413c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="vintage stuff" />
            </div>
        )
    }
}
