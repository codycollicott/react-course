## State Part 4

So a few new things our happening here, one: is the `this.changeName = this.changeName.bind(this)` this line is used for allowing the `changeName` function to be used within our render. Two: is the `onClick` we have attached to the `<h3>`. This is a JS method that we are allowed calling on any HTML element, it is fired when the user click on that element.
If you want to see exactly what is happening here throw some `console.logs()` in each method.
```
Class Test extends React.Component {
  constructor() {
    super();
    this.state {
      name: 'frank'
    }
    this.changeName = this.changeName.bind(this);
    console.log("constructor");
  }
  changeName() {

    this.setState({
      name: "Sussy"
    })
    console.log("changeName")
  }
  render() {
    console.log("Render")
    return (
      <div> 
        <h3>{this.state.name}</h3>
        <h3 onClick={this.changeName}> Change name </h3> 
      </div>
    )
  }
}
```
The output for something like this should be: 
1. constructor
2. Render
3. ** AFTER CLICK **
4. ChangeName
5. Render

---
