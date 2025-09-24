// Audiodescription
import AdMaiora from '../../Assets/Images/Audiodescription/AdMaiora.png'
import Mediterraneo from '../../Assets/Images/Audiodescription/Mediterraneo.png'
import MinionsAndMore from '../../Assets/Images/Audiodescription/MinionsAndMore.png'
import SePotessiDirtiAddio from '../../Assets/Images/Audiodescription/SePotessiDirtiAddio.png'

// Review
import AllBlinds from '../../Assets/Images/Review/AllBlinds.png'
import Amerikatsi from '../../Assets/Images/Review/Amerikatsi.png'
import ArteAnarchicaEnricoBay from '../../Assets/Images/Review/ArteAnarchicaEnricoBay.png'
import BlueJean from '../../Assets/Images/Review/BlueJean.png'
import ComePesciNellAcqua from '../../Assets/Images/Review/ComePesciNellAcqua.png'
import GenerazioneDiFenomeni from '../../Assets/Images/Review/GenerazioneDiFenomeni.png'
import Jago from '../../Assets/Images/Review/Jago.png'
import KingstonAvenue from '../../Assets/Images/Review/KingstonAvenue.png'
import KM333 from '../../Assets/Images/Review/KM333.png'
import Kordon from '../../Assets/Images/Review/Kordon.png'
import LeSilence from '../../Assets/Images/Review/LeSilence.png'
import Libera from '../../Assets/Images/Review/Libera.png'
import Mal from '../../Assets/Images/Review/Mal.png'
import MyNameIsAlfred from '../../Assets/Images/Review/MyNameIsAlfred.png'
import UnaVitaAllAssalto from '../../Assets/Images/Review/UnaVitaAllAssalto.png'
import VariaDiPalmi from '../../Assets/Images/Review/VariaDiPalmi.png'
import Veloce from '../../Assets/Images/Review/Veloce.png'


// SDH Subtitling
import DesignLoveAffair from '../../Assets/Images/SDHSubtitling/DesignLoveAffair.png'
import IoNonHoPaura from '../../Assets/Images/SDHSubtitling/IoNonHoPaura.png'
import UltimoBacio from '../../Assets/Images/SDHSubtitling/UltimoBacio.png'
import GliImmortali from "../../Assets/Images/SDHSubtitling/GliImmortali.jpeg"

// Subtitling
import CityOfGosts from "../../Assets/Images/Subtitling/CityOfGosts.png"
import DontSayAWord from "../../Assets/Images/Subtitling/DontSayAWord.png"
import InBruges from "../../Assets/Images/Subtitling/InBruges.png"
import KyleXY from "../../Assets/Images/Subtitling/KyleXY.png"
import LifeOnMars from "../../Assets/Images/Subtitling/LifeOnMars.png"
import LiliRefrain from "../../Assets/Images/Subtitling/LiliRefrain.png"
import Simpson from "../../Assets/Images/Subtitling/Simpson.png"
import Smallville from "../../Assets/Images/Subtitling/Smallville.png"
import SposaCadavere from "../../Assets/Images/Subtitling/SposaCadavere.png"
import TheDevilWearsPrada from "../../Assets/Images/Subtitling/TheDevilWearsPrada.png"
import Up from "../../Assets/Images/Subtitling/Up.png"

// DialogueList
import GucciniLive from "../../Assets/Images/DialogueList/GucciniLive.jpeg"
import DelittiInFamiglia from "../../Assets/Images/DialogueList/DelittiInFamiglia.jpeg"

// Translation
import Essay from "../../Assets/Images/Translation/Essay.png"
import WomensHealth from "../../Assets/Images/Translation/WomenAgenda.jpeg"

// Tools
import Aegisub from "../../Assets/Images/Tools/AegiSub.png"
import CafeTran from "../../Assets/Images/Tools/CafeTran.png"
import MemoQ from "../../Assets/Images/Tools/MemoQ.png"
import SubtitleEdit from "../../Assets/Images/Tools/SubEdit.jpg"

// Certifications
import GloS from "../../Assets/Images/Certs/GloS.png"
import ISTRAD from "../../Assets/Images/Certs/ISTRAD.jpeg"
import Maori from "../../Assets/Images/Certs/Maori.jpeg"
import UniCT from "../../Assets/Images/Certs/UniCT.png"

import { Project } from "../../Types"

export const Projects: Project[] = [
  {
    name: "Audiodescription",
    description:
      "Translation, Subtitling, Review, Localization, SDH Subtitling",
    sourcesArray: [AdMaiora, Mediterraneo, MinionsAndMore, SePotessiDirtiAddio],
  },
  {
    name: "Review",
    description:
      "Translation, Subtitling, Review, Localization, SDH Subtitling",
    sourcesArray: [
      AllBlinds,
      Amerikatsi,
      ArteAnarchicaEnricoBay,
      BlueJean,
      ComePesciNellAcqua,
      GenerazioneDiFenomeni,
      Jago,
      KingstonAvenue,
      KM333,
      Kordon,
      LeSilence,
      Libera,
      Mal,
      MyNameIsAlfred,
      UnaVitaAllAssalto,
      VariaDiPalmi,
      Veloce,
    ],
  },
  {
    name: "SDH Subtitling",
    description:
      "Translation, Subtitling, Review, Localization, SDH Subtitling",
    sourcesArray: [
      DesignLoveAffair,
      IoNonHoPaura,
      UltimoBacio,
      GliImmortali,
      Jago,
    ],
  },
  {
    name: "DialogueList",
    description:
      "Translation, Subtitling, Review, Localization, SDH Subtitling, Dialogue List",
    sourcesArray: [Jago, GucciniLive, DelittiInFamiglia, Veloce],
  },
  {
    name: "Subtitling",
    description:
      "Translation, Subtitling, Review, Localization, SDH Subtitling",
    sourcesArray: [
      CityOfGosts,
      DontSayAWord,
      InBruges,
      KyleXY,
      LifeOnMars,
      LiliRefrain,
      Simpson,
      Smallville,
      SposaCadavere,
      TheDevilWearsPrada,
      Up,
    ],
  },
  {
    name: "Translation",
    description:
      "Translation, Subtitling, Review, Localization, SDH Subtitling",
    sourcesArray: [Essay, WomensHealth],
  },
  {
    name: "Tools",
    description: "Tools Listing",
    sourcesArray: [Aegisub, CafeTran, MemoQ, SubtitleEdit],
  },
  {
    name: "Certs",
    description: "Certs Listing",
    sourcesArray: [GloS, ISTRAD, Maori, UniCT],
  },
]



