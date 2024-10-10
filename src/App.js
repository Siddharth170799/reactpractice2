import logo from './logo.svg';
import './App.css';
import { Button, Flex } from 'antd';
import App1 from './SignIn';
import Practice from './Practice';
import useNotification from './useNotification';
import Hello from './Hello';
import Fetch from './Fetch';


function App() {

  const {NotificationComponent,triggerNotification}=useNotification("top-right")
  return (
//  <Hello/>
<Fetch/>
/* <>
<h1>Hello World</h1>
<button onClick={()=>triggerNotification({
  type:"success",
  message:"File sent successfully",
  duration:3000,
})}>Trigger Success</button>
<button onClick={()=>triggerNotification({
  type:"error",
  message:"File sent failed",
  duration:3000,
})}>Trigger Error</button>
<button onClick={()=>triggerNotification({
  type:"warning",
  message:"File sending in progress",
  duration:3000,
})}>Trigger warning</button>
<button onClick={()=>triggerNotification({
  type:"info",
  message:"File information",
  duration:3000,
})}>Trigger info</button>
{NotificationComponent}

</> */
  )
}

export default App;
