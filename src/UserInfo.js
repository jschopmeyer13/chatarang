import React from 'react';

import Avatar from './Avatar';
import SignOut from './SignOut';

const UserInfo = ({user}) =>{
    return (
        <div className="UserInfo" 
            style={styles.info}>
            <Avatar user={user} style={styles.Avatar} />
               
                    <div className="user" style={styles.user}>{user.userName}</div>
                    <SignOut />
                    {/* <a href="#">
                        <i className="fas fa-sign-out-alt"></i>
                    </a> */}
        </div>
    )

}
const styles = {
      info: {
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
      },
      Avatar: {
        marginRight: '0.5rem',
      },
      user: {
        flex: 1,
      },
      
}

export default UserInfo;