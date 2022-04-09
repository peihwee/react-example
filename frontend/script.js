/////////////////////////////////////////////////////////////////////
// Initalize Constant to store DOM Elements
/////////////////////////////////////////////////////////////////////
const butTestGET = document.getElementById("testGET");
const butTestPOST = document.getElementById("testPOST");

const butCreate = document.getElementById("createTable");
const butDrop = document.getElementById("dropTable");
const butInsert = document.getElementById("insertMessage");
const butSelect = document.getElementById("getMessages");
const txtToSend = document.getElementById("messageToSend");
const txtDisplay = document.getElementById("messagesDisplay");

/////////////////////////////////////////////////////////////////////
// Initalize Constant to store DOM Elements
/////////////////////////////////////////////////////////////////////
butTestGET.onclick = TestGet;
butTestPOST.onclick = TestPost;
butCreate.onclick = CreateTable;
butDrop.onclick = DropTable;
butInsert.onclick = InsertMessage;
butSelect.onclick = GetAllMessages;

/////////////////////////////////////////////////////////////////////
// Function to Display Server Response
/////////////////////////////////////////////////////////////////////
function DisplayResponse(objData)
{   
    txtDisplay.innerHTML = "";
    let sData = JSON.stringify(objData);
    txtDisplay.append(sData);
}

/////////////////////////////////////////////////////////////////////
// Function to Test GET with Server
/////////////////////////////////////////////////////////////////////
function TestGet()
{
    axios.get('http://localhost:3000/api', { params: { message: "Hello World!" } })
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools

        DisplayResponse(response.data);
    })
    .catch(function (error) {
        txtDisplay.append(error);
    });
}

/////////////////////////////////////////////////////////////////////
// Function to Test POST with Server
/////////////////////////////////////////////////////////////////////
function TestPost()
{
    axios.post('http://localhost:3000/api/', { message: "Hello Again!" })
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools

        DisplayResponse(response.data);
    })
    .catch(function (error) {
        txtDisplay.append(error);
    });
}

/////////////////////////////////////////////////////////////////////
// Function to Create Table
/////////////////////////////////////////////////////////////////////
function CreateTable()
{
    axios.post('http://localhost:3000/api/table', {})
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools

        DisplayResponse(response.data);
    })
    .catch(function (error) {
        txtDisplay.append(error);
    });
}

/////////////////////////////////////////////////////////////////////
// Function to Drop Table using DELETE
/////////////////////////////////////////////////////////////////////
function DropTable()
{
    axios.delete('http://localhost:3000/api/table', {})
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools

        DisplayResponse(response.data);
    })
    .catch(function (error) {
        txtDisplay.append(error);
    });
}

/////////////////////////////////////////////////////////////////////
// Function to Insert Row using POST
/////////////////////////////////////////////////////////////////////
function InsertMessage()
{
    axios.post('http://localhost:3000/api/message', { message : txtToSend.value })
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools

        DisplayResponse(response.data);
    })
    .catch(function (error) {
        txtDisplay.append(error);
    });
}

/////////////////////////////////////////////////////////////////////
// Function to Select Rows using GET
/////////////////////////////////////////////////////////////////////
function GetAllMessages()
{
    axios.get('http://localhost:3000/api/message', {})
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools

        DisplayResponse(response.data);
    })
    .catch(function (error) {
        txtDisplay.append(error);
    });
}

