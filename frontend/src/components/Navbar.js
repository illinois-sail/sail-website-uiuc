import { Link } from 'react-router';

export default function Navbar() {
    return (
        <nav>
            <Link to = "/">Home</Link>
            <Link to = "/About">About</Link>
            <Link to = "/Classes">Classes</Link>
            <Link to = "/Faq">Faq</Link>
            <Link to = "/Login">Login</Link>
            <Link to = "/Logout">Logout</Link>
            <Link to = "/Profile">Profile</Link>
            <Link to = "/Register">Register</Link>
            <Link to = "/ResetPassword">ResetPassword</Link>
            <Link to = "/Signup">Signup</Link>
            <Link to = "/Transportation">Transportation</Link>
        </nav>
    );
}