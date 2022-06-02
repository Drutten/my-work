import './MySkills.css';
import { useState, useEffect } from 'react';

function MySkills() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            const mockSkills = [
                'java',
                'javascript',
                'python',
            ]
            setSkills(mockSkills);
            // const result = await service.getSkills();
            // if (result.error) {
            //     setError(result.error);
            // }
            // else {
            //     setSkills(result);
            // }
        }
        fetchSkills();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div className="MySkills">

        <ul className="skill-wrapper">
            {displayLoading()}
            {skills && skills.map(p => 
                <li className="empty-space"></li>    
            )} 
        </ul>
        
    </div>
  );
}

export default MySkills;




