import ThemeToggle from './ThemeToggle';
import './Header.css';

export default function Header() {
    return (
        <section className="nav-section w-full py-2.5 bg-light dark:bg-dark">
            <nav>
                <h1>nifty fits</h1>
                <ul>
                    <li className="nav">Home</li>
                    <li className="nav"><ThemeToggle /></li>
                    <li className="nav account-btn border-dark dark:border-light">Login</li>
                </ul>
            </nav>
        </section>
    )
}
