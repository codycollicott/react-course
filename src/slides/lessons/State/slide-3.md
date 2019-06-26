## State Part 3

In the last step we looked at mutating the set, meaning changing a default value that we had set. When we run this app the change will happen so fast it will look like the name was always set to sussy. However we can tie `events` to the `setState` function. I order to do that we would change our code to something like:  

```
Class Test extends React.Component {
  constructor() {
    super();
    this.state {
      name: 'frank'
    }
    this.changeName = this.changeName.bind(this);
  }
  changeName() {
    this.setState({
      name: "Sussy"
    })
  }
  render() {
    return (
      <div> 
        <h3>{this.state.name}</h3>
        <h3 onClick={this.changeName}> Change name </h3> 
      </div>
    )
  }
}
```

---
