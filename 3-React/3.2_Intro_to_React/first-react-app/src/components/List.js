import ListItems from "./ListItem";

const List = () => {
  return (
    <ul>
      <ListItems items={["neal", "tim", "dan", "ben"]} />
    </ul>
  );
};

export default List;
