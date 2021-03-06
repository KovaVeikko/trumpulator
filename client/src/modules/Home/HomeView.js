import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import PropTypes from 'prop-types'
import TextForm from '../../components/TextForm'
import ResultText from '../../components/ResultText'
import Tweet from '../../components/Tweet'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Trumpulator</title>
        </Helmet>
        <div id="bg"></div>
        <section>
          <div id="page-title">
            <h1>Trumpulator</h1>
          </div>
          <TextForm handleSubmit={(text) => this.props.homeActions.fetchHeadline(text)}/>
          {this.props.home.error &&
            <Tweet error={this.props.home.error} loading={false}/>
          }
          {this.props.home.isFetching &&
            <Tweet text="" loading={true}/>
          }
          {!this.props.home.isFetching && this.props.home.data.text &&
            <Tweet text={this.props.home.data.tweet} url={this.props.home.data.url} loading={false}/>
          }
      </section>
      </div>
    )
  }
}

Home.propTypes = {
  homeActions: PropTypes.object.isRequired,
  home: PropTypes.object
}

export default Home
