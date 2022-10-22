import React, {FC} from 'react';
import './JoinOurTeam.styles.scss';

export const JoinOurTeam: FC = () => {
    return <div className='joinOurTeam' id='joinOurTeam'>
        <h2 className="joinOurTeam__title">Join Our Team</h2>
        <p className="joinOurTeam__text">
            We are looking for specialist for full-time employment and for part-time collaboration.
            <span>Contact us <a href="mailto:hiring@noeon.ai">hiring@noeon.ai</a></span>
        </p>
        <p className="joinOurTeam__address">Noeon Research. Midtown Tower 18F,
            9-7-1 Akasaka, Minato-ku, Tokyo, Japan
            2022</p>
    </div>
}