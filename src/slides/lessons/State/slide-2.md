## State Part 2

In the last step we looked at setting up the `state` and printing the value we setup as a default. 

### Mutating the state
the state in react can be mutated, which means we can change the `name:frank` to anything else we want via the function `this.setState()`. Let's look at how we implement 

```
Class Test extends React.Component {
  constructor() {
    super();
    this.state {
      name: 'frank'
    }
  }
  componentDidMount() {
    this.setState({
      name: "Sussy"
    })
  }
  render() {
    return (
      <div> {this.state.name} </div>
    )
  }
}
```

---
