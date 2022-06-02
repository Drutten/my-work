import './Home.css';
import MySkills from '../my-skills/MySkills';
import Menu from '../menu/Menu';

function Home() {
  return (
    <div className="Home">
        <Menu />
        <MySkills />     
    </div>
  );
}

export default Home;