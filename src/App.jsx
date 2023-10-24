import './App.css'

function MyName () {
return 'Grundrak';
}

function App() {
  const recipient = 'Stephen';
  const sender  = MyName();
  return (
    <div>
<h2>Dear {recipient} </h2>
<br/>
<p>Hi, my name is {sender}, and I would like to introduce myself to you. I am applying for the position of React developer.</p>
<br/>
<p>I have attached my CV to this email.</p>
<p>You can find details of my previous roles, experience, and achievements.</p>
<p>I am particularly proud of :</p>
<ul id =  "my-achievements">
    <li>_HERE_</li>
    <li>_HERE_</li>
    <li>_HERE_</li>
</ul>
    </div>
);
}

export default App;
