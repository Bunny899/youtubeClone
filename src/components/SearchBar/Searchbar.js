import React, {  useState } from 'react'
import { Input, Space } from 'antd'
const Searchbar = (props) =>{
    const [searchItem,setSearchItems] = useState('');
    // state = {
    //     searchItem: ''
    // }
    // handleChange = (event) => {
    //     //console.log(event.target.value)
    //     this.setState({
    //         searchItem: event.target.value
    //     })
    // }
    const handleSubmit = (event) => {
        // const { searchItem } = this.state;
        const { onFormSubmit } = props;
        onFormSubmit(searchItem);
        event.preventDefault();
    }
        return (
            <div>
                <Space>
                    <form onSubmit={handleSubmit}>
                        <h1 style={{ marginLeft: '40px' }}>Youtube Clone</h1>
                        <Input size="large" style={{ width: '90%', height: '30px', paddingLeft: '20px' }} placeholder="Search.." onChange={e => setSearchItems(e.target.value)}></Input>
                    </form>
                </Space>
            </div>
        )
}

export default Searchbar;