import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import styleToCss from "style-object-to-css-string";
import { VCenter, VHCenter, HCenter, SpreadEvenly, stackCenter } from "../../mixins";

const Container = styled.div`
  ${props => css`
      display: ${props.display || "flex"};
      margin: ${props.margin || "0"};
  `}

  ${props => {
      if (props.vcenter) return VCenter;
      if (props.hcenter) return HCenter;
      if (props.vhcenter) return VHCenter;
      if (props.spreadEven) return SpreadEvenly;
      if (props.stackCenter) return stackCenter;
  }}

  ${props => {
      if (props.square) {
          return css`
              width: ${props.square}px;
          `;
      }
  }}

  /* ${props => props.containerStyle && styleToCss(props.containerStyle)} */
`;

Container.propTypes = {
    // containerStyle: PropTypes.object,
    display: PropTypes.string,
    margin: PropTypes.string,
    square: PropTypes.number,
};

export default Container;
