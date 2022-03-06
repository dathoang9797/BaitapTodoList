import styled from 'styled-components/macro';
import { devices } from '@shared/DeviceSize';
import { List, Tag } from 'antd';

export const ListItemAntStyle = styled(List.Item)`
  display: flex;
  justify-content: space-between;
`;

export const TagAntStyle = styled(Tag)`
  margin: 10px;
  white-space: normal !important;
  max-width: 115px;
  word-break: break-all;
  font-size: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const TodoItemStyle = styled.div`
  display: flex;
  align-items: center;

  @media ${devices.tablet} {
    ${TagAntStyle} {
      max-width: 500px;
    }
  }

  @media ${devices.laptop} {
    ${TagAntStyle} {
      max-width: 100%;
    }
  }
`;
