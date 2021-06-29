import * as d3 from 'd3'
import { useD3 } from '../../hooks/useD3'

import styles from "./GraphVisualisation.module.css"


const GraphVisualisation = ({vertices, edges, width, height,  addChildCallback}) => {
    const ref = useD3(
        (svg) => {
            const links = edges.map(d => Object.create(d));
            const nodes = vertices.map(d => Object.create(d));

            const simulation = d3.forceSimulation(nodes)
                                 .force('link', d3.forceLink(links).id(d => d.id))
                                 .force('charge', d3.forceManyBody().strength(-100))
                                 .force('center', d3.forceCenter(width / 2, height / 2))

            const link = svg.append('g')
                            .attr('stroke', '#fff')
                            .attr('stroke-opacity', 0.6)
                            .selectAll('line')
                            .data(links)
                            .join('line')
                            .attr('stroke-width', 2)

            const node = svg.append('g')
                            .attr('stroke', '#fff')
                            .attr('stroke-width', 1.5)
                            .selectAll('circle')
                            .data(nodes)
                            .join('circle')
                            .attr('r', 12)
                            .attr('fill', '#aaa')
                            .call(drag(simulation))
                            .on('dblclick', d => {
                                addChildCallback(d.srcElement.__data__.id);
                            });

            node.append('title')
                            .text(d => d.id);

            simulation.on('tick', () => {
                link.attr('x1', d => d.source.x)
                    .attr('y1', d => d.source.y)
                    .attr('x2', d => d.target.x)
                    .attr('y2', d => d.target.y);

                node.attr('cx', d => d.x)
                    .attr('cy', d => d.y);
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
                 .on("start", dragstarted)
                 .on("drag", dragged)
                 .on("end", dragended);
}

    return (<svg className={styles.mainView} ref={ref}></svg>);
}

export default GraphVisualisation;
