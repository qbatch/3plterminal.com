import styled from 'styled-components';

const ButtonStyleWrapper = styled.button`
  padding: 12px 24px;
  display: flex;
  grid-gap: 8px;
  border-radius: 8px;
  font-weight:${({ theme }) => theme.fontWeight.semiBold}; ;
  font-size:${({ theme }) => theme.fonts.baseFontSize};
  color: ${({ theme, variant }) => variant === 'outline' ? theme.colors.primaryColor : theme.colors.whiteColor};
  background-color: ${({ theme, variant }) => variant === 'outline' ? theme.colors.whiteColor : theme.colors.primaryColor};
  border: 1px solid ${({ theme, variant }) => variant === 'outline' ? theme.colors.primaryColor : theme.colors.primaryColor};
  &:hover{
  border: 1px solid ${({ theme, variant }) => variant === 'outline' ? theme.colors.primaryColor : theme.colors.primaryColor};
  }
`;

export { ButtonStyleWrapper };