import Header from "components/Header/Header";
import RouterHeader from "components/RouterHeader/RouterHeader";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm/ContactForm";
import Tail from "components/Tail/Tail";

export default function Contact() {

  const {t} = useTranslation()

  return (
    <>
      <Header />
      <RouterHeader nameRouter={t("contact")}/>

      <ContactForm/>
      <Tail/>
    </>
  );
}
