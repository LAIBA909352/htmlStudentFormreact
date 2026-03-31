import Address from "./components/Address";
import BackHomePage from "./components/BackHomePage";
import Birthday from "./components/Birthday";
import Button from "./components/Button";
import City from "./components/City";
import Country from "./components/Country";
import Course from "./components/Course";
import Email from "./components/Email";
import FirstName from "./components/FirstName";
import Gender from "./components/Gender";
import Heading from "./components/Heading";
import Hobbies from "./components/Hobbies";
import LastName from "./components/LastName";
import Mobile from "./components/Mobile";
import Pincode from "./components/Pincode";
import Qualification from "./components/Qualification";
import State from "./components/State";


export default function App (){
return(
 <>
 <Heading/>

 <from>
  <table>
    <tbody>
      <FirstName/>
      <LastName/>
      <Birthday/>
      <Email/>
      <Mobile/>
      <Gender/>
      <Address/>
      <City/>
      <State/>
      <Country/>
      <Pincode/>
      <Hobbies/>
    </tbody>
  </table>

  <Qualification/>
  <br/>

  <Course/>

<br/>
<br/>
  <Button/>
  <br/>
  <br/>
  <BackHomePage/>
 </from>

 </>
);
}