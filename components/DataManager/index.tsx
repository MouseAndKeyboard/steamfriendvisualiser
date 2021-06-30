import React from 'react';
import styles from './index.module.css';

const DataManager = () => {
    return (<div className={styles.main}>
        <h2>Steam Friend Explorer</h2>
        <p>Visualise and interact with your Steam friend network.</p>
        <br />
        <h3>Controls</h3>
        <ul>
            <li className={styles.listElem}><code>Double Click</code> to add that node{'\''}s friends to the graph.</li>
            <li className={styles.listElem}><code>Click and Drag</code> to move nodes around.</li>
            <li className={styles.listElem}><code>Mouse over</code> to view the steamid of that user.</li>
        </ul>
    </div>);
};

export default DataManager;
