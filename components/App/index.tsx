import React, { createContext } from 'react';
import GraphVisualisationManager from '../GraphVisualisationManager';
import DataManager from '../DataManager';

import styles from './index.module.css';

const GraphContext = createContext();

const app = () => {
    return (
        <div className={styles.main}>
            <DataManager className={styles.infopanel} />
            <GraphVisualisationManager />
        </div>
    );
};



export default app;
