import styled from "styled-components";

export const ContactsList = styled.ul`
  padding-left: 0;
  list-style: none;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(8, 8, 114, 0.5);
  padding-bottom: 8px;
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;
