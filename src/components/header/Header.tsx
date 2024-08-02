import ThemeToggle from './ThemeToggle';
import './Header.css';

export default function Header() {
    return (
        <nav>
            <h1>nifty fits</h1>
            <ul>
                <li className="nav">Home</li>
                <li className="nav"><ThemeToggle /></li>
                <li className="nav account-btn border-dark dark:border-light">Login</li>
            </ul>
        </nav>
    )
}
