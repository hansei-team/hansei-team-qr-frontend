import React from 'react';

import { colors } from '../../styles';

import * as S from './styled';

export type SocialType = 'GOOGLE';

const socialButtonStyles: {
  [key in SocialType]: {
    color: string;
    background: string;
    activeBackground: string;
    borderColor?: string;
    fontWeight?: number;
  };
} = {
  GOOGLE: {
    color: '#6E6D84',
    background: '#FFFFFF',
    activeBackground: colors.outline,
    borderColor: colors.outline,
    fontWeight: 500,
  },
};

export interface SocialButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type: 'social';
  socialType: SocialType;
  iconUrl: string;
}

export type ButtonProps = SocialButtonProps | React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ type, ...props }) => {
  switch (type) {
    case 'social': {
      const { socialType, iconUrl, children } = props as Omit<SocialButtonProps, 'type'>;

      return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <S.ButtonElement {...props} {...socialButtonStyles[socialType]}>
          <img src={iconUrl} width="24" height="24" alt={socialType} />
          {children}
        </S.ButtonElement>
      );
    }

    default:
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <S.ButtonElement type={type} {...props} />;
  }
};
