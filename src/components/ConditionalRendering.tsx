import React from 'react'

const ConditionalRendering = () => {
    let content;
    let isLoggedIn=false;
    let newCondition=true
    let newcon1=true
    if (isLoggedIn) {
      content = <div>Admin Panel</div>;
    } else {
      content = <div>Login Panel </div>;
    }
    return (
      <div className='flex flex-col p-12 gap-5'>
        {content}
        if you preffermore compact code, you can use the Conditional ? operator. unlikeif, it works inside jsx :
        {newCondition ? <div className='bg-slate-500'>Codition true
         </div> : <div className='bg-blue-500'>Codition false </div>}
        {newcon1 && <div className='bg-red-500'> and Codition true </div> }
      </div>
    );
}

export default ConditionalRendering