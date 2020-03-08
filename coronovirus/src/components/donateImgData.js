import Cdc from '../charity/cdc.png';
import DirectRelief from '../charity/directRelief.png';
import GlobalGiving from '../charity/globalGiving.png';
import H2h from '../charity/h2h.png';
//import {FormattedMessage} from 'react-intl';


export const donateImgData = [
  {
    imgPath: DirectRelief,
    link: "https://www.directrelief.org/emergency/coronavirus-outbreak/",
    label: "Direct Relief",
    description: "Works with public health authorities, nonprofits, and businesses to provide protective items, such as masks and gloves",
  },
  {
    imgPath: Cdc,
    link: "https://give.cdcfoundation.org/give/269833/#!/donation/checkout?c_src=BCFU0",
    label: "CDC Foundation",
    description: "Provides  state and local health departments, support for the global response, logistics, communications, data management, personal protective equipment, critical response supplies and more",
  },
  {
    imgPath: GlobalGiving,
    label: "Global Giving",
    link:"https://www.globalgiving.org/projects/coronavirus-relief-fund/",
    description: "Help meet healthcare, food, and water needs to those in impacted areas",
  },
  {
    imgPath: H2h,
    link: "https://app.mobilecause.com/form/fFHW4g?vid=5j744",
    label: "Heart to Heart International",
    description: "Supports COVID-19 planning, preparedness and training to manage the outbreak",
  },
]

export default {
  donateImgData,
}
