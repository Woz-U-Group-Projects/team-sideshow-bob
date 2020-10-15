import React from "react";
import '../ticket.min.css'
class Ticket extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit(event) {
        alert('Your ticket has been submitted');
        event.preventDefault();
    }

    onValueChange(event) {
        this.setState({
          selectedOption: event.target.value
        });
      }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                    <label>
                        Select a Category:<br></br>
                    <select value={this.state.value} onChange={this.handleChange}>
                            <option value="hardware">Hardware</option>
                            <option value="software">Software</option>
                            <option value="internet">Internet</option>
                            <option value="other">Other</option>
                    </select>
                    </label>
            </form>

            <form onSubmit={this.handleSubmit}>

                    <label>
                    Select the Urgency Level:<br></br>
                        <input type="radio" value="Urgent" checked={this.state.selectedOption === "Urgent"} onChange={this.onValueChange}/>Urgent<br></br>
                        <input type="radio" value="Normal" checked={this.state.selectedOption === "Normal"} onChange={this.onValueChange}/>Normal<br></br>
                        <input type="radio" value="Low Priority" checked={this.state.selectedOption === "Low Priority"} onChange={this.onValueChange}/>Low Priority
                    </label>
            </form>

                    <form onSubmit={this.handleSubmit}>
                        <button type="submit">Submit</button>
                    </form>
            </div>
        );
    }
}
export default Ticket;