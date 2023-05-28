import React from 'react';
import styled from 'styled-components';

const FooterBody = styled.div`
  width: 100vw;
  height: 58px;
  display: flex;
  position: absolute;
  bottom: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
const FooterTextUp = styled.div`
  position: absolute;
  left: 44.14%;
  right: 44.14%;
  top: 23%;
  bottom: 50%;

  font-family: 'Inter';
  font-weight: 400;
  font-size: 12px;
  line-height: 88.02%;
  color: #888888;
`;
const FooterTextDown = styled.div`
  position: absolute;
  left: 43.22%;
  right: 42.73%;
  top: 60%;
  bottom: 18.97%;

  font-family: 'Inter';
  font-weight: 400;
  font-size: 12px;
  line-height: 88.02%;
  color: #888888;
`;

function Footer() {
  return (
    <FooterBody>
      <FooterTextUp>개인정보 처리방침 | 이용 약관</FooterTextUp>
      <FooterTextDown>All rights reserved @ Codestates</FooterTextDown>
    </FooterBody>
  );
}

export default Footer;
