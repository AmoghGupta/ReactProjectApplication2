import React from 'react';

class EditExpense extends React.Component {

    //JSX
    render(){
        console.log(this.props);
        return (
            <div>
                <p>EditExpense Working with id: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default EditExpense;
