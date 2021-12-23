const ReturnResults = ({ titles }) => {
  for (let i = 0; i < 21; i++) {
    return (
      <div>
        <h2>{titles.results[i].title}</h2>
        <img alt={`${titles.results[i].title}`} src={`${titles.results[i].image_url}`} />
      </div>
    );
  }
};

export default ReturnResults;
