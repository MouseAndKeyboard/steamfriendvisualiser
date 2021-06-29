import { useState, useEffect } from 'react'

import GraphVisualisation from './Visualisations/GraphVisualisation'

const GraphVisualisationManager = () => {
    const [vertices, setVertices] = useState<steamUser[]>([]);
    const [edges, setEdges] = useState<relationship[]>([]);

    useEffect(() => {
        const initialVertexData = [{
            id: "76561198026645639"
        }, {
            id: "76561198779890302"
        }];
        setVertices(initialVertexData);

        const initialEdgeData = [{
            source: "76561198026645639",
            target: "76561198779890302",
            note: "friend"
        }];
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
