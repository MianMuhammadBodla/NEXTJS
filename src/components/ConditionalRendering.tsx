import React from 'react'

const ConditionalRendering = () => {
    let content;
    let isLoggedIn=false;
    if (isLoggedIn) {
      content = <div>Admin Panel</div>;
    } else {
      content = <div>Login Panel </div>;
    }
    return (
      <div>
        {content}
      </div>
    );
}

export default ConditionalRendering