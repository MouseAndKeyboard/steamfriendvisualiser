import React, { useState, useEffect, useCallback } from 'react';
import GraphVisualisationManager, {steamUser, relationship} from '../GraphVisualisationManager';
import DataManager from '../DataManager';

import styles from './index.module.css';

const app = () => {

    const [vertices, setVertices] = useState<steamUser[]>([]);
    const [edges, setEdges] = useState<relationship[]>([]);

    const appendVertex = (newVertices) => {
        setVertices(oldVertices => {
            let newArray = oldVertices;
            newVertices.forEach(v => {
                if (!newArray.some(o => o.id === v.id)) {
                    newArray.push(v);
                }
            });

            return newArray;
        });
    };

    const appendEdges = (newEdges) => {
        setEdges((oldEdges) => {
            let newArray = oldEdges;
            newEdges.forEach(x => {
                if (!newArray.some(o => (o.source === x.source && o.target === x.target) || (o.source === x.target && o.target === x.source))) {
                    newArray.push(x);
                }
            });
            return newArray;
        });
    };

    const [, updateState] = useState<any>();
    const forceUpdate = useCallback(() => updateState({}), []);

    useEffect(() => {
        const initialVertexData = [{'id':'76561198195623567'}];
        setVertices(initialVertexData);

        const initialEdgeData = [];
        setEdges(initialEdgeData);

    }, []);


    const addChildren = async (steamid: String) => {
        const response = await fetch(`../api/steamuser?id=${steamid}`);
        const data = await response.json();
        const justVertices = data.map(o => {return { id: o.id }; });
        const edges = data.map(o => {return { source: steamid, target: o.id, note: 'friend' };});
        appendVertex(justVertices);
        appendEdges(edges);
        forceUpdate();
    };

    const addSteamid = (steamid) => {
        appendVertex([{ id: steamid }]);
        forceUpdate();
    };


    return (
        <div className={styles.main}>
            <DataManager addSteamid={addSteamid} />
            <GraphVisualisationManager
                vertices={vertices}
                edges={edges}
                addChildren={addChildren} />
        </div>
    );
};



export default app;
