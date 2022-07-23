import React from 'react';

class Cms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: 0,
            description: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;

        console.log(name + " " + target.value)

        this.setState({
            [name]: target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log(this.state.name)

        const { name, price, description } = this.state

        const request = {
            name: name,
            price: parseFloat(price),
            description: description
        }

        sendRequest(JSON.stringify(request))
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Название:
                        <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Цена:
                        <input name="price" type="number" value={this.state.price} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Описание:
                        <textarea name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Отправить" />
                </form>
            </div>
        )
    }
}

const sendRequest = (body) => {
    fetch('http://localhost:8080/product', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
            'Content-Type': 'application/json'
        },
        body: body
    }).then(r => r.json())
}

export default Cms