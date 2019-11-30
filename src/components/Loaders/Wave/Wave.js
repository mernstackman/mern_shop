import React, { Children } from "react";
import styled, { keyframes } from "styled-components";
import { VHCenter } from "../../../mixins";
import { darken } from "polished";

const template = (i, duration) => {
    return `
    > :nth-child(${i}) {
        animation-delay: ${duration}s;
    }
    `;
};

const animate = keyframes`
    0%, 40%, 100% { transform: scaleY(0.5); }
    20% { transform: scaleY(1); }
`;

const WaveBase = styled.div`
    display: flex;
    padding: 0 5px;
    height: ${props => props.size || 15}px;
    ${VHCenter}

    > * {
        background-color: ${props => props.color || darken(0, "rgba(0,0,0,0.12)")};
        height: 100%;
        width: ${props => Math.round(props.size / 5) || 3}px;
        display: inline-block;
        margin: 0 2px;
        animation: ${animate} 1.6s infinite ease-in-out;
    }

    ${props => {
        let rules = ``;
        let duration = 0;
        for (let i = 1; i <= props.count; i++) {
            duration = (1.6 - 0.2 * i) / -1;
            rules += template(i, duration.toFixed(1));
        }
        return rules;
    }}
`;

const Wave = props => {
    const children_count = Children.count(props.children);
    return <WaveBase count={children_count}>{props.children}</WaveBase>;
};

export default Wave;
