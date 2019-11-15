import React from "react";
import ReactTable from "react-table";

const CandidateList = () => {
  const data = [
    {
      name: "Candidate 1",
      email: "*****@gmail.com",
      user: {
        score: "4.9"
      }
    },
    {
      name: "Candidate 2",
      email: "*****@gmail.com",
      user: {
        score: "3.2"
      }
    },
    {
      name: "Candidate 3",
      email: "*****@gmail.com",
      user: {
        score: "2.7"
      }
    },
    {
      name: "Candidate 4",
      email: "*****@gmail.com",
      user: {
        score: "4.6"
      }
    }
  ];

  const columns = [
    {
      Header: "Name",
      accessor: "name" // String-based value accessors!
    },
    {
      Header: "ID/Email",
      accessor: "email",
      Cell: props => <span className="number">{props.value}</span> // Custom cell components!
    },
    {
      id: "score", // Required because our accessor is not a string
      Header: "Score",
      accessor: d => d.user.score // Custom value accessors!
    }
  ];
  return <ReactTable data={data} columns={columns} />;
};

export default CandidateList;
