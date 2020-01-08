import React from "react";
import styled from "styled-components";

interface FadeProps {
  isVisible: boolean;
  children: any;
}

const Fade: React.FC<FadeProps> = ({ isVisible, children }) =>
  isVisible ? (
    <FadeWrapper isVisible={isVisible}>{children}</FadeWrapper>
  ) : null;

const FadeWrapper = styled(({ isVisible, ...restProps }) => (
  <div {...restProps} />
))`
  animation: ${({ isVisible }) => (isVisible ? "fadeIn" : "fadeOut")} 1500ms;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export default Fade;
