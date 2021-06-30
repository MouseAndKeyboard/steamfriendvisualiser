import React from 'react';
import * as d3 from 'd3';
import { useD3 } from '../../hooks/useD3';
import { steamUser, relationship } from '../GraphVisualisationManager';
import styles from './GraphVisualisation.module.css';


const GraphVisualisation = ({vertices, edges, width, height, addChildCallback}:
                            {vertices: steamUser[],
                             edges: relationship[],
                             width: number,
                             height: number,
                             addChildCallback: any}) => {
    const radius = 17.5;

    const ref = useD3(
        (svg) => {
            svg.selectAll('g').remove();

            const links = edges.map(d => Object.create(d));
            const nodes = vertices.map(d => Object.create(d));

            const simulation = d3.forceSimulation(nodes)
            // @ts-ignore
                .force('link', d3.forceLink(links).id(d => d.id).strength(1))
                .force('charge', d3.forceManyBody().strength(-50))
                .force('center', d3.forceCenter(width / 2, height / 2));

            const link = svg.append('g')
                .attr('stroke', '#fff')
                .attr('stroke-opacity', 0.6)
                .selectAll('line')
                .data(links)
                .join('line')
                .attr('stroke-width', 2);

            const node = svg.append('g')
                .attr('stroke', '#fff')
                .attr('stroke-width', 1.5)
                .selectAll('circle')
                .data(nodes)
                .join('circle')
                .attr('r', radius)
                .attr('fill', '#aaa')
                .call(drag(simulation))
                .on('dblclick', d => {
                    addChildCallback(d.srcElement.__data__.id);
                });

            node.append('title')
                .text(d => d.id);

            node.append('circle')
                .attr('cx', 12.5)
                .attr('cy', 0)
                .attr('r', 17.5)
                .style('fill', 'transparent')
                .style('stroke', 'black')
                .style('stroke-width', '2px');

            simulation.on('tick', () => {
                link.attr('x1', d => Math.max(radius, Math.min(width - radius, d.source.x)))
                    .attr('y1', d => Math.max(radius, Math.min(height - radius, d.source.y)))
                    .attr('x2', d => Math.max(radius, Math.min(width - radius, d.target.x)))
                    .attr('y2', d => Math.max(radius, Math.min(height - radius, d.target.y)));

                node.attr('cx', d => Math.max(radius, Math.min(width - radius, d.x)))
                    .attr('cy', d => Math.max(radius, Math.min(height - radius, d.y)));
            });
        },
        [vertices.length, edges.length]
    );

    const drag = simulation => {
        function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }

        function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }

        return d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended);
    };

    return (<svg className={styles.mainView} ref={ref}></svg>);
};

export default GraphVisualisation;
