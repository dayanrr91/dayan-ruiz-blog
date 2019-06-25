import React from 'react';
// import './Tweets.css';
import { withRouter } from 'react-router';
import { Timeline } from 'react-twitter-widgets'

class TweetsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: []
        };
    }

    render() {
        return (
            <div>
                <Timeline dataSource={{
                    sourceType: 'profile',
                    screenName: 'futbetin'
                }}
                    options={{
                        username: 'Futbetin',
                        height: '400'
                    }}
                    onLoad={() => console.log('Timeline is loaded!')}
                />
            </div>
        );
    }
}

const Tweets = withRouter(TweetsPage)

export { Tweets };