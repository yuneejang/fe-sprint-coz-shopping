import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HeaderLogo from '../Img/로고.png';
import HeaderIcon from '../Img/아이콘.png';
import DropDown from './DropDown';

const HeaderBody = styled.div`
  position: sticky;
  height: 80px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
`;
// 헤더 왼쪽 css
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.img`
  position: absolute;
  left: 5.94%;
  right: 89.77%;
  top: 31.25%;
  bottom: 31.25%;
`;

const HeaderText = styled.div`
  position: absolute;
  left: 11.17%;
  right: 70.86%;
  top: 31.48%;
  bottom: 31.48%;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 88.02%;

  display: flex;
  align-items: center;

  color: #000000;
`;

// 헤더 오른쪽 css
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.img`
  position: absolute;
  right: 7.22%;
  top: 30.33%;
  bottom: 8.33%;
`;

function Header() {
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState(false);

  function DropDownChecked() {
    setIsClick(!isClick);
  }

  return (
    <HeaderBody>
      <HeaderLeft
        onClick={() => {
          navigate('/');
        }}
      >
        <Logo src={HeaderLogo}></Logo>
        <HeaderText>COZ Shopping</HeaderText>
      </HeaderLeft>
      <HeaderRight>
        <Icon src={HeaderIcon} onClick={DropDownChecked} />
        {isClick && <DropDown />}
      </HeaderRight>
    </HeaderBody>
  );
}

export default Header;
