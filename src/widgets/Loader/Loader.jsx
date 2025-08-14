
import { useEffect } from 'react';
import './Loader.scss';

const Loader = () => {


useEffect(() => {
        const loadingEl = document.querySelector('.loader');

        const timer1 = setTimeout(() => {
            loadingEl.classList.add('fade-out');

            const timer2 = setTimeout(() => {
                loadingEl.style.display = 'none';
            }, 1000);

            return () => clearTimeout(timer2);
        }, 3000);

        return () => clearTimeout(timer1);
    }, []);

    return (
        <div className="loader">
            <div className="loader__M">M</div>
            <div className="loader__S">S</div>
        </div>
    )
}

export default Loader;