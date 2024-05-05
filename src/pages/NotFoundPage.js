import {Link} from "react-router-dom";

export default function NotFoundPage()
{
    return (
        <div className="Error_container">404 error
            <Link to='/'>Login</Link>
        </div>
    );
};