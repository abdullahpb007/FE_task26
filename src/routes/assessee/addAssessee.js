import React, { Component } from 'react';

class AddAssessee extends Component {
    constructor(props) {
        super(props);
        state = {
            modalAddassessee: false,
        }
    }

    AddAssessee = () => {
        this.setState({
            modalAddassessee: !this.state.modalAddassessee
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const assesseeData = [...this.state.assesseeData];

        assesseeData.push({
            name: this.state.name,
            pin: assesseeData.length + 6000,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        });
        this.AddAssessee();
        this.setState({ assesseeData });
    };
    render() {
        return (
            <Button
                color="success"
                size="lg"
                className="default"
                onClick={this.AddAssessee}
            >
                <IntlMessages id="assessee.popup" />
            </Button>
        );
    }
}

export default AddAssessee;