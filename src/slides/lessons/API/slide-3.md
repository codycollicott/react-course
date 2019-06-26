## API Calls Part 3

Next up is modifing the state with the response we get from our API call, we do this by called the `this.setState()` inside the `.then()` method of our API call.

``` JS
Class Test extends React.Component {
  componentDidMount() {
    axios.get('https://codycollicott.github.io/yearbook/Data/students.json')
    .then(response => {
      this.setState({
        ...this.state,
        students: response.data
      })
    })
    .catch(error => {
      console.log("an error occured")
      console.log(error);
    })
  }
  render() {
    console.log(this.state.students);
    return (
      ...
    )
  }
}
```


---
