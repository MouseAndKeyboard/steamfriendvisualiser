import React from 'react';
import GraphVisualisationManager from '../GraphVisualisationManager';
import DataManager from '../DataManager';

import styles from './index.module.css';

const app = () => {
    return (
        <div className={styles.main}>
            <DataManager />
            <GraphVisualisationManager />
        </div>
    );
};



export default app;
