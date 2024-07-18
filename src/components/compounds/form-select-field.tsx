import styled from 'styled-components';

import { Label } from '../elements/typography/label';
import { SelectInput } from '../elements/inputs/select';

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0.4rem;
`;

const StyledLabel = styled(Label)`
  width: 6.4rem;
`;

export interface FormSelectFieldProps {
  label: string;
  name: string;
  items: { text: string; value: string }[];
  value?: string;
  disabled?: boolean;
  className?: string;
}

export const FormSelectField: React.FC<FormSelectFieldProps> = ({
  label,
  name,
  value,
  disabled = false,
  items,
  className,
}) => {
  return (
    <Container className={className}>
      <StyledLabel text={label} name={name} />
      <SelectInput
        name={name}
        value={value}
        disabled={disabled}
        items={items}
      />
    </Container>
  );
};
