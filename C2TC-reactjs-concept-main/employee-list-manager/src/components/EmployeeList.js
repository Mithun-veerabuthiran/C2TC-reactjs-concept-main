import React, { Component } from "react";


class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: ["Mithun", "Ragou", "Logeshwaran"],
      newEmployee: "",
    };

    console.log("🔹 Constructor: EmployeeList component created");

    // Method 1: Binding in constructor
    this.handleAddEmployee = this.handleAddEmployee.bind(this);
  }

  // 🔸 Lifecycle Method 1: Called once after mounting
  componentDidMount() {
    console.log(
      "✅ componentDidMount: Component mounted, fetching employee data..."
    );

    // Simulate API call
    setTimeout(() => {
      this.setState((prevState) => ({
        employees: [...prevState.employees, "Kani"],
      }));
    }, 1500);
  }

  // 🔸 Lifecycle Method 2: Called after every update
  componentDidUpdate(prevProps, prevState) {
    if (prevState.employees !== this.state.employees) {
      console.log("♻️ componentDidUpdate: Employee list updated");
      console.log("Previous Employees:", prevState.employees);
      console.log("Current Employees:", this.state.employees);
    }
  }

  // 🔸 Lifecycle Method 3: Called before unmounting
  componentWillUnmount() {
    console.log(
      "🧹 componentWillUnmount: Cleaning up EmployeeList component..."
    );
  }

  // 🔹 Event Method 1 - Bound in constructor
  handleAddEmployee() {
    const { newEmployee } = this.state;

    if (newEmployee.trim()) {
      this.setState((prevState) => ({
        employees: [...prevState.employees, newEmployee.trim()],
        newEmployee: "",
      }));
      console.log(`✅ Added new employee: ${newEmployee}`);
    } else {
      alert("Please enter a valid employee name!");
    }
  }

  // 🔹 Event Method 2 - Class property (auto binds)
  handleInputChange = (event) => {
    this.setState({ newEmployee: event.target.value });
  };

  // 🔹 Event Method 3 - Inline arrow function (used in JSX)
  removeEmployee(index) {
    const updatedList = this.state.employees.filter((_, i) => i !== index);
    this.setState({ employees: updatedList });
    console.log(`🗑️ Removed employee at index ${index}`);
  }

  render() {
    const { employees, newEmployee } = this.state;

    console.log("🎨 Render: EmployeeList component rendering...");

    return (
      <div className="employee-container">
        <h2>Employee Directory</h2>

        <ul className="employee-list">
          {employees.length > 0 ? (
            employees.map((employee, index) => (
              <li key={index}>
                <span>{employee}</span>
                <button
                  className="remove-btn"
                  onClick={() => this.removeEmployee(index)}
                >
                  Remove
                </button>
              </li>
            ))
          ) : (
            <p>No employees found.</p>
          )}
        </ul>

        <input
          type="text"
          value={newEmployee}
          onChange={this.handleInputChange}
          placeholder="Enter employee name"
        />
        <button onClick={this.handleAddEmployee}>Add Employee</button>
      </div>
    );
  }
}

export default EmployeeList;
