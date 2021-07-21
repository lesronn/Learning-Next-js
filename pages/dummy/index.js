import Head from "next/head";
import styles from "../../styles/Dummy.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      dummy: data,
    },
  };
};
const Dummy = ({ dummy }) => {
  return (
    <>
      <Head>
        <title>Dummy List | Dummy Listing</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1> All Dummy</h1>
        {dummy.map((dum) => (
          <Link href={"/dummy/" + dum.id} key={dum.id}>
            <a className={styles.single}>
              <h3>{dum.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};
export default Dummy;
