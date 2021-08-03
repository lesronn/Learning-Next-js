export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((dum) => {
    return {
      params: { id: dum.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
    props: {
      dum: data,
    },
  };
};
const Details = ({ dum }) => {
  return (
    <div>
      <h1>{dum.name}</h1>
      <p>{dum.email}</p>
      <p>{dum.website}</p>
      <p>{dum.address.city}</p>
    </div>
  );
};
export default Details;
