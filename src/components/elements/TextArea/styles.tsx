import styled from "styled-components";

import { PropsType } from ".";

export const Wrapper = styled.div<{
  feedbackStatus: PropsType["feedbackStatus"];
}>`
  position: relative;
  textarea {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
    font-family: ${({ theme }): string => theme.fonts.paragraph};
    font-size: 14px;
    font-weight: 300;
    line-height: 150%;
    color: ${({ theme }): string => theme.colors.black};
    background-color: ${({ theme }): string =>
      theme.colors.layout.background.contrast};
    padding: 12px 18px 12px 18px;
    resize: none;
    border-bottom: ${({ feedbackStatus, theme }): string => {
      switch (feedbackStatus) {
        case "success":
          return `3px solid ${theme.colors.semantic.success}`;
        case "error":
          return `3px solid ${theme.colors.semantic.error}`;
        default:
          return "";
      }
    }};
    ::placeholder {
      color: ${({ theme }): string => theme.colors.black};
      opacity: 0.5;
    }
    :focus {
      outline: 0;
    }
  }
`;

export const FeedbackTextWrapper = styled.div`
  p {
    font-size: 14px !important;
    color: ${({ theme }): string => theme.colors.semantic.error};
  }
`;
