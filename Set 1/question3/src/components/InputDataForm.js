import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../Action/addData";
import shortid from "shortid";
import { delData } from "../Action/delData";
import { upDateData } from "../Action/upDateData";

function InputDataForm() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.data.data);

  const [title, setTitle] = useState("");
  const [des, setdes] = useState("");
  const [date, setDate] = useState("");

  const onClickHandeller = (e) => {
    e.preventDefault();
    dispatch(
      addData({ title: title, des: des, date: date, id: shortid.generate() })
    );
    setTitle("");
    setDate("");
    setdes("");
  };

  return (
    <div>
      Please Enter The Following Data
      <br />
      <input
        placeholder="Post Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Post Des"
        value={des}
        onChange={(e) => {
          setdes(e.target.value);
        }}
      />
      <br />
      <input
        type="date"
        placeholder="Post Date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <br />
      <button onClick={onClickHandeller}>Add Data</button>
      <br />
      <div>
        <table>
          <thead>
            <th>ID</th>
            <th>Title</th>

            <th>Des</th>
            <th>Date</th>
          </thead>
          <tbody>
            {selector.map((data) => (
              <tr>
                <td>{data.id}</td>

                <td>{data.title}</td>

                <td>{data.des}</td>

                <td>{data.date}</td>

                <td>
                  <button
                    onClick={() => {
                      dispatch(delData(data.id));
                    }}
                  >
                    Delete
                  </button>


                  <button
                    onClick={() => {
                      dispatch(
                        upDateData({ title: title, des: des })
                      );
                      
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InputDataForm;
