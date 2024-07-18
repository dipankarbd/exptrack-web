import { useNavigate, useParams } from 'react-router-dom';
import { format, parse } from '@formkit/tempo';

import {
  useDeleteTransfer,
  useDeleteTransferLoaderData,
} from '../../hooks/graphql';
import styled from 'styled-components';
import { Heading } from '../elements/typography/heading';
import { CaptionedText } from '../compounds/captioned-text';
import { ErrorText } from '../elements/typography/error';
import { DefaultButton } from '../elements/buttons/default-button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 17rem;
  margin-top: 2rem;
`;

const DeleteTransferPage: React.FC = () => {
  const navigate = useNavigate();
  const { transferId } = useParams();
  const { transfer, loading, error } = useDeleteTransferLoaderData(
    transferId == undefined ? 0 : parseInt(transferId)
  );

  const { error: deleteError, deleteTransfer } = useDeleteTransfer();

  if (loading) return <Heading text="Loading..." />;
  if (error) return <ErrorText text={`Error : ${error.message}`} />;
  if (transfer === null || transfer === undefined)
    return <ErrorText text="Error : Unable to load transfer" />;

  const handleYes = async () => {
    const id = transferId == undefined ? 0 : parseInt(transferId);
    const deleted = await deleteTransfer(id);
    if (deleted) {
      navigate('/transfers/');
    }
  };

  const handleNo = () => {
    navigate(-1);
  };

  const date = format(parse(transfer?.date), 'YYYY-MM-DD', 'en');

  return (
    <Container>
      <Heading
        text="Are you sure you want to delete the following transfer?"
        variant="large"
      />

      <CaptionedText caption="Amount" text={`${transfer.amount}`} />
      <CaptionedText caption="From Account" text={transfer.fromAccount.name} />
      <CaptionedText caption="To Account" text={transfer.toAccount.name} />
      <CaptionedText caption="Date" text={`${date}`} />

      {deleteError && <ErrorText text="Unable to delete!" />}

      <ButtonsContainer>
        <DefaultButton title="No" onClick={handleNo} />
        <DefaultButton title="Yes" onClick={handleYes} />
      </ButtonsContainer>
    </Container>
  );
};

export default DeleteTransferPage;
