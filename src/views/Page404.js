import React from 'react';
import '../html/page404.css';
import Back from '../svg';

function Page404(props) {
    return (
        <div className="page404">
            <div className="page404__title">404</div>
            <div className="page404__what">Oops, you still haven't
                found what you looking for?</div>
            <div className="page404__ans">The page you are looking for might have been removed, had its name changed, or is
                temporarily unavailable.</div>
            <div className="page404__back">
                <button className="back">
                    <Back/>
                </button>
                <p>Back to Home Page</p>
            </div>
        </div>
    );
}

export default Page404;