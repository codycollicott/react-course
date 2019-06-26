## API Calls

So, React really should never be used as a "source of information" for an application. Ideally React is used to present that information in a fast and optimized way. Which means we should get the content for the application from another source, a very popular way to do this is via API calls. So let's look at the anatomy of how these are used in React. 

### Install an agent
`axios` is an `NPM` module that allows for easier API calls, we can add this to our application by running `npm install axios --save`. After this we have to import axios at the top of our file like this: `import axios from "axios"`

### Make the call
We usually make kan API call in a React method called `componentDidMount`. It will look something like this:

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
