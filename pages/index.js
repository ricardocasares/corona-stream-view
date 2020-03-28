import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Stream } from "../components/Stream";
import { truncate } from "../utils/string";
import { getServerSideProps } from "../utils/data";

const Index = ({ data, countries, query }) => {
  const router = useRouter();
  const [days, setDays] = useState(query.days);
  const [country, setCountry] = useState(query.country);

  const update = fn => e => fn(e.target.value);

  useEffect(() => {
    router.push(`/?days=${days}&country=${country}`);
  }, [days, country]);

  return (
    <div className="page">
      <Head>
        <title>Coronavirus Stream view</title>
      </Head>
      <nav className="nav">
        Last
        <select className="select" value={days} onChange={update(setDays)}>
          {[15, 30, 60].map(x => (
            <option key={x}>{x}</option>
          ))}
        </select>
        days in
        <select
          className="select"
          value={country}
          onChange={update(setCountry)}
        >
          {countries.map(({ name }) => (
            <option key={name} value={name}>
              {truncate(16)(name)}
            </option>
          ))}
        </select>
      </nav>
      <Stream data={data}></Stream>
    </div>
  );
};

export { getServerSideProps };
export default Index;
