import styled from "styled-components";

export const Section = styled.div`
  margin: 40px 0 15px;
  padding-bottom: 10px;
`;

export const Label = styled.label`
  font-family: ${({ theme }): string => theme.fonts.paragraph};
  font-size: ${({ theme }): string => theme.paragraph.desktop.size};
  font-weight: ${({ theme }): string => theme.paragraph.desktop.weight};
  line-height: ${({ theme }): string => theme.paragraph.desktop.lineHeight};
  margin-bottom: 5px;
`;

export const Description = styled.span`
  font-family: ${({ theme }): string => theme.fonts.paragraph};
  font-size: 13px;
  color: rgba(0, 0, 0, 25%);
  font-style: italic;
  margin-top: 5px;
`;

export const FieldWrapper = styled.div<{ hasError: boolean; inline?: boolean }>`
  display: flex;
  flex-direction: ${({ inline }): string => (inline ? "row" : "column")};
  align-items: ${({ inline }): string => (inline ? "baseline" : "")};
  margin-bottom: 15px;

  color: #fff;

  ${({ hasError }): string =>
    hasError
      ? `
  input,
  textarea {
    border: 1px solid red;
    background-color: #ffd4d2;
  }

  *:first-child {
    color: red !important;
  }
  `
      : ""}

  input[type="file"] {
    color: #000;
  }
`;

export const Input = styled.input`
  height: 45px;
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

  ::placeholder {
    color: ${({ theme }): string => theme.colors.black};
    opacity: 0.5;
  }

  :focus {
    outline: 0;
  }
`;

export const Textarea = styled.textarea`
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

  ::placeholder {
    color: ${({ theme }): string => theme.colors.black};
    opacity: 0.5;
  }

  :focus {
    outline: 0;
  }
`;

export const Radio = styled.div`
  input {
    margin: 3px 9px 0 6px;
  }
`;
