import styled from "styled-components";

interface IWrapperProps {
  backgroundImage: string;
  mainColor: string;
  subColor: string;
}

interface ITextProps {
  color: string;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  background: linear-gradient(-45deg,
    ${(props: IWrapperProps) => props.mainColor.replace("rgb", "rgba").replace(")", ",.8)")} 60%,
    ${(props: IWrapperProps) => props.subColor.replace("rgb", "rgba").replace(")", ",.3)")}
  ), url(${(props: IWrapperProps) => props.backgroundImage});
  background-size: cover;
  padding: 32px 48px;
  height: 100vh;
`;

export const Name = styled.div`
  letter-spacing: .01em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Detail = styled.div`
  color: ${(props: ITextProps) => props.color};
  display: flex;
  width: 35%;
  flex-direction: column;
  justify-content: space-around;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const PopularityListWrapper = styled.div`
  height: 48%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display:none;
  }
`;

export const PopularityList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  padding: 4px 0;

  & > div:first-child {
    min-width: 26px;
    text-align: right;
  }
`;

export const PopularityListDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 24px;
`;
