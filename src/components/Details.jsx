import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';
import Navbar from './Navbar';

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const clickedProject = data.filter((project) => project.id == id);

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center px-3 my-14">
        {clickedProject.map((project) => (
          <Card key={project.id} project={project}></Card>
        ))}
      </div>
    </div>
  );
};

export default Details;
