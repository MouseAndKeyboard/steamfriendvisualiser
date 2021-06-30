import React from 'react';
import GraphVisualisation from './Visualisations/GraphVisualisation';

const GraphVisualisationManager = ({vertices, edges, addChildren}: {
    vertices: steamUser[],
    edges: relationship[],
    addChildren: any
}) => {
    return (<GraphVisualisation
        vertices={vertices}
        edges={edges}
        width={1400}
        height={800}
        addChildCallback={addChildren} />);
};

export default GraphVisualisationManager;

export interface steamUser {
    id: String;
}

export interface relationship {
    source: String;
    target: String;
    note: String;
}
