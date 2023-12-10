/* eslint-disable react/prop-types */
import DeleteIcon from "@mui/icons-material/Delete";
export default function ListItems(props) {
  return (
    <div>
      <li
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        {props.id + 1}. {props.text}{" "}
        <button className="delete">
          <DeleteIcon />
        </button>
      </li>
    </div>
  );
}
