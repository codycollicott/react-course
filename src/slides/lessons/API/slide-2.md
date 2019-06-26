## API Calls Part 2

So there is some new info to look at here: one is the `axios.get()` this is a method from the newly added `axios` npm. Second up is the URL that we will getting the info from, which is : https://codycollicott.github.io/yearbook/Data/students.json. (if you access this via the browser you will see a text output).

### .Then()
The `.then(response)` method is called when the API is sucessful, the `response` argument will hold all the info that was returned by that URL

### .Catch()
The `.catch(err)` is called when the API fails for whatever reason (such as the URL not being valid)

```
Class Test extends React.Component {
  componentDidMount() {
    axios.get('https://codycollicott.github.io/yearbook/Data/students.json')
    .then(response => {
      console.log(response);
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
