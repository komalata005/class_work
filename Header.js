
import MyLinks from './MyLinks'
import logo from './images/pngwing.com.png'

 //const { default: MyLinks } = require("./MyLinks");

function Header(){
return(
    <>
    <div><img src={logo} alt='' width='150px'></img></div>
    <div>Heading</div>
    <MyLinks/>
</>
    );
}

export default Header;