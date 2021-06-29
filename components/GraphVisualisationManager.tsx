import { useState, useEffect } from 'react'

import GraphVisualisation from './Visualisations/GraphVisualisation'

const GraphVisualisationManager = () => {
    const [vertices, setVertices] = useState<steamUser[]>([]);
    const [edges, setEdges] = useState<relationship[]>([]);

    useEffect(() => {
        const initialVertexData = [
            {"id":"76561198195623567"},
            {"id":"76561198042607021"},
            {"id":"76561198077279908"},
            {"id":"76561198079221334"},
            {"id":"76561198091581207"},
            {"id":"76561198145748582"},
            {"id":"76561198149819869"},
            {"id":"76561198198977982"},
            {"id":"76561198227441672"},
            {"id":"76561198227920272"},
            {"id":"76561198300991575"},
            {"id":"76561198839610876"},
            {"id":"76561198873921929"},
            {"id":"76561198880198580"},
            {"id":"76561198964253538"},
            {"id":"76561198981630686"},
            {"id":"76561198079221334"},
            {"id":"76561198140119436"},
            {"id":"76561198195623567"},
            {"id":"76561198227920272"},
            {"id":"76561198981630686"},
            {"id":"76561199045911255"},
            {"id":"76561199097982054"}]


        setVertices(initialVertexData);

        const initialEdgeData = [
            {"source":"76561198195623567","target":"76561198042607021","note":"friend"},
            {"source":"76561198195623567","target":"76561198077279908","note":"friend"},
            {"source":"76561198195623567","target":"76561198079221334","note":"friend"},
            {"source":"76561198195623567","target":"76561198091581207","note":"friend"},
            {"source":"76561198195623567","target":"76561198145748582","note":"friend"},
            {"source":"76561198195623567","target":"76561198149819869","note":"friend"},
            {"source":"76561198195623567","target":"76561198198977982","note":"friend"},
            {"source":"76561198195623567","target":"76561198227441672","note":"friend"},
            {"source":"76561198195623567","target":"76561198227920272","note":"friend"},
            {"source":"76561198195623567","target":"76561198300991575","note":"friend"},
            {"source":"76561198195623567","target":"76561198839610876","note":"friend"},
            {"source":"76561198195623567","target":"76561198873921929","note":"friend"},
            {"source":"76561198195623567","target":"76561198880198580","note":"friend"},
            {"source":"76561198195623567","target":"76561198964253538","note":"friend"},
            {"source":"76561198195623567","target":"76561198981630686","note":"friend"},
            {"source":"76561198839610876","target":"76561198079221334","note":"friend"},
            {"source":"76561198839610876","target":"76561198140119436","note":"friend"},
            {"source":"76561198839610876","target":"76561198195623567","note":"friend"},
            {"source":"76561198839610876","target":"76561198227920272","note":"friend"},
            {"source":"76561198839610876","target":"76561198981630686","note":"friend"},
            {"source":"76561198839610876","target":"76561199045911255","note":"friend"},
            {"source":"76561198839610876","target":"76561199097982054","note":"friend"}
        ];
        setEdges(initialEdgeData);

    }, [])


    return (<GraphVisualisation vertices={vertices} edges={edges} width={1000} height={1000} />);
}

export default GraphVisualisationManager;

export interface steamUser {
    id: String;
}

export interface relationship {
    source: String;
    target: String;
    note: String;
}
