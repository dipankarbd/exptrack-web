import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Content = styled.main`
  flex-grow: 1;
  padding: 1rem;
`;

export interface RootContainer {
  sidebar?: React.ReactNode;
  content?: React.ReactNode;
}

export const RootContainer: React.FC<RootContainer> = ({
  sidebar,
  content,
}) => {
  return (
    <Container>
      {sidebar}
      <Content>{content}</Content>
    </Container>
  );
};
