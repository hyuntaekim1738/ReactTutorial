import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import {useState} from "react";
function App(){
  let items = ["New York", "San Francisco", "Tokyo", "London", "Seoul"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  const [alertVisible, setAlertVisibility] = useState(false);
  return <div>
    {/*<ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}></ListGroup>*/}
    {/*<Alert>Hello World</Alert>*/}
    {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
    <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
}

export default App;
