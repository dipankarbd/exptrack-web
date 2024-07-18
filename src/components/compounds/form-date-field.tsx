import styled from 'styled-components';

import { Label } from '../elements/typography/label';
import { DateInput } from '../elements/inputs/date';

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0.4rem;
`;

const StyledLabel = styled(Label)`
  width: 6.4rem;
`;

export interface FormDateFieldProps {
  label: string;
  name: string;
  value?: string;
  disabled?: boolean;
  className?: string;
}

export const FormDateField: React.FC<FormDateFieldProps> = ({
  label,
  name,
  value,
  disabled = false,
  className,
}) => {
  return (
    <Container className={className}>
      <StyledLabel text={label} name={name} />
      <DateInput name={name} value={value} disabled={disabled} />
    </Container>
  );
};
