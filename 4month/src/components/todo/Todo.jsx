import React from 'react';
import styles from './todo.module.css';

function Todo({ children }) {
    return <div className={styles.animatedTodo}>{children}</div>;
}

export default Todo;