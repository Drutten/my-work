import './Menu.css';

function Menu(props) {
  return (
    <div className="Menu">
        <p>Jobs</p>
        <hr />
        <a href="#">List jobs</a>
        { props.isManager == true &&
            <a href="#">Create New</a>
        }        
        <br />
        <p>Skills</p>
        <hr />
        <a href="#">My skills</a>
        { props.isManager == true &&
            <a href="#">Search skills</a>
        }        
    </div>
  );
}

export default Menu;