import Card from "./Card.jsx";

const ListCard = ({ lista, setListaSolicitud }) => {
  return (
    <div className="row mx-2">
      {lista && lista.map((item) => (
        <Card key={item.id} record={item} listaSolicitud={lista} setListaSolicitud={setListaSolicitud} />
      ))}
    </div>
  );
};

export default ListCard;
