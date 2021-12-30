import React from 'react';
import NinthLogo from './ninth-logo.png';
import { HeaderContainer, HeaderImage, HeaderText } from './Header.styles'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImage
        src={NinthLogo}
        alt='ninth-digit-logo'
      />
      <HeaderText className='f2'>
        NINTH DIGIT
      </HeaderText>
    </HeaderContainer>
  );
};

export default Header;
