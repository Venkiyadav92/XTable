import { useState } from "react";
let data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

export default function XTable() {
  const [table, setTable] = useState(data);
  const [dateSort,setDateSort] = useState(true);
  const [viewSort,setViewSort] = useState(true);
  function sortByDate(){
    const sortedData=[...table].sort((a,b)=> {return( dateSort ? (new Date(a.date) - new Date(b.date)) : (new Date(b.date) - new Date(a.date)) )})
    setTable(sortedData)
    setDateSort(item => !item)

  }
  function sortByView(){
    const sortedData=[...table].sort((a,b)=> {return( viewSort ? new Date(a.views) - new Date(b.views) : new Date(b.views) - new Date(a.views))})
    setTable(sortedData)
    setViewSort(!viewSort)
  }

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <h1>Date and Views Table</h1>
      <div style={{display:"flex",justifyContent:"center",gap:"5px"}}>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByView}>Sort by Views</button>
      </div>
      <table border={2}>
        <thead>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Values</th>
          </tr>
        </thead>
        <tbody>
          {table.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
