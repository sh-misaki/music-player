import * as React from "react";

import { CurryList } from "../components/organisms/CurryList";
import { MainTitle, MainContent } from "../styled/Page";

interface IProps {
  curries: ICurry[];
}

interface ICurry {
  id: number;
  name: string;
  imageUrl: string;
}

export default class BlogsPage extends React.Component<IProps> {
  protected static async getInitialProps() {
    try {
      // const response = await fetch('https://??????.???/curries/india');
      // const json = await response.json();

      // 通常では上記のように外部APIサーバーに対してデータを取得しにいきますが、今回は簡潔に済ますために
      // static async getInitialProps() で直接データを returnすることにします。
      // 下記のデータがAPIサーバーから返ってくると想定して、進めます。
      // 画像はpixabay様の著作権フリー・帰属表示不要の画像を使っています。
      // https://pixabay.com/ja/
      const json: ICurry[] = [
        {
          id: 1,
          name: "Curry1",
          imageUrl: "/static/curry1.jpg"
        },
        {
          id: 2,
          name: "Curry2",
          imageUrl: "/static/curry2.jpg"
        },
        {
          id: 3,
          name: "Curry3",
          imageUrl: "/static/curry3.jpg"
        },
        {
          id: 4,
          name: "Curry4",
          imageUrl: "/static/curry4.jpg"
        },
        {
          id: 5,
          name: "Curry5",
          imageUrl: "/static/curry5.jpg"
        },
        {
          id: 6,
          name: "Curry6",
          imageUrl: "/static/curry6.jpg"
        }
      ];

      return {
        curries: json
      };
    } catch (e) {
      return {
        curries: []
      };
    }
  }

  public render() {
    return (
      <MainContent>
        <MainTitle>Indian Curries</MainTitle>
        <CurryList curries={this.props.curries} />
      </MainContent>
    );
  }
}
