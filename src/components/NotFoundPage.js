import React from 'react';
import { Link} from 'react-router-dom'

class NotFound extends React.Component {

    //JSX
    render(){
        return (
            <div>
                <p>NotFound Working</p>
                <Link to="/">Go Home</Link>
            </div>
        );
    }
}

export default NotFound;
