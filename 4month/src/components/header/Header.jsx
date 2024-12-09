import Text from "../text/text";
import Title from "../title/Title";


function Header(){
    return(
        <header >
            <Title text = "I am footer component" name="Anna" />
            <Text paraph={555}/>
        </header>
    )
}

export default Header;