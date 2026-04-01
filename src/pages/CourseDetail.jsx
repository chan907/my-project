import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/courses/${id}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h1>{id} Course Materials</h1>

      <h2>Materials</h2>
      <ul>
        {data?.materials?.map((item, i) => (
          <li key={i}>
            📄 {item.name}
            <a href={item.file} download style={{ marginLeft: "10px" }}>
              ⬇ Download
            </a>
          </li>
        ))}
      </ul>

      <h2>Video Lectures</h2>
      {data?.videos?.map((link, i) => (
        <iframe key={i} src={link} width="400" height="200" title="video" />
      ))}
    </div>
  );
};

export default CourseDetail;