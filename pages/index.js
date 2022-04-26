import React, {Component} from 'react';
import AppHead from '../components/AppHead';
import Grid from '../components/Grid';
export async function getServerSideProps() {
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {data}, // will be passed to the page component as props
  };
}
export default class Home extends Component {
  render() {
    return (
      <>
        <AppHead />
        <Grid row>
          <p>Welcome</p>
        </Grid>
      </>
    );
  }
}
