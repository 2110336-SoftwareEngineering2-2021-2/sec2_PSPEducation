import React, { useState } from "react";
import "./mainCourseCard.css";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";

import "react-datepicker/dist/react-datepicker.css";

import { listCourseData } from "../../dummyData";

// const WorkProgressInfo = (props) =>{
//   const [tableitems, setTableitems] = useState([]);
//   const getTableData = (items) =>{
//     const data: any = [];
//     items.map((item)=>{
//         data.push({
//           id: item.id,
//           courseName: item.courseName,
//           subject: item.subject,
//           lesson: item.lesson,
//           price: item.price,
//           capacity: item.capacity,

//         })
//     })
//     setTableitems(data);
//     console.log("table data is ", data)
//   }
// }
function handleSort(value) {
  console.log(value);
}

const columns = [
  {
    Header: "Course name",
    accessor: "courseName",
  },
  {
    Header: "Subject",
    accessor: "subject",
  },
  {
    Header: "Lesson",
    accessor: "lesson",
  },
  {
    Header: "Price",
    accessor: "price",
    maxWidth: 80,
  },
  {
    Header: "Capacity",
    accessor: "capacity",
    maxWidth: 80,
  },
  {
    Header: "Option",
    minWidth: 110,
    accessor: "id",
    Cell: ({ row }) => {
      const data = row;
      console.log("row original data is", data);
      return (
        <div>
          <button
            value={row.id}
            className="mainCourseFormSubmit"
            onClick={() => handleSort(row.id)}
          >
            view
          </button>
          <button
            className="mainCourseFormSubmit"
            onClick={() => handleSort(row.id)}
          >
            edit
          </button>
        </div>
      );
    },
  },
  {
    Header: "Publish",
    accessor: "publish",
    maxWidth: 60,
    Cell: ({ cell }) => (
      <button className="mainCourseFormSubmit">publish</button>
    ),
  },
];

export default function MainCourseCard() {
  return (
    <div className="mainCourse">
      <div className="mainCourseTitle">List Course</div>
      <ReactTable data={listCourseData} columns={columns} />
    </div>
  );
}
