import React, {FC} from 'react';
import './JoinOurTeam.styles.scss';

export const JoinOurTeam: FC = () => {
    return <div className='joinOurTeam' id='join-our-team'>
        <h2 className="joinOurTeam__title">Join Our Team</h2>
        <p className="joinOurTeam__text">
            We are looking for specialist for full-time employment and for part-time collaboration.
            <span>Contact us <a href="mailto:hiring@noeon.ai">hiring@noeon.ai</a></span>
        </p>
    </div>
}