import styled from 'styled-components';

import { Label } from '../elements/typography/label';
import { DefaultTextInput } from '../elements/inputs/default-text';

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0.4rem;
`;

const StyledLabel = styled(Label)`
  width: 6.4rem;
`;

export interface FormTextFieldProps {
  label: string;
  name: string;
  placeholder: string;
  value?: string;
  error?: string;
  disabled?: boolean;
  secured?: boolean;
  className?: string;
}

export const FormTextField: React.FC<FormTextFieldProps> = ({
  label,
  name,
  placeholder,
  value,
  error,
  disabled = false,
  secured,
  className,
}) => {
  return (
    <Container className={className}>
      <StyledLabel text={label} name={name} />
      <DefaultTextInput
        name={name}
        placeholder={placeholder}
        value={value}
        error={error}
        disabled={disabled}
        secured={secured}
      />
    </Container>
  );
};
