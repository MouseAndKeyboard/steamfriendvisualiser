import GraphVisualisationManager from '../GraphVisualisationManager'
import DataManager from '../DataManager'

import styles from './index.module.css'

const app = (props) => {
    return (
        <div className={styles.main}>
            <DataManager />
            <GraphVisualisationManager />
        </div>
    );
}



export default app;
