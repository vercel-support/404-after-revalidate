import styled from "styled-components";
 
export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  input {
    display: none;
  }
`;
 
export const StyledCheckbox = styled.div<{ disabled: boolean }>`
  min-height: 40px;
  min-width: 40px;
  background-color: ${({ theme, disabled }): string =>
    disabled ? theme.colors.gray : theme.colors.gray};
  border-radius: 10px;
  cursor: ${({ disabled }): string => (disabled ? "not-allowed" : "pointer")};
  position: relative;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  :focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  svg {
    position: absolute;
    width: 84%;
    height: 84%;
    top: 2px;
    left: 2px;
  }
`;
 
export const Label = styled.label<{ disabled: boolean }>`
  font-family: ${({ theme }): string => theme.fonts.paragraph};
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  margin: auto 0 auto 15px;
  cursor: ${({ disabled }): string => (disabled ? "not-allowed" : "pointer")};
`;