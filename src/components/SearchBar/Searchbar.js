import React, { Component } from 'react'
import { Input, Space } from 'antd'
class Searchbar extends Component {
    state = {
        searchItem: ''
    }
    handleChange = (event) => {
        //console.log(event.target.value)
        this.setState({
            searchItem: event.target.value
        })
    }
    handleSubmit = (event) => {
        const { searchItem } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchItem);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <Space>
                    <form onSubmit={this.handleSubmit}>

                        <h1 style={{ marginLeft: '40px' }}>Youtube Clone</h1>
                        <Input size="large" style={{ width: '90%', height: '30px', paddingLeft: '20px' }} placeholder="Search.." onChange={this.handleChange}></Input>

                    </form>
                </Space>
            </div>
        )
    }
}

export default Searchbar; 