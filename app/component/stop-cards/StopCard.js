import React from 'react';
import Link from 'react-router/lib/Link';
import StopCardHeader from './StopCardHeader';
import Card from '../card/card';

class StopCard extends React.Component {
  render() {
    if (!this.props.stop || !this.props.children || this.props.children.length === 0) {
      return false;
    }
    const prefix = this.props.isTerminal ? 'terminaalit' : 'pysakit';

    return (
      <Link to={`/${prefix}/${this.props.stop.gtfsId}`} className="no-decoration">
        <Card className={this.props.className}>
          <StopCardHeader
            stop={this.props.stop}
            icons={this.props.icons}
            distance={this.props.distance}
          />
          {this.props.children}
        </Card>
      </Link>
    );
  }
}

StopCard.propTypes = {
  stop: React.PropTypes.shape({
    gtfsId: React.PropTypes.string.isRequired,
  }),
  icons: React.PropTypes.arrayOf(React.PropTypes.node),
  distance: React.PropTypes.number,
  className: React.PropTypes.string,
  children: React.PropTypes.node,
  isTerminal: React.PropTypes.bool,
};

export default StopCard;
