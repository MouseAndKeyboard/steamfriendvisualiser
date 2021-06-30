import React, { useState, useCallback } from 'react';
import styles from './index.module.css';

const DataManager = ({addSteamid}) => {
    const [userSteamid, setUserSteamid] = useState('');

    const handleChange = (e) => {
        setUserSteamid(e.target.value);
    };

    const handleClick = useCallback(() => addSteamid(userSteamid), [userSteamid]);

    return (<div className={styles.main}>
        <h1>Steam Friend Explorer</h1>
        <p>Visualise and interact with your Steam friend network.</p>
        <br />
        <h2>Add your Steam account</h2>
        <p>
            Enter your <a href="https://steamid.io/">SteamID64</a> (<code>76561198156591174</code>) and press {"\"Add\""}.
        </p>

        <div className={styles.customfield}>
            <label htmlFor="userId">Your SteamID</label>
            <br />
            <input id="userIdInput" name="userId" value={userSteamid} onChange={handleChange} placeholder="76561198156591174" />
            <button onClick={handleClick}>Add</button>
        </div>
        <h2>Controls</h2>
        <ul>
            <li className={styles.listElem}><code>Double Click</code> to add that node{'\''}s friends to the graph.</li>
            <li className={styles.listElem}><code>Click and Drag</code> to move nodes around.</li>
            <li className={styles.listElem}><code>Mouse over</code> to view the steamid of that user.</li>
        </ul>
    </div>);
};

export default DataManager;
