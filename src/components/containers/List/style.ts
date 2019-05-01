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
    ${(props: IWrapperProps) => props.mainColor.replace("rgb", "rgba").replace(")", ",.7)")} 40%,
    ${(props: IWrapperProps) => props.subColor.replace("rgb", "rgba").replace(")", ",.2)")}
  ), url(${(props: IWrapperProps) => props.backgroundImage});
  background-size: cover;
  padding: 32px 48px;
  height: 100vh;
`;

export const Name = styled.div`
  letter-spacing: .01em;
  display: flex;
  align-items: center;
  padding-top: 240px;
`;

export const Detail = styled.div`
  color: ${(props: ITextProps) => props.color};
  display: flex;
  width: 35%;
  flex-direction: column;
  justify-content: space-between;
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
`;

export const PopularityListDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 24px;
`;

export const TrackListWrapper = styled.div`
  height: 48%;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;

  ::-webkit-scrollbar {
    display:none;
  }
`;

export const TrackList = styled.div`
  width: calc(100% / 3);
  font-size: 12px;
  padding-bottom: 16px;

  :not(:nth-child(3n)) {
    padding-right: 12px;
  }
`;

export const TrackImage = styled.img`
  width: 100%;
`;
