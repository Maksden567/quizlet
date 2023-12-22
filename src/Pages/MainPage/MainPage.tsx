import AdvantagesBlock from "../../Component/AdvantagesBlock/AdvantagesBlock"
import Header from "../../Component/Header/Header"
import MainBlockComponent from "../../Component/MainBlockComponent/MainBlockComponent"
import TelegramBlockLink from "../../Component/TelegramBlockLink/TelegramBlockLink"
import TelegramTitle from "../../Ui/TelegramTitle/TelegramTitle"



function MainPage() {


  return (
    <>
     <Header/>
     <MainBlockComponent/>
     <AdvantagesBlock/>
     <TelegramTitle/>
     <TelegramBlockLink/>
    </>
  )
}

export default MainPage
