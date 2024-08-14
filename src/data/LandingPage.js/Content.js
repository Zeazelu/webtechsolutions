import Site from "../../assets/site.webp";
import Workstation from "../../assets/DSC_0084.webp";
import Shop from "../../assets/shop.webp";
import TextWithImage from "../../components/TextWithImage/TextWithImage.js";
import site1 from "../../assets/1.png";
import site2 from "../../assets/2.png";
import site3 from "../../assets/3.png";
import site4 from "../../assets/4.png";
import Slider from "../../components/Slider/Slider.js";

export const services = [
  {
    title: "Aplikacje internetowe",
    content: (
      <TextWithImage
        text="Oferujemy kompleksowe usługi w zakresie tworzenia nowoczesnych aplikacji internetowych, dostosowanych do potrzeb Twojego biznesu. Nasze rozwiązania cechuje wysoka wydajność, bezpieczeństwo i skalowalność. Niezależnie od tego, czy potrzebujesz prostego sklepu internetowego, platformy edukacyjnej, czy zaawansowanego systemu zarządzania, dostarczymy Ci aplikację, która spełni wszystkie oczekiwania."
        image={Site}
      />
    ),
  },
  {
    title: "Konserwacja komputerów i laptopów",
    content: (
      <TextWithImage
        text="Regularna konserwacja komputerów i laptopów to klucz do ich długowieczności i niezawodności. Nasze usługi obejmują czyszczenie podzespołów, wymianę pasty termoprzewodzącej, optymalizację systemu operacyjnego oraz aktualizację oprogramowania. Dbamy o to, aby Twój sprzęt działał płynnie i bezawaryjnie, niezależnie od jego wieku."
        image={Site}
      />
    ),
  },
  {
    title: "Doradztwo w zakupie sprzętu",
    content: (
      <TextWithImage
        text="Zakup nowego sprzętu komputerowego może być wyzwaniem, zwłaszcza przy szybko zmieniających się technologiach. Oferujemy profesjonalne doradztwo, które pomoże Ci wybrać odpowiednie urządzenia, dostosowane do Twoich potrzeb i budżetu. Niezależnie od tego, czy potrzebujesz laptopa do pracy, komputera do gier, czy sprzętu dla biura, wskażemy najlepsze opcje na rynku."
        image={Workstation}
      />
    ),
  },
  {
    title: "Profesjonalne zdjęcia",
    content: (
      <TextWithImage
        text="Nasze usługi fotograficzne obejmują szeroki zakres, od sesji produktowych, aż po zdjęcia na potrzeby marketingu i social media. Stawiamy na wysoką jakość obrazu, precyzyjne kadrowanie i profesjonalną postprodukcję. Dzięki naszym zdjęciom Twoja marka zyska profesjonalny wizerunek, który przyciągnie uwagę klientów."
        image={Shop}
      />
    ),
  },
];

export const sites = [
  {
    id: 1,
    image: site1,
    link: "https://zeazelu.github.io/homestudio/",
  },
  {
    id: 2,
    image: site2,
    link: "Zuzanna Ćwikła",
  },
  {
    id: 3,
    image: site3,
    link: "Klaudia Gawron",
  },
  {
    id: 4,
    image: site4,
    link: "Karolina Łukasik",
  },
];

export const aboutus = [
  {
    title: "O nas",
    text: "WEBTECH SOLUTIONS to dynamicznie rozwijająca się firma IT z siedzibą we Włoszczowie, specjalizująca się w dostarczaniu nowoczesnych rozwiązań technologicznych dla klientów indywidualnych oraz biznesowych. Dzięki naszemu wieloletniemu doświadczeniu i pasji do nowych technologii, jesteśmy w stanie sprostać najbardziej wymagającym potrzebom naszych klientów. Nasza oferta obejmuje kompleksowe usługi z zakresu tworzenia aplikacji internetowych, konserwacji komputerów i laptopów, doradztwa w zakupie sprzętu komputerowego oraz profesjonalnej fotografii.",
  },
];

export const location = [
  {
    title: "Gdzie się znajdujemy?",
    text: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.12987793552!2d19.98427877696862!3d50.847279158711686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471764fe92ae321d%3A0x23a244c451c4fd68!2sks.%20kard.%20Stefana%20Wyszy%C5%84skiego%205D%2C%2029-100%20W%C5%82oszczowa!5e0!3m2!1spl!2spl!4v1723468313258!5m2!1spl!2spl"
        title="location"
      />
    ),
  },
];

export const portfolio = [
  {
    title: "Portfolio",
    text: <Slider sites={sites} />,
  },
];
