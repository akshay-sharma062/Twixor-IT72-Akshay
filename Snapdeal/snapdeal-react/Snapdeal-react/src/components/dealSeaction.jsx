import data from "../data/products.data.json";
import Card from "./Card";

const DealOfDay = () => {
  return (
    <>
      <h2 className="section-title">Deal Of The Day</h2>
      <div className="scroll-row">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default DealOfDay;