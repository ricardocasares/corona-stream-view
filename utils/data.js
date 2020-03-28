import fetch from "isomorphic-unfetch";
import { ago } from "./date";
import { toNumber } from "./number";
import { capitalize } from "./string";

const ENDPOINT = process.env.ENDPOINT;

const toJson = async r => await r.json();

const extract = ({ query }) => ({
  data: { countries = [], results: data = [] },
  errors: [error = false] = []
}) => {
  if (error) console.error(error);
  return { props: { query, data, countries } };
};

export const getServerSideProps = async ctx => {
  const days = toNumber(ctx.query.days);
  const date = ago(days);
  const country = capitalize(ctx.query.country);

  return fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: `{
        results(countries: ["${country}"], date: { gt: "${date}"}) {
          deaths
          confirmed
          recovered
        }
        countries {
          name
        }
      }`
    })
  })
    .then(toJson)
    .then(extract({ query: { days, country } }))
    .catch(console.error);
};
