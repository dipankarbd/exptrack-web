import styled from 'styled-components';

import { Label } from '../elements/typography/label';
import { NumberTextInput } from '../elements/inputs/number';

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0.4rem;
`;

const StyledLabel = styled(Label)`
  width: 6.4rem;
`;

export interface FormNumberFieldProps {
  label: string;
  name: string;
  value?: number;
  disabled?: boolean;
  className?: string;
}

export const FormNumberField: React.FC<FormNumberFieldProps> = ({
  label,
  name,
  value,
  disabled = false,
  className,
}) => {
  return (
    <Container className={className}>
      <StyledLabel text={label} name={name} />
      <NumberTextInput name={name} value={value} disabled={disabled} />
    </Container>
  );
};
