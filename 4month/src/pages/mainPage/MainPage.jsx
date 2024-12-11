import React from 'react';
import styles from './mainPage.module.css';
import Description from '../../components/description/Description';

function MainPage() {
    const renderWords = (text) =>
        text.split(' ').map((word, index) => (
            <span key={index} className={styles.titleWord}>
        {word}{' '}
      </span>
        ));

    return (
        <div>
            <h1>{renderWords('Добро пожаловать на главную страницу')}</h1>
            <Description info={{ title: 'Заголовок 2', description: 'Описание 2' }} />
        </div>
    );
}

export default MainPage;