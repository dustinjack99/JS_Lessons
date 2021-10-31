const ListItems = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </>
  );
};

export default ListItems;
