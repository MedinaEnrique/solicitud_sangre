import Card from "./Card.jsx";

const ListCard = ({ lista }) => {
  return (
    <div className="row mx-2">
      {lista && lista.map((item) => (
        <Card key={item.id} record={item} />
      ))}
    </div>
  );
};

export default ListCard;
