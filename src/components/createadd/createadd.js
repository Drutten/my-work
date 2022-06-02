import './createadd.css';

function CreateAdd() {
  return (
    <div className='CreateAdd'>
        <form id='createadd' action='' method='post'>
            <div class='container'>
                <label for='title'><b>Title</b></label>
                <input type='text' placeholder='Enter Title' id='title' name='title' required />
                <br />
                <label for='description'><b>Description</b></label>
                <textarea name='description' placeholder='Enter Job Description' rows='4' cols='50' required></textarea>
                <br />
                <label for='startdate'><b>Title</b></label>
                <input type='text' placeholder='Enter Start Date' id='startdate' name='startdate' required />
                <br />
                <button type='submit'>Create add</button>
            </div>
        </form>
    </div>
  );
}

export default CreateAdd;