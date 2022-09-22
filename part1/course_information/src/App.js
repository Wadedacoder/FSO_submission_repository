// import logo from './logo.svg';
// import './App.css';

const Header = (props) => {
  console.log(props);
  return (
    <h1>{props.course}</h1>
  );
}

const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
}

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part part={props.part[0]}/>
      <Part part={props.part[1]}/>
      <Part part={props.part[2]}/>
    </div>
  );
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
  );
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content part = {parts} />
      {/* <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} /> */}
      <Total part = {parts} />
    </div>
  );
};
export default App;
