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
`;

export const Image = styled.div`
  position: relative;
`;

export const Name = styled.span`
  color: ${(props: ITextProps) => props.color};
  font-size: 80px;
  font-weight: bold;
  letter-spacing: .01em;
  position: absolute;
  bottom: 30%;
  left: 5%;
  line-height: 1.1;
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

export const PopularityListDescriptionName = styled.p`
  font-weight: bold;
`;

export const PopularityListDescriptionArtist = styled.p`
  font-size: 10px;
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
  padding: 0 16px 16px 0;
`;

export const TrackImage = styled.img`
  width: 100%;
`;

export const Player = styled.div`
  display: flex;
  justify-content: space-around;
`;
