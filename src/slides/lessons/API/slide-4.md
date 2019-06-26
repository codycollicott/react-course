## API Calls Part 3

Now that we can see the data going from the API call to the state of our component we can use that data within our render function.

``` JS
Class Test extends React.Component {
  componentDidMount() {
    ...
  }
  render() {
    const students = this.state.students;
    return (
      <div>
        {students && students.map(student => (
          <h4> {student.title} </h4>
        ))}
      </div>
    )
  }
}
```


---
