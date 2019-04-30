import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
`;

export const Favorite = styled.div`
  margin-bottom: 24px;
`;

export const Playlist = styled.div`
  display: flex;
  overflow-x: scroll;
  max-width: 100%;
  padding-top: 16px;
  border-top: 1px dotted #d3dadb;
  margin: 8px 0 24px;
`;

export const PlaylistItem = styled.div`
  text-align: center;

  :not(:first-child) {
    margin-left: 16px;
  }
`;

export const PlaylistItemImage = styled.img`
  width: 120px;
  height: 120px;
`;

export const Recommend = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  border-top: 1px dotted #d3dadb;
  margin-top: 8px;
  height: calc(100% - 32px);
  overflow: scroll;
`;

export const RecommendList = styled.div`
  display: flex;

  :not(:first-child) {
    margin-top: 12px;
  }
`;

export const RecommendListImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 24px;
`;

export const Artists = styled.div`
  display: flex;
  overflow-x: scroll;
  max-width: 100%;
  padding-top: 16px;
  border-top: 1px dotted #d3dadb;
  margin: 8px 0 24px;
`;

export const ArtistsList = styled.div`
  text-align: center;

  :not(:first-child) {
    margin-left: 16px;
  }
`;

export const ArtistsListImage = styled.img`
  width: 120px;
  height: 120px;
  border: 1px solid transparent;
  border-radius: 0 50% 50% 50%;

`;

export const Suggests = styled.div`
  display: flex;
  min-height: 0;
  justify-content: space-between;

  > div {
    flex-basis: 48%;
  }
`;
