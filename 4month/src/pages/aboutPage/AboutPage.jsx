import React from 'react';
import styles from './aboutPage.module.css';
import Description from "../../components/description/Description";

function AboutPage(props) {
    return (
        <div>
            <Description info={{title: "Title", description: "description"}} />
        </div>
    );
}

export default AboutPage;