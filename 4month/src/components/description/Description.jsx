import React from 'react';
import styles from './description.module.css';

function Description({ info }) {
    const { title, description } = info;

    // Разбиваем текст на слова и оборачиваем каждое слово в span
    const renderColorfulText = (text) =>
        text.split(' ').map((word, index) => (
            <span key={index} className={styles.colorfulWord}>
        {word}{' '}
      </span>
        ));

    return (
        <div className={styles.descriptionContainer}>
            <h2 className={styles.title}>{renderColorfulText(title)}</h2>
            <p className={styles.text}>{renderColorfulText(description)}</p>
        </div>
    );
}

export default Description;