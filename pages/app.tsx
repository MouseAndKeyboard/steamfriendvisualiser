import GraphVisualisationManager from '../components/GraphVisualisationManager'
import DataManager from '../components/DataManager'


const app = (props) => {
    return (
        <div>
            <DataManager />
            <GraphVisualisationManager />
        </div>
    );
}

export default app;
