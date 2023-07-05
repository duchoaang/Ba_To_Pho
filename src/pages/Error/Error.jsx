import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="vw-100 vh-100 d-flex flex-column align-items-center justify-content-center fz-1">
            <h1>Page does not exist</h1>
            <h4>
                Click <Link to="/">here </Link>to go back Home
            </h4>
        </div>
    );
};

export default Error;
