import {Link} from "react-router-dom";

export default function NotFoundPage()
{
    return (
        <div className="Error_container">
            <p className="Error_container_p">404 error</p>
            
            <Link className="Error_container_link" to='/'>Login</Link>
        </div>
    );
};