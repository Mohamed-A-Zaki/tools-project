import { CardProps } from "../../types/types.type";
import CardComp from "../CardComp/CardComp";

export type MainPageProps = {
  data: CardProps[];
};

export default function MainPage({ data }: MainPageProps) {
  return (
    <div className="row row-cols-1 row-cols-xl-2 g-3">
      {data.map((ele) => {
        return (
          <div className="col" key={ele.id}>
            <CardComp {...ele} />
          </div>
        );
      })}
    </div>
  );
}
