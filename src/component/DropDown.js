import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import FooterBookmarkIcon from '../Img/북마크아이콘.png';
import FooterProductIcon from '../Img/상품아이콘.png';

const DropDownBody = styled.ul`
  position: absolute;
  width: 200px;
  height: 150px;
  background: #ffffff;
  border-radius: 10px;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
  margin: 210px -45px 0 0;
  padding: 0;
  right: 5%;
  top: -170%;

  &::after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 15px 15px;
    border-color: #ffffff transparent;
    top: -15px;
    left: 90px;
  }
`;
const DropdownSection = styled.li`
  display: flex;
  height: 50px;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
`;

const DropdownIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: 7px;
`;

function DropDown() {
  const navigate = useNavigate();
  return (
    <DropDownBody>
      <DropdownSection>OOO님, 안녕하세요!</DropdownSection>
      <DropdownSection
        onClick={() => {
          navigate('/products/list');
        }}
      >
        <DropdownIcon src={FooterProductIcon} />
        상품리스트 페이지
      </DropdownSection>
      <DropdownSection
        onClick={() => {
          navigate('/bookmark');
        }}
      >
        <DropdownIcon src={FooterBookmarkIcon} />
        북마크 페이지
      </DropdownSection>
    </DropDownBody>
  );
}

export default DropDown;
