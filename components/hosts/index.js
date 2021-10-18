const ListHost = ({ data }) => {
  const getData = Object.values(data?.event.hosts?.edges);
  console.log("getData", getData);

  return (
    <div>
      <h2>{data?.event.name}</h2>
      {getData.map((t) => {
        return (
          <div key={t.node.profile.email}>
            <h1>{t.node.profile.firstName}</h1>
            <h1>{t.node.profile.email}</h1>
          </div>
        );
      })}
    </div>
  );
};
export default ListHost;
