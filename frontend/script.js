class Menu extends React.Component
{
    constructor() {
        super()
        this.state = {
            sQuery: "",
            sResponse: "Response will show here."
        }

        // NOTE: Functions need to be bind to be used.
        this.TestGet = this.TestGet.bind(this);
        this.TestPost = this.TestPost.bind(this);
        this.CreateTable = this.CreateTable.bind(this);
        this.DropTable = this.DropTable.bind(this);
        this.InsertMessage = this.InsertMessage.bind(this);
        this.GetAllMessages = this.GetAllMessages.bind(this);
        this.DisplayResponse = this.DisplayResponse.bind(this);
        this.OnTextfieldChange = this.OnTextfieldChange.bind(this);
    }

    /////////////////////////////////////////////////////////////////////
    // Function to Display Server Response
    /////////////////////////////////////////////////////////////////////
    DisplayResponse(objData)
    {
        console.log("DisplayResponse: " + JSON.stringify(objData));
        this.setState({
            sResponse: JSON.stringify(objData)
        });
    }

    /////////////////////////////////////////////////////////////////////
    // Function to Test GET with Server
    /////////////////////////////////////////////////////////////////////
    TestGet()
    {
        axios.get('http://localhost:3000/api', { params: { message: "Hello World!" } })
        .then((response) => {
            console.log(response.data); //View in Browser's Developer Tools

            this.DisplayResponse(response.data);
        })
        .catch(function (error) {
            this.DisplayResponse(error);
            console.log(error);
        });
    }

    /////////////////////////////////////////////////////////////////////
    // Function to Test POST with Server
    /////////////////////////////////////////////////////////////////////
    TestPost()
    {
        axios.post('http://localhost:3000/api/', { message: "Hello Again!" })
        .then((response) => {
            console.log(response.data); //View in Browser's Developer Tools

            this.DisplayResponse(response.data);
        })
        .catch(function (error) {
            this.DisplayResponse(error);
        });
    }

    /////////////////////////////////////////////////////////////////////
    // Function to Create Table
    /////////////////////////////////////////////////////////////////////
    CreateTable()
    {
        axios.post('http://localhost:3000/api/table', {})
        .then((response) => {
            console.log(response.data); //View in Browser's Developer Tools

            this.DisplayResponse(response.data);
        })
        .catch(function (error) {
            this.DisplayResponse(error);
        });
    }

    /////////////////////////////////////////////////////////////////////
    // Function to Drop Table using DELETE
    /////////////////////////////////////////////////////////////////////
    DropTable()
    {
        axios.delete('http://localhost:3000/api/table', {})
        .then((response) => {
            console.log(response.data); //View in Browser's Developer Tools

            this.DisplayResponse(response.data);
        })
        .catch(function (error) {
            this.DisplayResponse(error);
        });
    }

    /////////////////////////////////////////////////////////////////////
    // Function to Insert Row using POST
    /////////////////////////////////////////////////////////////////////
    InsertMessage()
    {
        axios.post('http://localhost:3000/api/message', { message : this.state.sQuery })
        .then((response) => {
            console.log(response.data); //View in Browser's Developer Tools

            this.DisplayResponse(response.data);
        })
        .catch(function (error) {
            this.DisplayResponse(error);
        });
    }

    /////////////////////////////////////////////////////////////////////
    // Function to Select Rows using GET
    /////////////////////////////////////////////////////////////////////
    GetAllMessages()
    {
        axios.get('http://localhost:3000/api/message', {})
        .then((response) => {
            console.log(response.data); //View in Browser's Developer Tools

            this.DisplayResponse(response.data);
        })
        .catch(function (error) {
            this.DisplayResponse(error);
        });
    }

    OnTextfieldChange(event) {
        this.setState({
            sQuery: event.target.value 
        });
    }

    render()
    {
        return (
            <div>
                <div>
                    <div id="Response">{this.state.sResponse}</div>
                </div>
                <div>
                    <button onClick={this.TestGet}>Test GET</button>
                    <button onClick={this.TestPost}>Test POST</button>
                </div>
                <div>
                    <button onClick={this.CreateTable}>Create Table</button>
                    <button onClick={this.DropTable}>Drop Table</button>
                </div>
                <div>
                    <input type="text" value={this.state.sQuery} onChange={this.OnTextfieldChange}></input>
                    <button onClick={this.InsertMessage}>Send</button>
                </div>
                <div>
                    <button onClick={this.GetAllMessages}>Retrieve</button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    React.createElement(Menu, {}),
    document.getElementById('root')
);
