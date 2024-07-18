import styled from 'styled-components';

import { Color } from '../color';

const HSmall = styled.h1`
  font-family: 'Barlow', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.8rem;
  color: ${Color.Gray100};
`;

const HMedium = styled.h1`
  font-family: 'Barlow', sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.2rem;
  color: ${Color.Gray100};
`;

const HLarge = styled.h1`
  font-family: 'Barlow', sans-serif;
  font-size: 2rem;
  line-height: 2.6rem;
  font-weight: 400;
  color: ${Color.Gray100};
`;

const HXL = styled.h1`
  font-family: 'Barlow', sans-serif;
  font-size: 2.8rem;
  line-height: 3.6rem;
  font-weight: 400;
  color: ${Color.Gray100};
`;

const HXXL = styled.h1`
  font-family: 'Barlow', sans-serif;
  font-size: 3.2rem;
  line-height: 4rem;
  font-weight: 400;
  color: ${Color.Gray100};
`;

const HLightXL = styled.h1`
  font-family: 'Barlow', sans-serif;
  font-size: 4.2rem;
  font-weight: 300;
  line-height: 5rem;
  color: ${Color.Gray100};
`;

const HLightXXL = styled.h1`
  font-family: 'Barlow', sans-serif;
  font-size: 5.4rem;
  font-weight: 300;
  line-height: 6.4rem;
  color: ${Color.Gray100};
`;

export interface HeadingProps {
  text: string;
  variant?:
    | 'small'
    | 'midum'
    | 'large'
    | 'xl'
    | 'xxl'
    | 'light-xl'
    | 'light-xxl';
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  text,
  variant = 'small',
  className,
}) => {
  if (variant === 'midum') {
    return <HMedium className={className}>{text}</HMedium>;
  } else if (variant === 'large') {
    return <HLarge className={className}>{text}</HLarge>;
  } else if (variant === 'xl') {
    return <HXL className={className}>{text}</HXL>;
  } else if (variant === 'xxl') {
    return <HXXL className={className}>{text}</HXXL>;
  } else if (variant === 'light-xl') {
    return <HLightXL className={className}>{text}</HLightXL>;
  } else if (variant === 'light-xxl') {
    return <HLightXXL className={className}>{text}</HLightXXL>;
  }
  return <HSmall className={className}>{text}</HSmall>;
};
