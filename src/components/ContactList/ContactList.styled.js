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

export const ContactNote = styled.p`
  margin-right: ${({ theme }) => theme.spacing(3)};
  font-size: 0.85em;
`;

export const ContactNoteItem = styled.span`
  display: inline-block;
`;

export const Link = styled.a`
  margin-left: ${({ theme }) => theme.spacing(1)};
  color: inherit;
  text-decoration: none;
  font-weight: 700;
  transition: text-decoration ${({ theme }) => theme.timing}
    ${({ theme }) => theme.timingFunction};
  &:hover,
  &:focus {
    color: inherit;
    outline: 2px solid ${({ theme }) => theme.colors.accentColor};
    border-radius: 0.3em;
    outline-offset: 0.3em;
  }
`;
