import styled from "styled-components";

const DropdownStyleWrapper = styled.div`
position: relative;
.dropdown-wrapper{
  margin: 0;
  font-size: ${({theme}) => theme.fonts.headingH3};
  cursor: pointer;
  user-select: none;
  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: ${({theme}) => theme.fontWeight.medium};
}
.dropdown-items {
    display: flex;
    flex-direction: column;
    background: ${({theme}) => theme.colors.whiteColor};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 12px 100px 12px 24px;
    position: absolute;
    border-radius: 8px;
    top: 28px;
    left: 0;
}
`;

export {DropdownStyleWrapper}