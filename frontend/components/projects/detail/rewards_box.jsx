import React from 'react';
import { Route, Link } from 'react-router-dom';
import RewardDetail from './reward_detail';
import RewardModal from './reward_modal';

class RewardsBox extends React.Component {
  render() {
    let rewards = this.props.detail.rewards ? this.props.detail.rewards : [];
    let creator = this.props.detail.creator ? this.props.detail.creator.username : null;

    return (<div className="rewardsBox">
        <div>
          <h2>About this project</h2>
          <p id="detailText">{this.props.detail.details}</p>
        </div>

        <div>
          <h2>Support this project</h2>
          <div>
            {
              (this.props.currentUser && this.props.currentUser.username === creator) ?
              <RewardModal createReward={this.props.createReward}
                errors={this.props.errors}
                clearRewardErrors={this.props.clearRewardErrors}
                fetchProjectDetail={this.props.fetchProjectDetail}
                clearPledgeErrors={this.props.clearPledgeErrors} />
              :
              null
            }
          </div>
          <div>
            {rewards.map(reward => (
              <RewardDetail key={reward.id} reward={reward}
                deleteReward={this.props.deleteReward}
                createPledge={this.props.createPledge}
                currentUser={this.props.currentUser}
                clearPledgeErrors={this.props.clearPledgeErrors}
                creator={creator} history={this.props.history}
                fetchProjectDetail={this.props.fetchProjectDetail} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default RewardsBox;
