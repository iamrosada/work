const ListHost = ({ data }) => {
  /* const { data = [] } = props; */
  const trans = Object.values(data?.event.hosts?.edges);
  console.log("trans", trans);

  return (
    <div>
      <div>{data?.event.name}</div>
      {trans.map((t) => {
        return (
          <div key={t.node.profile.firstName}>
            <h1>{t.node.profile.email}</h1>
            <h1>{t.node.profile.firstName}</h1>
            {/*  <div>
              <span>{t.node.profile.firstName}</span>
              <span>{t.node.profile.email}</span>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};
export default ListHost;
