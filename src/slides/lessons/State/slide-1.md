## State

One of the more powerful aspects of react is the ability to add, edit and delete what is called the `state` in react. A overview of the state is available [here](https://codeburst.io/props-and-state-in-react-native-explained-in-simple-english-8ea73b1d224e) and [here](https://medium.com/the-andela-way/understanding-the-fundamentals-of-state-in-react-79c711be677f).

### Define the state
Let's take a look at the below code, something new here is the `this.state`. What we are doing here is defining the state for the component to use.

```
Class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'frank'
    }
  }
  render() {
    return (
      <div> {this.state.name} </div>
    )
  }
}
```

---
