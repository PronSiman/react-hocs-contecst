import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import styled from 'styled-components';
import trendingFilms from '../services/filmsApi';
import FilmsList from '../FilmsList/FilmsList';
import FecthFilmsHoc from '../hoc/FecthFilmsHoc';

const HomeWrapper = styled.div`
  width: 960px;
  margin: 50px auto;
`;
const HomeTitle = styled.h1`
  text-align: center;
`;
const Home = props => {
  console.log(props)
  return <></>;
};
export default FecthFilmsHoc(
  'https://api.themoviedb.org/3/trending/movie/week?api_key=8d3bad898f5f4e3fbc1f0aeaae4cc708',
)(Home);
// class Home extends Component {
//   state = {
//     isLoading: false,
//     data: [],
//     error: null,
//   };

//   static defaultProps = {
//     url: '/',
//   };

//   componentDidMount() {
//     this.setState({ isLoading: true });
//     trendingFilms
//       .getTrandingFilms('week')
//       .then(data => this.setState({ data }))
//       .catch(error => this.setState({ error }))
//       .finally(() => this.setState({ isLoading: false }));
//   }

//   render() {
//     const { match, location } = this.props;
//     const { url } = match;

//     const { data, error, isLoading } = this.state;
//     return (
//       <HomeWrapper>
//         {error && <p>Whoops, something went wrong: {error.message}</p>}
//         {isLoading && <p>Loading</p>}
//         {data.length > 0 && (
//           <>
//             <HomeTitle>Trending video by week</HomeTitle>
//             <FilmsList films={data} matchUrl={url} location={location} />
//           </>
//         )}
//       </HomeWrapper>
//     );
//   }
// }

// Home.propTypes = {
//   url: PropTypes.string,
//   match: PropTypes.objectOf(PropTypes.any).isRequired,
//   location: PropTypes.objectOf(PropTypes.any).isRequired,
// };

// export default Home;
