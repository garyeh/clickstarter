import React from 'react';

const RewardDetail = ({reward, deleteReward, currentUser, creator, fetchProjectDetail }) => {
  const destroyReward = () => {
    deleteReward(reward).then(() => fetchProjectDetail(reward.project_id));
  };
  return (
    <section className="detailContainer">
      <div className="detailBox">
        <h2 id="headerAmount">{`Pledge $${reward.amount}`}</h2>
        <p id="headerTitle">{reward.title}</p>
        <p id="headerDescription">{reward.description}</p>
        <div>{reward.deliver_date ? <div id="headerDelivery"><div>ESTIMATED DELIVERY</div><div>{reward.deliver_date}</div></div> : ""}</div>
        <p id="headerLimit">{`Limited (${reward.limit})`}</p>
      </div>
      <div>
        {
          (currentUser && currentUser.username === creator) ?
          <button onClick={ destroyReward }>Delete this reward</button>
          :
          null
        }
      </div>
    </section>
  );
};

export default RewardDetail;