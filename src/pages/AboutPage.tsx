import React from 'react';
import {useHistory} from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
        <>
            <h1>Страница информация</h1>
            <p>Some Text</p>
            <button
                className="btn"
                onClick={() => history.push('/')}
            >Обратно к списку дел</button>
        </>
    );
}