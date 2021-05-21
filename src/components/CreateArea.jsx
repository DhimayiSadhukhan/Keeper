import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [inp, setInp] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setInp((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  function submitInp(event) {
    props.onAdd(inp);
    setInp({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function expand() {
    setIsClicked(true);
  }

  return (
    <div>
      <form className="create-note">
        {isClicked && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={inp.title}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? "3" : "1"}
          onChange={handleChange}
          onClick={expand}
          value={inp.content}
        />
        <Zoom in={isClicked ? true : false}>
          <Fab onClick={submitInp}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
