import { useState, useEffect, useCallback } from 'react'

import GraphVisualisation from './Visualisations/GraphVisualisation'

const GraphVisualisationManager = () => {
    const [vertices, setVertices] = useState<steamUser[]>([]);
    const [edges, setEdges] = useState<relationship[]>([]);

    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    useEffect(() => {
        const initialVertexData = [{"id":"76561198195623567"}]
        setVertices(initialVertexData);

        const initialEdgeData = [];
        setEdges(initialEdgeData);

    }, [])

    const addChildren = async (steamid: String) => {
        const response = await fetch(`../api/steamuser?id=${steamid}`);
        const data = await response.json()
        const justVertices = data.map(o => {return { id: o.id } });
        const edges = data.map(o => {return { source: steamid, target: o.id, note: 'friend' }});
        setVertices((oldVertices) => {
            let newArray = oldVertices;
            justVertices.forEach(v => {
                if (!newArray.some(o => o.id === v.id)) {
                    newArray.push(v);
                }
            });

            return newArray;
        });


        setEdges((oldEdges) => {
            let newArray = oldEdges;
            edges.forEach(x => {
                if (!newArray.some(o => (o.source === x.source && o.target === x.target) || (o.source === x.target && o.target === x.source))) {
                    newArray.push(x);
                }
            });
            return newArray;
        });

        forceUpdate();
    }

    return (<GraphVisualisation vertices={vertices} edges={edges} width={1000} height={1000} addChildCallback={addChildren} />);
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
