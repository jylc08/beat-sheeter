import { YoutubeOutlined } from "@ant-design/icons";
import { Layout, Typography } from "antd";
import { styled } from "styled-components";

export const Header = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderActions = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

const HeaderTitle = styled(Typography.Text)`
  color: white;
  margin-left: 10px;
  font-weight: 700;
  font-size: 18px;
  &::before {
    content: "Beat Sheeter";
  }
`;

const HeaderIcon = styled(YoutubeOutlined)`
  > svg {
    width: 40px;
    height: 40px;
  }
  color: white;
`;

const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;  
`;

export const HeaderLogo = () => {
  return (
    <HeaderLogoContainer>
      <HeaderIcon/><HeaderTitle/>
    </HeaderLogoContainer>
  )
};