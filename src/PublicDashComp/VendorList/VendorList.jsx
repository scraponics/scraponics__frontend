import React, { useState } from 'react'

import { BiUpArrowAlt } from 'react-icons/bi';

// styles
import classes from './VendorList.module.css';

const data = [
  {
    name: "M/s. United Global Trust ",
    state: "Assam",
    about: "F-5, Zoo Road, S enduri Ali Path, Guwahati, Dist. Kamrup(M)\r\n Assam",
    capacity: "4",
    status: "active"
  },
  {
    name: "M/s Global E Waste Management Systems Plot No: Shop No 729/s-1 to 729/s-5 , Sonum Township Nessai Salcete – Goa",
    state: "Goa",
    about: "103 MTA",
    capacity: "2",
    status: "active"
  },

  {
    name: "M/s Honey Disposal Store, Plot No. 67-68\r\nJarrout Road, Village Mandour Industrial Area Ambala city.",
    state: "Haryana",
    about: "300 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Thapar Disposal Industries, 902A/5/6, Chara Mandi Road, Ambala City",
    state: "Haryana",
    about: "1825 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Mittal Battery, plot No. 349, Indl-Area, Ph-1, Panchkula. (Not available on website)",
    state: "Haryana",
    about: "3600 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Exigo Recycling Pvt. Ltd., G. T. Road, Samalkha Panipat",
    state: "Haryana",
    about: "6000 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Exigo Recycling (P) Ltd., Barsat Road, Panipat",
    state: "Haryana",
    about: "18000 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Adinath Recyclotronix (P) Ltd., Plot No.#361, Industrial Estate, HSIIDC,\r\nPanipat(Not available on website)",
    state: "Haryana",
    about: "1080 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s Earth Waste Management Pvt. Ltd. Vill-Ismaila, Distt. Rohtak",
    state: "Haryana",
    about: "600 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Giriraj Metal, P. No. 39 HSIIDC, IE, Kutana, Rohtak",
    state: "Haryana",
    about: "300 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Green World International, Pvt. Ltd., GR 60-61 Ganpati Industrial Dham\r\nIndustrial Area Bahadugarh Haryana",
    state: "Haryana",
    about: "5000 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s Renu Recycling Company , Plot No. 1257, MIE-B, Bahadurgarh",
    state: "Haryana",
    about: "1800 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s AMN E-Waste Management Pvt Ltd., Plot No. 171, Sector-59, Industrial Area, Faridabad (Not available on website)",
    state: "Haryana",
    about: "290 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s Endeavor Re-processor and Recyclers India, Plot no. 323, Sec-24, industrial Area, Faridabad  (Not available\r\non website)",
    state: "Haryana",
    about: "365 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s E-waste Solutions, Industrial Shed, 1A, Industrial Estate, Sec-6, Faridabad",
    state: "Haryana",
    about: "1000 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s V S Enterprises, Plot no. 9, Pragati Vihar, Sector-59, Faridabad (Not available\r\non website)",
    state: "Haryana",
    about: "300 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s Dotline Informatics Pvt. Ltd., Plot No. 302, Ph-V, HSIIDC, Indl. Estate, Rai, Distt.\r\nSonipat",
    state: "Haryana",
    about: "350 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s RBH E-Waste Recycle Hub Pvt. Ltd. (old name M/s Satellite Vision India), Plot\r\nNo. 130, HSIIDC, Rai, Distt. Sonipat",
    state: "Haryana",
    about: "912.5 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s Global Waste Solution, Village Ram Nagar, Tehsil Ganaur, Distt. Sonipat",
    state: "Haryana",
    about: "9490 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s Global Waste Solution Unit-II, Village Dhaturi Tehsil Ganaur, Distt. Sonipat",
    state: "Haryana",
    about: "8249 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s Tes Amm (India) Pvt. Ltd., Village Wazidpur Saboli, Distt. Sonepat",
    state: "Haryana",
    about: "12000 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s Bluenvir, 81, HSIIDC, Rai, Distt. Sonipat",
    state: "Haryana",
    about: "435 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. EARTH SENSE RECYCLE PVT LTD,\r\nPlot No. 100, Sector - 5, IMT Manesar, Gurgaon",
    state: "Haryana",
    about: "2160 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Nirvana Recycling Pvt. Ltd., Plot No. D-6, Udyog, Vihar, Phase-VI, Sector-37, Gurugram",
    state: "Haryana",
    about: "6030 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Green Vortex Waste Management Pvt Ltd.Plot No 177, Sector 7, IMT Manesar",
    state: "Haryana",
    about: "1500 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. SMS ENTERPRISES, Plot No. 544- D,\r\nFirst Floor, Sector -37, Pace City - II, Gurgaon (Haryana)",
    state: "Haryana",
    about: "360 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Apicem Recyclers Pvt. Ltd., Plot No.\r\n359, Sector-8, IMT Manesar, Gurugram, Haryana",
    state: "Haryana",
    about: "510 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. KM Global E-Waste Private Limited,\r\nGround Floor Plot no. -359, Sector-8, IMT Manesar, Gurugram, Haryana",
    state: "Haryana",
    about: "510 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s  3 R Recycler, Plot No. 392, Sector-8, IMT Manesar Gurgaon",
    state: "Haryana",
    about: "2994 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Deshwal Waste Management Pvt Ltd, plot No-292, Sec-7, IMT Manesar, Gurgaon, Haryana",
    state: "Haryana",
    about: "10000\r\n1800 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Deshwal Waste Management Pvt Ltd, Plot No. -116, Sec-8, IMT Manesar, Gurgaon, Haryana",
    state: "Haryana",
    about: "4652.1 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Namo E-Waste Management Ltd., 14/1, Mathura Road, Faridabad Haryana",
    state: "Haryana",
    about: "5796 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. E Waste Recyclers India, Shed no. 15 Roz Ka Meo Industrial Area Nuh.",
    state: "Haryana",
    about: "667 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s Radhey Steel Traders, Vill. PatviBarara Road, Shahabad, Distt.\r\nKurukshetra",
    state: "Haryana",
    about: "600 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s Pegasus Waste Management Pvt. Ltd., Village -Bhora Kalan, Gurugram",
    state: "Haryana",
    about: "13134 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. 3 R Zero Waste Pvt. Ltd.,Plot No.- 62,Sector-8, IMT Manesar",
    state: "Haryana",
    about: "500 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Ecoverva Waste Recycling Private Limited, Plot No. 350\r\nBlock C Village Pathreri Ansal Pioneer Industrial Park,\r\nDistt. Gurgaon",
    state: "Haryana",
    about: "353.0708 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Naturevolt Recyclers India Pvt Ltd, Plot No. 323, Part-IV, Sector-24,Faridabad",
    state: "Haryana",
    about: "5400 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. AV Green Soluti ons Pvt Ltd., Plot No. 274, Sector-24 , Industrial Area,Faridabad",
    state: "Haryana",
    about: "381 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Re Chakra Waste Management LLP., Plot No. -18, Sector-6, Faridabad",
    state: "Haryana",
    about: "8931 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. CLG Projects LLP, Plot no 75-76 sector 59 pragati vihar Ballabgarh faridabad",
    state: "Haryana",
    about: "450 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. SSL E Waste Management LLP, Plot No. 410, Sector- 68, IMT, Faridabad",
    state: "Haryana",
    about: "423 MTA",
    capacity: "42",
    status: "active"
  },

  {
    name: "M/s. Green Waves Environmental Solution, Sy. No. 43/1, Mindi (V),\r\nGajuwaka (M), Visakhapatnam District.",
    state: "Andhra Pradesh",
    about: "480 MTA",
    capacity: "10",
    status: "active"
  },
  {
    name: "M/s. Apna Bhoomi E-Waste Management Services, Sy. No. 119, Near Bharat Junction, Kusalapuram (V), Etcherla (M),\r\nSrikakulam Distric. - 532005",
    state: "Andhra Pradesh",
    about: "300 MTA",
    capacity: "10",
    status: "active"
  },
  {
    name: "M/s. Veera Waste Management Systems, Plot No. 42, Block-D Extension, IDA, Autonagar Visakhapatnam District.-\r\n530012,",
    state: "Andhra Pradesh",
    about: "5820 MTA",
    capacity: "10",
    status: "active"
  },
  {
    name: "M/s. Binbag Recycling Services Pvt. Ltd,Anatapur District",
    state: "Andhra Pradesh",
    about: "300 MTA",
    capacity: "10",
    status: "active"
  },
  {
    name: "M/s. Clean Earth Green Earth Solutions, Krishna District",
    state: "Andhra Pradesh",
    about: "22.5 MTA",
    capacity: "10",
    status: "active"
  },
  {
    name: "M/s. E-Parisaraa Pvt. Ltd, Plot No. 42A/4, Sy. No. 285 Part And Sy. No. 288 (P),\r\nGollapuam (V), Hindupuram (M), Annathapuramu Distirct",
    state: "Andhra Pradesh",
    about: "300 MTA",
    capacity: "10",
    status: "active"
  },
  {
    name: "M/s. World Scrap Recycling Solutions (P) Ltd Plot No 50,Chittor District",
    state: "Andhra Pradesh",
    about: "6900 MTA",
    capacity: "10",
    status: "active"
  },
  {
    name: "M/s World Scrap Recycling Solutions Pvt Ltd., Shed No 10 11 12,Chittor District",
    state: "Andhra Pradesh",
    about: "18000 MTA",
    capacity: "10",
    status: "active"
  },
  {
    name: "M/s. Sungeel India Recycling Pvt. Ltd., Plot No. 59C & 59D, APIIC Industrial Park, Gollapuram (V), Hindupur (M), Anantapur\r\nDistrict-515211",
    state: "Andhra Pradesh",
    about: "10380 MTA",
    capacity: "10",
    status: "active"
  },
  {
    name: "M/s. Ramky ARM Recycling Pvt. Ltd., Plot",
    state: "Andhra Pradesh",
    about: "1500 MTA",
    capacity: "10",
    status: "active"
  },
  {
    name: "M/s. ADV Metal Combine Pvt. Ltd., Shed No. -25, Borai Industrial Growth Center, Rasmada, Dist.- Durg (C.G)",
    state: "Chhattisgarh",
    about: "750 MTA",
    capacity: "2",
    status: "active"
  },
  {
    name: "M/s. Star E-Processors, Village-Baktara, P.O.-Godi, Tehsil-Arung, District- Raipur, Chhattisgarh",
    state: "Chhattisgarh",
    about: "6000 MTA",
    capacity: "2",
    status: "active"
  },
  {
    name: "M/s Fozia Traders, Khasra No.13/1, Saboli Mandoli\r\nIndustrial Area, Delhi-110093",
    state: "Delhi",
    about: "90 MTA",
    capacity: "6",
    status: "active"
  },
  {
    name: "M/s Muskan Technologies, B-96,Okhla Industrial Area,Phase-1,Delhi- 110020",
    state: "Delhi",
    about: "600 MTA",
    capacity: "6",
    status: "active"
  },
  {
    name: "M/s. Shivnath Computers, E-47/2, 1st Floor, Okhla Phase-2, Delhi- 110019",
    state: "Delhi",
    about: "450 MTA",
    capacity: "6",
    status: "active"
  },
  {
    name: "M/s. Techchef E-Waste Solutions Private\r\nLimited, C-61, Top Floor, DDA Shed Okhla Industrial Area, Delhi-110020",
    state: "Delhi",
    about: "99 MTA",
    capacity: "6",
    status: "active"
  },
  {
    name: "M/s. Greenscape Eco Management Private Ltd., 348, Patparganj Industrial Area,\r\nDelhi-110020",
    state: "Delhi",
    about: "450 MTA",
    capacity: "6",
    status: "active"
  },
  {
    name: "M/s. Shree Raman E-Waste, Plot No. 7, Khasra No. 487, Peeragarhi Industrial Area,\r\nPeeragarhi Village, Delhi -110087",
    state: "Delhi",
    about: "300 MTA",
    capacity: "6",
    status: "active"
  },
  {
    name: "M/s. E-coli Waste Management P. Ltd, Plot No.-90 TO 92 Sabar Industrial Park Pvt.\r\nLtd Vill-Asal Ta-Bhiloda Dist-Sabar kantha",
    state: "Gujarat",
    about: "7227 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Mangalam ECS Environment Ltd, ECS House, 11-12 Garden View, Opp. Auda Garden, Sindhu Bhawan road, Off\r\nSG Highway-Pakwan Circle, Bodakdev, Ahmedabad 380054",
    state: "Gujarat",
    about: "4999.92 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Pruthavi E-Recycle Pvt. Ltd., Plot No.- 31/32 Golden Industries Area Near Rolex Industries Vill- Kothariya Rajkot -\r\n360002",
    state: "Gujarat",
    about: "3000 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. E-Process House, Plot No. 136/F-1. 2nd Phase, GIDC, Dist Valsad VAPI 396195",
    state: "Gujarat",
    about: "277 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Earth E-Waste Management Pvt. Ltd., Block No. 63, Sagun Ind. Estate, Type-A Paiky   11-A, Plot No. 1 to 5 & 10-D, Plot No. 1 to 5, Vill-Altodara, Tal. Opad, Dist.\r\nSurat – 394130",
    state: "Gujarat",
    about: "6000 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s.  Recotech E-Waste Management, Plot No. 36-37, Aashirwad Industrial Estate,\r\nUdhana-Sachin Road, GIDC Naka, Sachine, Surat",
    state: "Gujarat",
    about: "307 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. E-Front Line Recyclling Pvt. Ltd., Shed No. C1B-905\\9, GIDC, Panoli, Tal:\r\nAnkleshwar, Distt: Bharuch, Gujarat- 394116",
    state: "Gujarat",
    about: "2700 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Dron E-Waste Solution, Plot No. 56,\r\nG.I.D.C., Gozariya, Tal & Distt; Mehsana, Gujarat- 382825",
    state: "Gujarat",
    about: "975 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Eximo Recycling Pvt. Ltd., Plot No. 5/3, Raj Industrial Estate, Tal: Savli, Vadodara",
    state: "Gujarat",
    about: "900 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Galaxy Recycling, Sr. No. 36/P1, P2, 37/P2, 38/P2, Plot No. 52 &53, Near Tirth\r\nAgro. Pvt. Ltd., At: Bharudi, Tal: Gondal, Rajkot",
    state: "Gujarat",
    about: "521 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Basant Clean Enviro Ltd., Plot No. 67, G.I.D.C., Kadi, Distt: Mehsana, Gujarat-\r\n382715",
    state: "Gujarat",
    about: "5400 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Eco Green Recycling, Plot No. 4, Near-Dynamic Textile, Ozar Road, Mota\r\nPonda, Kapaada, Distt: Valsad, Gujarat",
    state: "Gujarat",
    about: "500 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Unicare E-Waste Recycler, Plot No. 9/1, Raj Industrial Park-III, Jarod-Savali Road, Karachiya, Tal: Savli, Distt:\r\nVadodara- 391520",
    state: "Gujarat",
    about: "1500 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Surbine Recycling (P) Ltd., Plot No. 765, GIDC Phase-II, Dared- 361004, Distt: Jamnagar",
    state: "Gujarat",
    about: "1500 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Greentech Recycling, Plot No. 5&6, Maharaja Estate, B/H: Ananad hotel, Sarkhej-sanand Road, Ahmedabad",
    state: "Gujarat",
    about: "702 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Dinesh Appliances, Plot No: 10, R. K. Ind Estate, Rakhiyal, Ahmedabad",
    state: "Gujarat",
    about: "360 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Mahammad Salim & Brothers Near Umiya Weigh Bridge, GIDC- Sachin, Tal:\r\nChorasi, Dist: Sachin-394230",
    state: "Gujarat",
    about: "600 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "Electro Waste Solutions Plot no: 631, GIDC-Halol, Dist: Panchmahal",
    state: "Gujarat",
    about: "480 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "Felix Industries Pvt Ltd, Plot No:123, Devraj Industrial Park, 200 ft Ring Road, Piplaj-Pirana Road, Piplaj- 382405, Dist:\r\nAhmedabad",
    state: "Gujarat",
    about: "375 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "Ecotime Industries, Plot No: 98 & 99, Sparkle Industrial Estate, Tal: Jalalpor,\r\nDist: Navsari396436",
    state: "Gujarat",
    about: "144 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "Sharda Copper, Plot No: SME-06, Bardoli- 2, (Miyawadi) Industrial Estate, Bardoli,\r\nSurat-394601",
    state: "Gujarat",
    about: "300 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "Bharuch Enviro Infrastructure Ltd (Beil), Plot no: 9701-16, 9801-28, 9901-28, 9601-\r\n04, 10001-10008, G-7 & 8, 7924- 27, 9401-\r\n9412, 9501-9506, 7905 E to H, GIDC,\r\nAnkleshwar-393002, Ta: Ankleshwar, Dist: Bharuch",
    state: "Gujarat",
    about: "700 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "Star Recycling, Survey no: 44 P1P1 44P1P2            & 46, Plot no: 45, R K\r\nIndustrial Zone-09, Kuwadva-     Wankaner Road, Ranpur360023, Tal & Dist: Rajkot",
    state: "Gujarat",
    about: "629 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "R Planet Integrated Solution Pvt. Ltd Plot no: 201, 202 (old block no. 264,265 paiki 1), Village : Zak-382330, Tal : Dahegam,\r\nDist : Gandhinagar",
    state: "Gujarat",
    about: "11450 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "Payas Recyclers, Survey No.2139, Plot No.28, Parshwa Industrial Park, B/H. Sandvik Asia, Ahmedabad-Mehsana\r\nHighway, Rajpur-382740, Tal:Kadi, Dist: Mehsana",
    state: "Gujarat",
    about: "1158 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "ID Technocom, Plot No.C1-414/P, GIDC Estate Mansa, Visnagar Road, Vill-Mansa,\r\nMansa382845, Dist : Gandhinagar",
    state: "Gujarat",
    about: "240 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Unity E-Recycling Co, Sr. No: 310/p, Plot No: 4, Danilimda, Ahmedabad-380028",
    state: "Gujarat",
    about: "383 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Mahaarana Industries Pvt. Ltd., Survey No. 466 & 475, Village: Timba, Ta:\r\nDaskroi, Dist; Ahmedabad",
    state: "Gujarat",
    about: "16585 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s GL Recycling LLP, Survey No. 108, Village: Soliya, Ta.:Kotda Sangani, Dist.:\r\nRajkot-360030",
    state: "Gujarat",
    about: "6026 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Electro Alloys Recycling And\r\nTransformation HUB, Plot No. 301/13 , GIDC Palej-392220, Bharuch",
    state: "Gujarat",
    about: "780 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Reart Recycling Private Limited., Plot No.365, Survey No.111p1, Golden Green Industrial Park (phase-D), Khambha-\r\n360311, Tal:Lodhika, Dist:Rajkot",
    state: "Gujarat",
    about: "300 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Tvarita Phones Pvt. Ltd., Plot No.171, Survey No. 846, N. H. 8, Vapi, Valsad- 396191",
    state: "Gujarat",
    about: "600 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Kalpana E-Recyclers, Plot No. 2486, Madhuban Industrial Park, Village: Kuha,\r\nTa: Daskroi, Dist: Ahmedabad",
    state: "Gujarat",
    about: "876 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Enviro Green Recycling, Survey/Block No. 736/737, Village: Tarsadi., Ta: Mangrol, Dist: Surat -394125",
    state: "Gujarat",
    about: "12775 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Liberty Recycling, Survey No.1439, Old Survey\r\nNo.256/1/5, Near Balda Industrial Park, Village: Balda, Tal: Pardi, Dist: Valsad",
    state: "Gujarat",
    about: "893 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Green Earth Management Company, Plot No. 13, Supreme – 3 Industrial Park, Near Vibrant weighbridge, Zak- Kadadara Road, Vill.: Kadadara, Tal- Dahegam,\r\nGandhinagar",
    state: "Gujarat",
    about: "893 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Gujarat Green Recycling, Plot No. MSME-500, Sanand-II,\r\nEngineering Industrial Estate, GIDC Sanand-II, Dist:Ahmedabad",
    state: "Gujarat",
    about: "375 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. New India Sales Corporation, Plot No. C1B-1915, GIDC Panoli,\r\nDist: Ankleshwar-394116",
    state: "Gujarat",
    about: "300 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s Technogreen Recycling Private Limited , Survey No.367-377, Village - Modasar. Tal- Sanand .Distt.Ahmedabad-\r\n382481",
    state: "Gujarat",
    about: "14400 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Evergreen E Waste Management Pvt. Ltd., Plot No.: 30, 31, Kamla Amrut Industrial Park, At: Budasan kadi, Taluka &\r\nDist.: Mehsana – 382715",
    state: "Gujarat",
    about: "12000 MTA",
    capacity: "40",
    status: "active"
  },
  {
    name: "M/s. Shivalik Solid Waste Management Ltd., (Unit –II), Village-Shabowal, Tehsil\r\nNalagarh, District-Solan HP",
    state: "Himachal Pradesh",
    about: "1000 MTA",
    capacity: "2",
    status: "active"
  },
  {
    name: "M/s Ortech India Corporations, Plot No. 67-B, Industrial Estate, Lodhi Majra, Baddi,",
    state: "Himachal Pradesh",
    about: "500 MTA",
    capacity: "2",
    status: "active"
  },
  {
    name: "M/s. VRG Groups, Gangyal",
    state: "Jammu & Kashmir",
    about: "135 MTA",
    capacity: "3",
    status: "active"
  },
  {
    name: "M/s. Bashir Enterprises Noorbagh, Srinagar",
    state: "Jammu & Kashmir",
    about: "285 MTA",
    capacity: "3",
    status: "active"
  },
  {
    name: "M/s. Meliorate Lubes Pvt Ltd, Plot No. 606/A, Ward No. 4/34, Vikas Nagar, hesal Piska More, Ranchi Jharkhand - 834005",
    state: "Jharkhand",
    about: "300 MTA",
    capacity: "2",
    status: "active"
  },
  {
    name: "M/s. Simran Infotech, Vill & P.O Kanak Chas, P.S. Chandan Kiari dist. Kokaro\r\nJharkhand- 828134",
    state: "Jharkhand",
    about: "360 MTA",
    capacity: "2",
    status: "active"
  },
  {
    name: "M/s. Sriram Eco Raksha Computer Services Pvt. Ltd. No. B-29, KSSIDC Indl. Estate, Bommasandra, Hosur Road, Anekal Taluk, Bangalore – 560 099",
    state: "Karnataka",
    about: "360 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. E-Friendly Waste Recyclers, First Floor, No. 17 1st, Cross, Azeez Sait\r\nIndustrial Town, Nayandahalli, Bangalore- 560039",
    state: "Karnataka",
    about: "300 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Eco Globe E-Waste Recyclers, Plot No. 87, 2nd Phase, 2nd Sector, Bidadi Industrial Area, Bidadi Hobli, Ramanagra\r\nTaluk and District",
    state: "Karnataka",
    about: "1200 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. E-Hasiru, No. 168/B, 1st Floor, 7th\r\nMain Road, 3rd Phase, Peenya Industrial Area, Bangalore – 558",
    state: "Karnataka",
    about: "300 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Green Enabled IT Solutions Pvt. Ltd., No. 2/1, 27th Cross, Behind Krishna Grand Hotel, Banashankari 2nd Stage,\r\nBengaluru",
    state: "Karnataka",
    about: "600 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Coral Waters, No. 8E, KIADB Industrial Area, Hoskote Taluk, Banglaore Rural\r\nDistrict",
    state: "Karnataka",
    about: "720 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Royal Touch, No. 3/2, 2nd Cross, Ezakiel Industrial Estate, K. G Halli,\r\nNagawara Main Road, Banglaore",
    state: "Karnataka",
    about: "360 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Pharmateck Consultancy, Sy. No. 40/1, Mangammanapalya, Bommanahalli",
    state: "Karnataka",
    about: "300 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Cerebra Integrated Technologies Ltd., Plot No. 41 to 46, Appasandra village, KIADB Indl. Area, Narasapura Hobli, kolar Taluk and District",
    state: "Karnataka",
    about: "39000 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. AGK Enterprises, Unit-I, No 33/A, Industrial “A” Layout, Bannimantap, Mysore - 570015",
    state: "Karnataka",
    about: "360 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Aptus Recycling Pvt. Ltd., Sy No. 241/4B, Magnur Village, Kirgavalu Hobli, Malavalli Taluk Mandya District- 571430",
    state: "Karnataka",
    about: "300 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. E-Parisara Pvt. Ltd., No. 30-P3, Dabaspet Bangalore",
    state: "Karnataka",
    about: "9288 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Tech Logic, Unit-2, Shed No. 36, 2nd Main, Ranganathapura, Bangalore - 560 044",
    state: "Karnataka",
    about: "360 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. E-Scrapy Recyclers, No.106, Andrahalli Main Road, Byreshwara Industrial Area,\r\nPeenya 2nd stage, Bangalore - 560 058",
    state: "Karnataka",
    about: "720 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. KH E-Waste Recyclers, No. 104, 1st Main Road, 4th Cross, Azeez Sait Industrial\r\nArea, Nayandahalli, Bangalore – 39",
    state: "Karnataka",
    about: "360 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. RPN Industries, Plot No B2, KSSIDC Industrial Area, Kumbalgodu, Mysore Road,\r\nBangalore-74",
    state: "Karnataka",
    about: "312 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. I Seven, # 9/4, Kachohalli Industrial Estate Kachohalli, Near Saibaba Temple,\r\nLaxmipura Post, Bengaluru- 562123",
    state: "Karnataka",
    about: "300 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Greenscape Eco Management Pvt. Ltd., Plot No. R-12, Veerasandra Indl Area,\r\nAnekal Tq, Bangalore Urban District – 100",
    state: "Karnataka",
    about: "600 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Trishyirya Recycling India Pvt. Ltd.,\r\nNo. 315, 4th Phase, Peenya Industrial Estate, Bangalore - 560 058",
    state: "Karnataka",
    about: "360 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. E Pragathi Recycling Plot No. 66, Road No. 18, Anthaasanahalli Indl. Area, IInd\r\nPhase, Tumkur",
    state: "Karnataka",
    about: "3600 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Ingram Micro India Pvt. Ltd., I Floor, Plot No. 1-4, Sy No. 5/2, 15th Km, Singasandra Post, Baretena Agrahara, NH-7,\r\nHosur Main Road, Bangalore- 560100",
    state: "Karnataka",
    about: "300 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Vans Chemistry, Plot No. 94/5, Shed NO. 13R14, SRRLayout, Kannalli Village,\r\nBangalore- 560094",
    state: "Karnataka",
    about: "1440 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Moogambigai Metal Refineries, Unit (3), Plot No. 174, Industrial Area,\r\nBaikampady Mangalore- 575011",
    state: "Karnataka",
    about: "1248 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Sogo Synergy Private Limited, Shed No. A-57, KSSIDC Industrial Estate, Bommasandra, Hosur Road, Anekal Taluk,\r\nBangalore Urban District – 560099",
    state: "Karnataka",
    about: "1296 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. MKK E-Waste Enterprises, Shed No. 292, Belur Industrial Area, Belur, Dharwad\r\nDist- 580011",
    state: "Karnataka",
    about: "360 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. BSMR Metals, No. R. O 7, KSSIDC\r\nIndustrial Estate, Veerasandra II stage,\r\nAttibele Hobli, Bangalore Urban District",
    state: "Karnataka",
    about: "360 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Mak Technology Industrial, Shed No. SP-5, Veerasandra KSSIDC Industrial Estate, Phase 0-11, 3rd Cross, Huskur Min Road,\r\nElectronic City Post, Bengaluru",
    state: "Karnataka",
    about: "300 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Earth Sense Recycle Pvt. Ltd.,\r\nIndustrial Plot No. spl. 14, Jigani 2nd Stage, Jigani Village and Hobli, Bangalore - 560105",
    state: "Karnataka",
    about: "300 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. 4R Recycling Pvt Ltd, Shed No A-5, Industrial Estate, Peenya 3rd Stage Industrial area, Nallakadirenahalli Village, Yeshwanthpur Hobli, Bangalore North\r\nTaluk, Bangalore.",
    state: "Karnataka",
    about: "900 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Prakruthi Recycling Pvt. Ltd., Sy No. 22, Flat No. 103, 5th Block, 5th Cross, SSI\r\nArea, Rajajinagar, Bangalore- 560010",
    state: "Karnataka",
    about: "999.6 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Elxion Pvt. Ltd., P. No. 24, 23rd A.\r\nMain Road, J.P Nagar 2nd Phase Indl Bangalore- 560078",
    state: "Karnataka",
    about: "360 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. K. G. Nandini Enterprises, No. 46/4, 46/5, Billakempanahalli Village, Bidadi Hobli, Ramanagaram District.",
    state: "Karnataka",
    about: "7200 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Eco Bird Recycling Company Pvt. Ltd., No. 185, Azeez Sait industrial Area,\r\nNayandahalli, Mysore Road, Bangalore - 39",
    state: "Karnataka",
    about: "360 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Afeefa Spectro Alloys, Sy No. 289/1, Nagaragere village, Gauribidnur Tq.",
    state: "Karnataka",
    about: "290 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Rashi E-Waste Solutions Pvt. Ltd., SW-51, Shed No. 26, Phase II, Apparel Park, Doddaballapura, Bangalore Rural\r\nDistrict",
    state: "Karnataka",
    about: "300 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Coral Communication and Networks Pvt. Ltd., No. 52, Hoskote Industrial area, Bangalore Rural District",
    state: "Karnataka",
    about: "8916 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Ash Recyclers, No. 3, KSSIDC Ind Estate, Hoskote, Bangalore Rural District",
    state: "Karnataka",
    about: "120 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. E Pragathi Recycling, Plot No. 66, Road No. 18, Antharasanahalli Indl Area, IInd\r\nPhase, Tumkur",
    state: "Karnataka",
    about: "3600 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s Sheltron Digital systems Pvt.Ltd No.27, maney estate, Sy.no.121, Kumbalgodu,",
    state: "Karnataka",
    about: "360 MTA",
    capacity: "72",
    status: "active"
  },
  {
    state: "Karnataka",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s Tes-Amm, India pvt. Ltd.  Sy. No. 118, Site. No. 8, Mookambika  Temple Road,\r\nMachodalli Forest Gate, Magadi Road, Bangalore",
    state: "Karnataka",
    about: "3240 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s Sonal Metacop, No.5, Sy No.5/1, Kachohalli Industrial Estate, Kachohalli,\r\nLaxmipura Post, Bangalore-562123",
    state: "Karnataka",
    about: "720 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s E-Ward & Co.  No.11, Mutthachari Industrial area, Nayandahalli, Mysore road,\r\nBangalore-560039",
    state: "Karnataka",
    about: "300 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Swadesh Recyclers LIP,Sy. No. 216, KIADB Industrial Area, Koorandahalli\r\nVillage, Malur Taluk Kolar District",
    state: "Karnataka",
    about: "7800 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. FR E-Waste Enterprises, Shed No. 120, Katha No 120/B, 52120/C, 5th Cross, Azeez Saig Industrial Area, Nayandahalli, Ward No 131, BBMP RR Nagar Zone, Bengaluru —\r\n560039",
    state: "Karnataka",
    about: "300 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Amara metals enterprises, No V20/1,\r\n4th main, 2nd stage, Peenya Industrial Area, Bengaluru -560058",
    state: "Karnataka",
    about: "1080 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Sri sai company # R-15, Katha No.320/322/29, Chikkanagamangala,\r\nSarjapura Hobli, Anekal Taluk, Bengaluru",
    state: "Karnataka",
    about: "360 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Global E-waste Management Services, P-21, Hebbal Industrial area, Hebbal I\r\nPhase, Mysuru",
    state: "Karnataka",
    about: "360 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Echakra Innovations Pvt Ltd SB/47, 1st\r\nCross, Peenya Ind Estate-Stage-1, Bengaluru",
    state: "Karnataka",
    about: "318 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. HMG Eco care Recycling ,C-22 3rd cross, Kumbalagodu, Bangalore560074",
    state: "Karnataka",
    about: "300 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Npewaste Private limited, Plot No. 96, Koorgalli Industrial Area, Belavadi Post,\r\nMysuru -570018",
    state: "Karnataka",
    about: "1200 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Earth Care E-waste Private Limited., Plot No.15,KIADB Industrial Area, 155, Kumbalgodu, KIADB Industrial Area, Kumbalgodu Village, Kengeri Hobli,\r\nBengaluru South Taluk, Bengaluru",
    state: "Karnataka",
    about: "300 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. E-Plant Recycling, Plot No. 242/A, 2\" Phase, Narasapura Industrial Area, Kolar Tq\r\n& District",
    state: "Karnataka",
    about: "300 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Greens Recology,Plot No. 415, KIADB, Vasanthanarapura Industrial Area,\r\nTumakuru Taluk and District",
    state: "Karnataka",
    about: "300 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. India Best Way Recycling, Shed No. 08 (Mane Industrial Estate), Sy. No. 155, Kumbalgodu Village, Kengeri Hobli,\r\nBengaluru South Taluk, Bengaluru Urban District —560074",
    state: "Karnataka",
    about: "300 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Eco Trend recyclers #81 A & 82A Kachohalli Industrial Estate,Dasanpura\r\nHobli, Bengaluru",
    state: "Karnataka",
    about: "300 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Extract,Plot No. 14/A, KIADB, Attibele Indl. Area, Anekal Taluk, Bengaluru",
    state: "Karnataka",
    about: "650.04 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Gopalan reprocessors India Pvt Ltd No.131, A Main Road, Industrial Suburb,\r\nPeenya Ii Stage, Bengaluru",
    state: "Karnataka",
    about: "600 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. IKON Recyclers .,Plot No.5, Ground & 2\" Floor, 2nd Cross, 2\" Main Road, Magadi\r\nRoad, Bengaluru -560079",
    state: "Karnataka",
    about: "300 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. E-Scrappy Recyclers,No. 106, Adrahalli main road, Byreshwara industrialEstate,\r\nPeenya 2nd stage, Bengaluru -560091",
    state: "Karnataka",
    about: "360 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Global Tech RecyclersNo-8/5,2nd Building, 1st Cross,,Kachohalli Village &Kachohalli Industrial Estate,Lakshmipura\r\nPost, Dasanapura",
    state: "Karnataka",
    about: "300 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. GRKMS Private Limited,1st Stage, Sompura,Bharathipura\r\nDabaspet,Bengaluru-562111",
    state: "Karnataka",
    about: "4099.92 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Communication Test Design, India Private Limited Plot No 48, Near Balaji Temple, Peenya II Phase, Bengaluru -\r\n560058,",
    state: "Karnataka",
    about: "1008 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. JSA Web solutions, Plot No. 93 A-4,\r\nPhase II, Jigani Industrial Area, Jigani Hobli, Anekal Taluk Bengaluru",
    state: "Karnataka",
    about: "360 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Recycler India MGT LLP , Plot No.679 to 689, KIADB industrial area , Harohalli 3rd phase Kanakapura Taluk, Ramanagara\r\nDistrict",
    state: "Karnataka",
    about: "5071.92 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Trishyiraya Recycling India pvt Ltd, SW51, Apparel park, indl area, Bashettihalli & part of Arehalli, Shed no.10,\r\nDoddballapura, Bengaluru- 561203",
    state: "Karnataka",
    about: "360 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Envirotech IT Solutions No.136, 1st Floor, Shiva Farm, Magadi Main Road,Vrushabhavathinagar, Bengaluru -\r\n560079",
    state: "Karnataka",
    about: "312 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Ace Recyclers, Plot No. C29, KSSIDC, Industrial Estate, Hoskote Taluk, Bengaluru\r\n- 562114",
    state: "Karnataka",
    about: "312 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. E-Pragathi Recycling Pvt. Ltd. Plot No. 564, Sy.No.55 & 52, Yelladadlu Village, Vasanthanarsapura, Industrial Area, 2nd\r\nStage, Kara, Hobli, Tumkur -572128",
    state: "Karnataka",
    about: "3240 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Best E-waste Recyclers Pvt Ltd., Plot No.459, Vasantha Narasapura Indl Area,\r\n2nd Phase, Tumkur- 572138",
    state: "Karnataka",
    about: "600 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. E2E Recycling Buisness Pvt Ltd No.550, Sy No.102(p)Beeragondanahalli, Village, SIA 2nd stage,Nelamangala, Bengaluru",
    state: "Karnataka",
    about: "432 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Return lab Recyclers pvt ltd. P.no.68, Sw-51, Phase-2, Doddabalapura Apparel\r\npark, Bengaluru-561203",
    state: "Karnataka",
    about: "360 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Think Recycling Pvt Ltd Plot No b-77 KSSIDC dustrialarea,Bommasand ra\r\nBengaluru -560099",
    state: "Karnataka",
    about: "600 MTA",
    capacity: "72",
    status: "active"
  },
  {
    name: "M/s. Kerala Enviro Infrastructure Ltd, Infrastructure Ltd E Waste Dismantling Facility, Common TSDF project, Inside Fact-\r\nCD Campus, Ambalamedu, Kochi 682303",
    state: "Kerala",
    about: "1200 MTA",
    capacity: "1",
    status: "active"
  },
  {
    name: "Arihant E Recycling Pvt Ltd, Gut No.307/1, Shahada Road, Dondaicha, Tal-Sinkheda,\r\nDist-Dhule.",
    state: "Maharashtra",
    about: "2000 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Eco-Recycling Ltd., Eco-House, Near Top Glass Enclave, Bhoipada,\r\nNear Range Office, Sativali Road, Vasai (E), Dist. Palghar",
    state: "Maharashtra",
    about: "7200 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "E-Incarnation Recycling Pvt. Ltd.  Plot No. J- 56, MIDC Area, Tarapur, Boiser, Dist:\r\nPalgar, Maharashtra - 401506.",
    state: "Maharashtra",
    about: "950 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Evergreen Recyclekaro India Pvt. Ltd., Gut. No. 113/A, Village Pali,\r\nTal. Wada, Dist. Palghar",
    state: "Maharashtra",
    about: "7500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Hi-Tech Recycling (I) Pvt. Ltd, Property No.193, Gat No. 89, Pune-Satara Road,\r\nShindewadi, Tal: Bhor, Dist:- Pune",
    state: "Maharashtra",
    about: "1410 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Justdispose Recycling Pvt Ltd. (Unit-II), S.No. 42/5,Kaddu Industrial Estate, Sativali\r\nPhata,Vasai (E), Tal-Vasai,Dist- Palghar.",
    state: "Maharashtra",
    about: "1200 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Pranam Enterprises, Sr. No. 286/116, Next to Badhe, Vill. Urali Deveshi, Tal. Haveli,\r\nDist. Pune",
    state: "Maharashtra",
    about: "1000 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Techeco E-Waste Namo LLP, Gat No. 155 B/2, Village Dhakambe, Tal. Dindori, Dist.\r\nNashik",
    state: "Maharashtra",
    about: "9360 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Threco Recycling LLP, Survey No. 153-3 &\r\n149-1, Hedavli, Dist- Raigad.",
    state: "Maharashtra",
    about: "3000 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "WE-The Recycling Company, H. No. 2212,\r\nSr. No. 9-1 N, Behind Essar Petrol Pump, Village Borpada, Tal. Bhiwandi, Dist. Thane",
    state: "Maharashtra",
    about: "800 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "ECO RESET PRIVATE LIMITED PLOT NO. 19/1, MOUZA BHOWARI, KAMPTEE,\r\nNAGPUR, MAHARASHTRA - 441001",
    state: "Maharashtra",
    about: "10200 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "ECO Friend Industries, Plot No. A-205, TTC\r\nIndustrial Area, MIDC Pawane, Navi Mumbai, Tal. & Dist. Thane",
    state: "Maharashtra",
    about: "1000\r\n240 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "A. S. ENTERPRISES SHOP NO 4 SHANKAR TEMPLE JASMINE BLDG PESTAM SAGAR ROAD NO 4 CHEMBUR,Chembur,Mumbai\r\nSuburban - 400089",
    state: "Maharashtra",
    about: "500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "AG Enterprises, Gat No. 815 (1), Kudalwadi, Chikhli, Pune 411062",
    state: "Maharashtra",
    about: "365 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Alfa Trading Co. KOLHAPUR ESTATE,YADAV NAGAR,,KHERANI",
    state: "Maharashtra",
    about: "80 MTA",
    capacity: "140",
    status: "active"
  },
  {
    state: "Maharashtra",
    about: "80 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Aman Trading Co. F/1, Annasagr Market,\r\nBehind Farooqi Hotel, Kurla Andheri Road, Jarimari, Kurla (W), Mumbai 400072",
    state: "Maharashtra",
    about: "100 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Ambar Enterprises Awutade, Handewadi, Tal. Haveli, Dist. Pune 411028",
    state: "Maharashtra",
    about: "250 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Amiable Electroning Pvt. Ltd. Plot No. D- 141, Shirawane, TTC Industrial Area, MIDC Shiewane, Nerul, Navi Mumbai",
    state: "Maharashtra",
    about: "750 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Anand Computer System 2160 B, Sadashiv Peth, Swamipuram Bldg, Shop No. 7,8,9, Pune - 411030",
    state: "Maharashtra",
    about: "350 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Ancus India Reprocessing Pvt. Ltd., shop No. 2, Bldg. No. 1, Tiwari Estate, Vill:- Dhaniv, Nalasopara€, Vasai",
    state: "Maharashtra",
    about: "450 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Aqsa Stamping, Plot no. 55, Rangara Industrial Estate, 33/35, Kiravali (Adivali), Tal. Panvel, Dist. Raigad.",
    state: "Maharashtra",
    about: "300 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "ARSH RECYCLING PRIVATE LIMITED GAT No. 1750, RANJANGAON GANPATI, PUNE\r\nNAGAR ROAD, Ranjangaon Ganpati, Pune - 412209",
    state: "Maharashtra",
    about: "2400 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Asquare Industrial Solutions Gala No. 3, Plot No. 35, Mulgaon, MIDC Khopoli, Tal.\r\nKhopoli, Dist. Raigad",
    state: "Maharashtra",
    about: "300 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Avis Technoways Plot No. A-58, MIDC Osmanabad, Dist. Osmanabad",
    state: "Maharashtra",
    about: "500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Baban Plastic, Gut No. 1, At. Sajapur, Tal. & Dist. Aurangabad 401136",
    state: "Maharashtra",
    about: "500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Bharat E Waste Recycling Co. Sr. No. 189, Vill. Waliv, Vasai-Virar City (M Corp),\r\nPalghar - 401208.",
    state: "Maharashtra",
    about: "500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Bhavesh Enterprises, Sr. No. 225/11, Hissa No. 23, Gausiya Compound, Gate No. 1, Vill.\r\nPimpri, Tal. & Dist. Thane",
    state: "Maharashtra",
    about: "200 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "BKE RECYCLING Adsul Mala, Shivram Nagar,Uruli Devachi,URULI DEVACHI,Pune -\r\n412308",
    state: "Maharashtra",
    about: "300 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Bombay Metal Works, Sr. 54, Hissa No. 4, Dahisar Road, Pimpri, Tal & Dist: Thane",
    state: "Maharashtra",
    about: "1000 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Bombay Recyclers Pvt. Ltd. Gala No. P-17- 18, S. No. 121/2, Balaji Industrial Park, Behind Hindalco Co. MIDC Taloja, Panvel,\r\nDist. Raigad",
    state: "Maharashtra",
    about: "200 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Bsqaure E-Waste Recyclers, Gala No. 800, Survey No. 69/3, Siddhivinayak Market,\r\nMohammadia Estate, Pimpri, Thane, Dist: Thane,Maharashtra.",
    state: "Maharashtra",
    about: "325 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "CBS EWaste Recycling Industries G.No. 18/63/2, At. Khanapur, Tal. Akole, Dist.",
    state: "Maharashtra",
    about: "2500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    state: "Maharashtra",
    about: " MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Chaudhary Metal 80/2, Village -Waliwali\r\nDahisar, Mori, Mumbra Panvel Road, Group Grampachayat, Dist. Thane - 400612",
    state: "Maharashtra",
    about: "350 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Clean Tech B/8, Gala no:  3,  Parasnath indl Estate, Anjurphata Road, vill: Val, Tal:\r\nBhiwandi Dist: Thane",
    state: "Maharashtra",
    about: "360 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Connect Info Solutions India Private Limited c/o: A-one Logistics Shop No 4, Saibaba Apartment, Plot No 12, Sector 9, Near Corporation Bank, Khanda Colony, New\r\nPanvel - 410206",
    state: "Maharashtra",
    about: "130 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "CPG Shell Mould & Casting, Plot No. W- 39, Additional MIDC, Satara",
    state: "Maharashtra",
    about: "1000 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "E Clean E Green Recycling Umar Compound, Jabar Pada, Nalasopara, Vasai-Virar City (M\r\nCorp), Dist. Palghar 401208.",
    state: "Maharashtra",
    about: "500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Earth  Sense  Recycle  Pvt.  Ltd.  A7,  Gala No.1,2    &    3,    Ground    Floor,    Prerana Complex,    Val    Village,    Dapoda    Road,\r\nAnjurphatta, Bhiwandi, District- Thane.",
    state: "Maharashtra",
    about: "750 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Eco Layer E-Waste Recycling S. No. 11, H. No. 1/1, PT-8, S. K. Indl. Estate, Choudhary\r\nCompound, Vasai E, Palghar",
    state: "Maharashtra",
    about: "110 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Eco Tantra LLP M-365, Raviwar Peth, Bohari Lane, Tal. & Dist. Pune",
    state: "Maharashtra",
    about: "160 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Eco Tech Recycling, C/6, (5), Sagar\r\nIndustrial Estate, S. No. 46/4, Dhumal Nagar, Vasai (E), Tal: Vasai, Dist: Palghar.",
    state: "Maharashtra",
    about: "450 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Ecostar Recycling, Survey No.94 Hissa No.12 Mahadev Industrial, Near Ladi Company,\r\nMumbra, Dist:- Thane- 400612.",
    state: "Maharashtra",
    about: "275 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "EMS Scrapo, S. No. 199, Hissa No. 3, Bharat Market, Khan Compound, Shil-Mahape\r\nRoad, Shil, Tal. & Dist. Thane",
    state: "Maharashta",
    about: "90 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Envirocare Recycling Pvt. Ltd. Unit no: 8/ C-I Actual Industrial Complex , Uchat, Road,\r\nVillage : Magathane, Tal : Wada Dist : Thane",
    state: "Maharashtra",
    about: "500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Environment Experts, Gala No. 11, Lane,\r\nJ. K. Compound, Opp. Roshan Comp. Kherani Road, Sakinaka, Mumbai",
    state: "Maharashtra",
    about: "350 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "E-Recon Recycling Pvt. Ltd. Gut No. 94, Chitegaon, Tal. Paithan, Dist. Aurangabad",
    state: "Maharashtra",
    about: "500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "E -Refine Corporation Gut No. 24, Plot No. 2, Dargah Road, Additional Daultabad, Tal. & Dist.\r\nAurangabad",
    state: "Maharashtra",
    about: "260 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "E-Waste Global,\r\nGate No. 2, Near Theur Phata, Lonikand,\r\nPune Nagar Road, Tal. Haveli, Dist. Pune 412216",
    state: "Maharashtra",
    about: "240 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "E-Waste Mart Survey No.94,Gala No.6,Umar Compound, Jahar Pada,Nalasopara, Vasai-Virar City (M\r\nCorp), District - Palghar - 401208.",
    state: "Maharashtra",
    about: "500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "General Technologies India Pvt Ltd, Plot No. MBP-2, Building No.A-1, Office No. 1213, 12th Floor, Rupa Solitaire Building,\r\nTTC Industrial Area, Mahape, Dist. Thane",
    state: "Maharashtra",
    about: "100 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "GNG Electronics Pvt. Ltd. Sr. No. 54, Hissa No. Dahisar Rd, Pimpri, Tal. & Dist.\r\n- Thane",
    state: "Maharashtra",
    about: "750 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Go Green Recycling Unit No. 75/66, Hasti Industrial Estate, TTC Industrial Area, Mahape, Navi Mumbai",
    state: "Maharashtra",
    about: "150 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Grade Infratech Pvt. Ltd., Gut No. 849,\r\nNear Mahindra CIE, Ambethan Chakan, Village Chakan, Tal. Khed, Dist. Pune",
    state: "Maharashtra",
    about: "300 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Green Enviro Services, 118/1, Wasali, Tal. Khed, Dist. Pune",
    state: "Maharashtra",
    about: "700 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "GREEN INDIA E-WASTE & RECYCLING OPC PVT. LTD.\r\nSURVEY NO. 74, HISSA NO. 1/A, House No. 500, POST-\r\nDAHISAR, District - Thane.",
    state: "Maharashtra",
    about: "390 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Green IT Recycling Center Pvt Ltd\r\nPlot No. D-222, MIDC Ranjangaon, Dist.- Pune - 412209",
    state: "Maharashtra",
    about: "365 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Green IT Recycling Centre Pvt. Ltd. Gat No. 207, Plot No. 3 & 4, Near\r\nScienunero Company, Near PMT Depot, Shindewadi, Tal. Bhor, Dist. Pune",
    state: "Maharashtra",
    about: "1000 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "GREEN PLANET RECYCLING SOLUTIONS SURVAY NO 72/1/A, AT BHANDARLI, DHASAR MORI, OLD MUMBRA PANVEL ROAD, TAL THANE,\r\nDIST THANE, - 400612",
    state: "Maharashtra",
    about: "550 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Green Tech Solution Industries Gat No. 83/1, A/p. Wakhari, tal. Pandharpur, Dist. Solapur 413304",
    state: "Maharashtra",
    about: "250 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Green Valley E Waste Management Pvt Ltd Gut No. 525/10, Village-Ghosai, Saza- Met, Tal. Wada, Ghonsai, Palghar - 421312",
    state: "Maharashtra",
    about: "596 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Greenscape Eco Management Private LimitedMIDC Chakan Industrial Area (Ph- II), Pune - 410501",
    state: "Maharashtra",
    about: "900 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Hari Om Scrap Traders 957/43, K.P. 2nd Lane, S. P. Road, Opp. Om\r\nNamahshivaya Bldg. Mumbai Central, Mumbai",
    state: "Maharashtra",
    about: "49.5 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Harshita Green Recyclers, Gat No. 452, Urse Talegaon Dhabade, Tal. Maval, Dist. Pune",
    state: "Maharashtra",
    about: "500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Indian Scrap Traders Survey No. 11, Hissa No. 3/A, Ghusia Market, Gala no: 661, Vill:\r\nPimpari, Post : Dahisar Dist: Thane",
    state: "Maharashtra",
    about: "200 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "J Choudhary & Company Sr. No. 67/3, Pipewal Lane Mohammadiya Estate,\r\nPimpri Old Mumbai Pune Road, pimpri, Thane 400612",
    state: "Maharashtra",
    about: "500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "J.S.Enterprises Gat No-132, Khalumbre, Chakan - 410501",
    state: "Maharashtra",
    about: "650 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "JRS Recycling Solutions Pvt. Ltd. Gala No. 428, S. No. 74, Hissa No. 2A, Garib Nawaz Estate, Old Mumbai Pune Road, Dahisar, Dist. Thane",
    state: "Maharashtra",
    about: "300 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Just Dispose Recycling Pvt. Ltd. Unit No: 103,110,119, Arvind Industrial Estate, Navghar, Vasai (E), Dist: Thane",
    state: "Maharashtra",
    about: "1200 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "K. G. N. Traders Survey No. 11, Hissa No. 30, Gausiya Market, Village- Pimpri, Post- Dahisar, Dist. Thane - 400612",
    state: "Maharashtra",
    about: "900 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Kalawishwa Electrical, B-47 (Sub letting), MIDC Waluj, Dist. Aurangabad 431136",
    state: "Maharashtra",
    about: "300 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Kapila Enterprises, Gat No. 46/3, At. Post. Supa, Tal. Parner, Dist:\r\nAhmednagar",
    state: "Maharashtra",
    about: "250 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Kohinoor E-Waste Recycling Pvt. Ltd. Gut No. 205/1 and\r\n205/2, Opp. Gurudatta Washing Centre, Dhekhu, Khalapur,\r\nDist. Raigad",
    state: "Maharashtra",
    about: "240 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "KRISHNA METAL REFINERY Plot No.1-\r\n2/143 , Sapronde Village, Taluka - Wada, District- Thane - 400086",
    state: "Maharashtra",
    about: "750 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Kuldeep E-Waste Disposals, Sr. No. 50, Waghjainagar, Mabegaon Khurd, Katraj- Ambegaon Road, Katraj, Pune - 411046",
    state: "Maharashtra",
    about: "90 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Lilashana Sales, Ramdas Company, Nandra Road, khamgaon, Dist. Buldhana",
    state: "Maharashtra",
    about: "360 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "MAC FIX STATION OFFICE NO 201, MAKHIJA ARCADE, 35TH ROAD,\r\nKHAR BANDRA LINKING ROAD, Bandra,\r\nMumbai Suburban - 400052",
    state: "Maharashtra",
    about: "800 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Mahalaxmi E- Recyclers Pvt. Ltd.Plot NO.77 & 78, Subplot No. 3A, Ramtekde\r\nIndustrial Area, Hadapsar, Tal. Haveli, Dist. Pune",
    state: "Maharashtra",
    about: "525 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Maharashtra Enterprises, Plot No. 17, Rangara Industrial estate, Kiravali (Adivali), Old Thane Pune Road, Tal. Panvel, Dist.\r\nRaigad",
    state: "Maharashtra",
    about: "500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Mahesh Traders Plot No. 316, Shree Shahu Market Yard, Tal. Karveer, Dist. Kolhapur",
    state: "Maharashtra",
    about: "107 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Manihar Enterprises, Survey No. 74, Village Goteghar, Tal. Thane , Dist. Thane",
    state: "Maharashtra",
    about: "1000 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Manish Metal Gat No 925 , Near Ashtekar Bangla, A/P- Theur, Dist- Pune - 412110",
    state: "Maharashtra",
    about: "550 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Map Trading Company Gat No. 670, Villoli, Tal. & Dist. Nashik 422010",
    state: "Maharashtra",
    about: "500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Masstech  Recycling  LLP  Gala  no  56,  58, 59 & 82, M.J.K. Compound, Kherani Road,\r\nSakinaka, Mumbai - 400072 - 400072",
    state: "Maharashtra",
    about: "400 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Mauli  Metals,  Gut  No.  222,  At  Kadachi Wadi,                    Post                    Chakan,\r\nTal. Khed, Dist. Pune",
    state: "Maharashtra",
    about: "360 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Mayra  Corporation,  Plot  No.  C-157, MIDC Malegaon,\r\nTal. Sinnar, Dist. Nashik",
    state: "Maharashtra",
    about: "30 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Mukesh  Metal  Sr.  No.  93,  Hissa  No.  1, Behind       Deepesh       Lodge       Gotegar\r\nUttarshiv, Mumbra Road, Dist. Thane",
    state: "Maharashtra",
    about: "400 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Nagraj   E-Waste   Recycling   S.No.41   Vill Asoli Mouza Mahalgaon Tah Kamptee Dist\r\nNagpur - 441202",
    state: "Maharashtra",
    about: "1800 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "National Traders\r\nS. No. 103/1/2, Undri-Saswad Road, Autade, Handewadi, Tal. Haveli, Dist. Pune",
    state: "Maharashtra",
    about: "250 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "National Trading Corporation, S. No. 56/1, Plot   No.   18   &   19,   Old   Mumbai-Panvel\r\nRoad, Village Pimpri, Tal. & Dist. Thane",
    state: "Maharashtra",
    about: "140 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Navkar RecyclingSr. No. 69, Hissa No. 15, Mahamadiya     Estate,     Mumbai     Panvel Road, Post. Dahisar, Dist.Thane",
    state: "Maharashtra",
    about: "1000 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "New                 Ecotech                 Recycling Survey  no.  136,  Hissa  no.  364,  At  Post  - Khaniwade,                                         Taluka\r\n-Vasai, District- Palghar Pincode -401305.",
    state: "Maharashtra",
    about: "300 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "New  India  Scrap  Traders,  Plot  No.  31/E, Ashok Nagar, Dist. Aurangabad",
    state: "Maharashtra",
    about: "150 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "New                Shivam                Enteprises, Gala  No.  326,  At.  Post.  Khandale,  Near Suruchi Dairy, Dist. Pune",
    state: "Maharashtra",
    about: "4800 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "NICHOLAS        RECYCLING        PRIVATE\r\nLIMITED   Nicholas   Compound,   Sativali Road, Valiv.",
    state: "Maharashtra",
    about: "500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Noble Trading Company, S. No. 11, Hissa No.  23,  Gausiya  Market,  Village  Pimpari, Old M. P. Road, Tal. & Dist. Thane",
    state: "Maharashtra",
    about: "265 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Om                                                 Recycling\r\n19/2 Mangalwa Peth,19/2 mangalwar peth pune., Peth, Dist. Pune",
    state: "Maharashtra",
    about: "100 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "OM R V Interiors, S. N. 92, Hissa No. 3, At Pelhar, Tal. Vasai, Dist Palghar",
    state: "Maharashtra",
    about: "250 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Pakeeza Traders, Plot No. 406, 407, 408, At. Soyapur, Tal. & Dist. Aurangabad",
    state: "Maharashtra",
    about: "720 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Perfect E-Waste Recyclers, Plot No. A-8/1, MIDC Chikhalthana, Tal. & Dist.\r\nAurangabad",
    state: "Maharashtra",
    about: "184 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Poona E-Waste Solutions, 1/1009, Gat No. 2334/4, Wagholi, Pune 412207",
    state: "Maharashtra",
    about: "250 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Prabhunath Traders, Sr. No. 314, H. No. 2, uril Devachi, Tal. Haveli, Dist. Pune",
    state: "Maharashtra",
    about: "1680 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Process Recycling Gala No,2, S.No 302, Richard Compound Near Maharashtra Vajan Kata, umang pharma road vasai\r\nphata, Dist. Palghar",
    state: "Maharashtra",
    about: "125 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Progressive Recycler LLP. MIDC Chakan\r\nIndustrial area (PH-II), D-45, Tal:- khed, Dist:-Pune",
    state: "Maharashtra",
    about: "295 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Pune Greens Electronic Waste Recycler Pvt. Ltd. Sr. No. 63/1, B-4/1, Handewadi Road,\r\nHadapsar, Pune",
    state: "Maharashtra",
    about: "500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "R T Corporation, S.No.377, H.No.2, Ambisi Ganeshpuri Road, Village- Palsai, Tal: Wada, Dist-Palghar.",
    state: "Maharashtra",
    about: "3000 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "R.K.E-Recycling International LLP Gala no.- 2, Tirupati Industrial Park, Sativali Road, Vasai East- 401208",
    state: "Maharashtra",
    about: "130 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Rcube Recycling Pvt Ltd. Shree Ganesh Indl Estate,Vasai Palghat,Khairpada,Palghar -\r\n401330",
    state: "Maharashtra",
    about: "230 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Recycling Future, S. No. 169, Bhangarpada, Post Kundevahll, Tal. Panvel. Dist. Raigad",
    state: "Maharashtra",
    about: "500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Regreen Recycling FLT 205, POCKET 5, GANESHWADI CHS LTD., BLDG 5, BHIM NAGAR MIDC ANDHERI EAST, Mumbai\r\nSuburban - 400093",
    state: "Maharashtra",
    about: "120 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Reteck Envirotech Pvt. Ltd. Plot No. 4 A, MIDC Taloja, Tal. Panvel, Dist. Raigad",
    state: "Maharashtra",
    about: "2500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Right E-waste Recycle, S. No. 40/2/C, 40/3, Nashik Highway, Kalyan Sape Road, Tal.\r\nBhiwandi. Dist. Thane",
    state: "Maharashtra",
    about: "400 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Rolex Entrprises, Survey No. 218, Hissa No. 4/1, Dahisar, Navi Mumbai",
    state: "Maharashtr a",
    about: "500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Royal Scrap Traders, Gut No. 23, Plot No. 8, Mayurnagar, Naregaon, Dist. Aurangabad",
    state: "Maharashtra",
    about: "230 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "S. S. E-Waste Recyclers, Gut No. 442, Village Usar, Kondla Road, Tal. Wada, Dist. Palghar\r\n421312",
    state: "Maharashtr a",
    about: "1500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "S.K. Enterprises Plot No: 134 Paiki Sub Plot No.- 1, Ahmednagar Industrial Estate Co- Op. Society Ltd, Nagpur-Pune Road, Ta &\r\nDist - Ahmedanagar-414005.",
    state: "Maharashtra",
    about: "5000 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "S K Enterprises, S. No. 77, Hissa No. 1, Hindustan Market, Dieghar, Tal. Shil, Dist. Thane",
    state: "Maharashtra",
    about: "300 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "S. N. Brothers, S. No. 305, Dongaripada, Near Classic Company, Vasai- Virar (M.\r\nCorp.), Dist Palghar",
    state: "Maharashtra",
    about: "180 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Saani Enterprises, Gut No. 64, Plot No. 65, Mahal Pimpri, Dist. Aurangabad",
    state: "Maharashtra",
    about: "1200 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Sadab Traders Plot No. 1154, Gat No. 140/2A/1, Village Vilholi, Behind Jain\r\nTemple, Tal & Dist. Nashik - 422010",
    state: "Maharashtra",
    about: "300 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "SAHARA ENTERPRISES GAT N0 65 DEHU ALANDI ROAD , CHIKHALI, TAL.HAVELI\r\nDIST.PUNE - 411062",
    state: "Maharashtra",
    about: "160 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Sahara Traders, Gala No. 1, Ground Floor, Kalyan Road, Temghar, Tal. Bhiwandi, Dist.\r\nThane",
    state: "Maharashtra",
    about: "700 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Sayma E-Waste Solutions, S. No. 323, Hissa no. 3, A Plot No. B-27, Urali Devashi, Tal.\r\nHaveli, Pune",
    state: "Maharashtra",
    about: "335 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Scape E Recycler Private Limited Near Bus Stand, Behind Hotel Chandralok,Shikshak Colony, Purna Dist. Parbhani,Purna\r\n,Parbhani - 431511",
    state: "Maharashtra",
    about: "235 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Shabbir Traders Plot No. P/15 & 16, Sr. No. 119/120/121, Balaji Industrial Park, Behind Hindalco, Vill. Tondre, Tal. Panvel, Dist.\r\nRaigad",
    state: "Maharashtra",
    about: "300 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Shifa Traders, Gut No. 63, Dehu Moshi Road, Kudalwadi, Chikhali, Tal. Mulshi, Dist.\r\nPune",
    state: "Maharashtra",
    about: "300 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Sigma Enterprises, Plot No. 5 & Gut No. 54/0, Adiwali, Tal. Panvel, Raigad",
    state: "Maharashtra",
    about: "350 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "SK E-Waste Disposal, Gat No. 116, Fine Weight Bridge, Jadhavwadi, Chikhali, Tal:\r\nHaveli, Dist: Pune.",
    state: "Maharashtra",
    about: "250 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "SOLAPUR ECON RECYFINE PLOT NO. K-47 MIDC CHINCHOLI, Taluka - MOHOL,\r\nChincholikati, Solapur - 413255",
    state: "Maharashtra",
    about: "750 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Spas Computers Pvt. Ltd. 7 & 12, Hema Industrial Estate, Premises, Cos Ltd.\r\nSarvodaya Nagar, Rajmata Jijai Road, Jogeshwari E",
    state: "Maharashtra",
    about: "500 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Star Envo Recycling (I) Private Limited, Gala No 3, Survey No. 11, Hissa No. 1/1, Choudhary Compound, Wakanpada, Pelhar,\r\nWaliv, Vasai (E), Tal. Vasai, Dist. Palghar",
    state: "Maharashtra",
    about: "250 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Sultan Disposal Stores, S. No. 28/2A/B, Undri, Opp. R Point, Pune Saswad Road,\r\nTal. Haveli, Dist. Pune 411028",
    state: "Maharashtra",
    about: "600 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Suritex Pvt.Ltd. Plot No. B-111, MIDC Industrial Area, Butibori, District - Nagpur.",
    state: "Maharashtra",
    about: "360 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "THE2BROS 70 AS KURLA ANDHERI ROAD,OPP JARIMARI\r\nTEMPLE,Chandivali,Mumbai Suburban - 400072",
    state: "Maharashtra",
    about: "275 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Trekomac Refurbs Pvt. Ltd. Plot No, G-3, Five Star MIDC Kagal Hatkanangale, Tal.\r\nKagal, Dist. Kolhapur",
    state: "Maharashtra",
    about: "400 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Unity Enterprises, Gut No. 1745. Ranjangaon Ganpati, Tal. Shirur, Dist. Pune",
    state: "Maharashtra",
    about: "1200 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Universal Waste Management Gala No. B- 10, D. P. K. Compound, Khairani Road,\r\nSakinaka, Mumbai – 400072 - 400072",
    state: "Maharashtra",
    about: "310 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Vatsala Enterprises, Gut. No. 183-6, Village Rajapur, Tal. Sangamner, Dist. Ahmednagar",
    state: "Maharashtra",
    about: "280 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Vora Computers Pvt. Ltd. 1B, Lara Apartments, Sadhu Vaswani Chowk, Hotel\r\nWoodland Lane, 1/D/3, Tal. & Dist. Pune",
    state: "Maharashtra",
    about: "50 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Wonder Print Technologies Plot No. M-36,\r\nMIDC Ambad, Dist. Nashik",
    state: "Maharashtra",
    about: "300 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "Yasin Scrap, Gut No. 546, Shed No. 1, Jadhav Vasti, Village Wagholi, Tal. Haveli,\r\nDist. Pune",
    state: "Maharashtra",
    about: "200 MTA",
    capacity: "140",
    status: "active"
  },
  {
    name: "M/s.  Unique  Eco  Recycle,  Plot  No.  26,\r\nIndustrial   Area,   Palda,   Indore   (Madhya Pradesh)",
    state: "Madhya Pradesh",
    about: "6000 MTA",
    capacity: "3",
    status: "active"
  },
  {
    name: "M/s.  Moonstar  Enterprises  Pvt.  Ltd.,  Plot No. 24/A,  24/D, 24/A-1, 21/D, 21/E,  21/E-1,\r\nSector-B,  Sanwer  Road,  Industrial  Area Indore (MP)",
    state: "Madhya Pradesh",
    about: "3600 MTA",
    capacity: "3",
    status: "active"
  },
  {
    name: "M/s. Prometheus Recycling Private Limited, 786/4, 799/1, 800,, Dilawar Ka pura,\r\nSusera, Tal: Gird Dist: Gwalior, SIDC",
    state: "Madhya Pradesh",
    about: "4000 MTA",
    capacity: "3",
    status: "active"
  },
  {
    name: "M/s. Sani Clean (P) Ltd., Plot No. 802/947, at-Tangiapada, Niala, Dist-Khurda",
    state: "Orissa",
    about: "3000 MTA",
    capacity: "7",
    status: "active"
  },
  {
    name: "M/s.  Varun  infra  Steel  Pvt.  Ltd.  Plot  No. 1991/3942,    At/P.O.    Brahmani    Tarang,\r\nVedvyas,          Rourkela-769004,         Dist- Sundargarh",
    state: "Orissa",
    about: "730 MTA",
    capacity: "7",
    status: "active"
  },
  {
    name: "M/s.  Jagannath   E-Waste  Recyclers,   At- Pinchuli,    P.O.    Purushottampur,    Dist- Ganjam",
    state: "Orissa",
    about: "500 MTA",
    capacity: "7",
    status: "active"
  },
  {
    name: "M/s.   P   K   Enterprises,   Plot   No.293/525, Khata   No.127/4   At   /P.O.   Kalunga,Dist- Sundargarh",
    state: "Orissa",
    about: "730 MTA",
    capacity: "7",
    status: "active"
  },
  {
    name: "M/s Mirtunjai Udyog(Dismantler), At-AA/2,\r\nCivil       Township,       Rourkela       Distt- Sundargarh",
    state: "Orissa",
    about: "730 MTA",
    capacity: "7",
    status: "active"
  },
  {
    name: "M/s.  Cosmic  Net,   B-25,   Saheed   Nagar, Bhubaneswar,",
    state: "Orissa",
    about: "360 MTA",
    capacity: "7",
    status: "active"
  },
  {
    name: "M/s Ecokart Technology Pvt. Ltd., At/PO/Mouza-Kuradhamala, Daleiput, Dist- Khordha, M-\r\n7008551392",
    state: "Orissa",
    about: "3000 MTA",
    capacity: "7",
    status: "active"
  },
  {
    name: "M/s   Ramky   Enviro   Engineer   Ltd.,   Vill. Nimbuan, Tehsil Dera Bassi, District SAS Nagar.",
    state: "Punjab",
    about: "1200 MTA",
    capacity: "8",
    status: "active"
  },
  {
    name: "M/s   Spreco   Recycling,   D-45,   Industrial Area,     Focal     Point,     Raikot,     District\r\nLudhiana.",
    state: "Punjab",
    about: "240 MTA",
    capacity: "8",
    status: "active"
  },
  {
    name: "M/s  K.J.  Recycler,  C-38,  Sanjay  Gandhi Nagar, Industrial Area, Jalandhar",
    state: "Punjab",
    about: "600 MTA",
    capacity: "8",
    status: "active"
  },
  {
    name: "M/s Black Diamond Cements Pvt. Ltd., (E- Waste  Dismantling  &  Recycling  Facility), Village   Humayunpur,   Nariangarh   Road, Tehsil Dera Bassi, District SAS Nagar",
    state: "Punjab",
    about: "2400 MTA",
    capacity: "8",
    status: "active"
  },
  {
    name: "M/s.Cosmos    Recycling    Grewal    Nagar, Street   No.   2,   VPO   Hambran   Jagroan, Ludhiana",
    state: "Punjab",
    about: "450 MTA",
    capacity: "8",
    status: "active"
  },
  {
    name: "M/s.     Stellar     Recycling     LLP     Village Lakhowal ( H.B.No.190 ), Tehsil & District Ludhiana",
    state: "Punjab",
    about: "3600 MTA",
    capacity: "8",
    status: "active"
  },
  {
    name: "M/s  Kumar  Enterprises,  Malerkotla  Road, village dulladi, teh nabha, Distt. Patial",
    state: "Punjab",
    about: "1002 MTA",
    capacity: "8",
    status: "active"
  },
  {
    name: "M/s. Green Bird Recycling, 223, Hadbast, Vill. Magarh, Kohara Macchiwara Road,\r\nLudhiana",
    state: "Punjab",
    about: "600 MTA",
    capacity: "8",
    status: "active"
  },
  {
    name: "M/s. H.M.E-waste Management G1-226, RIICO Ind.Area, Kehrani Bhiwadi (Extn.)\r\nTijara Distt- Alwar",
    state: "Rajasthan",
    about: "895 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s. Dhruv Techengineers Pvt. Ltd., G- 1209, Rampur mandana, Industrial Area,\r\nBhiwadi, Alwar",
    state: "Rajasthan",
    about: "2575 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s      Greenscape      Eco      Management Pvt.(Unt-II), F-588 & 591 MIA Alwar",
    state: "Rajasthan",
    about: "49170 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s Greenscape Eco Management Pvt Ltd F- 584-585, MIA, Alwar",
    state: "Rajasthan",
    about: "1200 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s  ETCO  E-waste  Recycler  pvt.  ltd,  SB- 23, Shilp Bari Road, 1415 VKI Area, Jaipur",
    state: "Rajasthan",
    about: "1446 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s. Universal E-Waste Recycling, G1-117 (B), RIICO Industrial Area, Alwar",
    state: "Rajasthan",
    about: "450 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s  Green  Leaf  Recycling  Industries,  G- 166-167, West part, RIICO Ind Area Bagru Jaipur",
    state: "Rajasthan",
    about: "1380 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s  Shukla  E-Waste  Processors,  H-309\r\n(B) RIICO Industrial Area, Bhiwadi, Tijara, Alwar.",
    state: "Rajasthan",
    about: "795 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s   Vasoo   Metals,   (Division-III)   G-287, MIA, Alwar",
    state: "Rajasthan",
    about: "822.67 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s. GS International, G1-101, Shri Khatu Shyam Ji Ind. Complex, Ringus, Sikar",
    state: "Rajasthan",
    about: "600 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s.   Adatte   E-Waste   Management   Pvt. Ltd.,   C6/23,   Opposite   to   Post   Office   ,\r\nSafdarganj Development Area, New Delhi",
    state: "Rajasthan",
    about: "1825 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s. Green Recycling Waste Management,\r\nJ-983,  RIICO  Ind.  Area,  Chopanki,  Tijara, Alwar",
    state: "Rajasthan",
    about: "303 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s.  PWL  Ventures,  B137,  Queen  Road, Vidyut  Nagar  B,  Jaipur  (Plot  no.-  F142,\r\nRoad  no.-6,  RIICO  Ind.  Area,  Bindayka, Jaipur)",
    state: "Rajasthan",
    about: "5000 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s. Green India Waste Management, G- 1/565, RIICO Ind. Area, Khuskhera,\r\nTapukaa, Bhiwadi, Alwar",
    state: "Rajasthan",
    about: "1200 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s EPRAGATHI Recycling Pvt. Ltd., P.No. 29, SKS Industrial Area Ringus, Tehsil-\r\nSrimadhopur, Distt- Sikar- 332404",
    state: "Rajasthan",
    about: "2400 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s Hydro Engineers, H1-929, RIICO Industrial Area, Chopanki, Bhiwadi, District-\r\nAlwar",
    state: "Rajasthan",
    about: "450 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s. Urban Metals, E-2118, Ramchandrapura RIICO Industrial area,\r\nSitapura, Tehsil: Sanganer, District-Jaipur",
    state: "Rajasthan",
    about: "480 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s. Fateh Enviro Lab, Khasra No. 1036/14, Industrial Area, Jasol,\r\nBalotra, Barmer 344022",
    state: "Rajasthan",
    about: "350 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s Abaad Developers Private, Limited at G1-747, RIICO INDUSTRIAL AREA,\r\nCHOPANKI, BHIWADI, Alwar Rajasthan, 301019.",
    state: "Rajasthan",
    about: "700 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s Green Web Recycling, H1-865, Industrial Area, Manda-II, Chomu,\r\nJaipur 303702",
    state: "Rajasthan",
    about: "1050 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s Eraw Waste Management LLP, Plot no E-44,  RIICO  Industrial  Area,  Sarekhurd,\r\nTijara, Alwar",
    state: "Rajasthan",
    about: "1690 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s Golden Green Recyclers, G1-11, S.K.S. Industrial Area, Ringus, Sri\r\nMadhopur Ringus, Sikar 332404",
    state: "Rajasthan",
    about: "750 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s. Vinay Traders, F-241-242, RIICO  Ind. Area, Palra, Ajmer",
    state: "Rajasthan",
    about: "2500 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s  GPS  International,  G1-119  Industrial Area   Manda   Phase-I,   Chomu,   Jaipur- 303712",
    state: "Rajasthan",
    about: "900 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s  Greenlet  Recyclers  Private  Limited, Plot           No           G-15-G,           Sotanala Industrial   Area,  Behror,  Tehsil-  Behror,\r\nDistrict-  Alwar",
    state: "Rajasthan",
    about: "1500 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s Marss Recycler Private Limited G-5 Industrial Area Manda, Tehsil-\r\nChomu (26 E-168 Near Meena Krishi Farm Murlipura Scheme Jaipur- 302039)",
    state: "Rajasthan",
    about: "700 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s S.B.J. & Company F-137, Growth Centre, RIICO Industrial Area, Dholpur",
    state: "Rajasthan",
    about: "876 MTA",
    capacity: "27",
    status: "active"
  },
  {
    name: "M/s.   Tritech   Systems,   No.165/3,   Porur, Chennai- 116",
    state: "Tamil Nadu",
    about: "420 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s.  Genbruze  Solutions  Pvt.  ltd.,  S.  F. No. 9.28, 29pt, Athipattu Village, Ambattur\r\nTaluk, Chennai District",
    state: "Tamil Nadu",
    about: "1100 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s.     Ecosible     Recyclers     Pvt     Ltd, No.154A/B,8th   Mahatma   Gandhi   Road, Tass Industrial Estate, Ambattur, Chennai\r\n– 600098.",
    state: "Tamil Nadu",
    about: "6000 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Green Era Recyclers 37, Sivanandha Industries Estate, Dr. M.S. Udhayamurthy\r\nNagar,  Thadagam  Road,  Edayarpalayam, Coimbatore District - 641025",
    state: "Tamil Nadu",
    about: "146 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Green India Recyclers, SF. No. 26/1B, Kovilpalayam    Road,    Soolakal    Village,\r\nCoimbatore District.",
    state: "Tamil Nadu",
    about: "456 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s.       A.       K.       Enterprises,       No:12, Chakarapani St, Velacherry, Chennai-32.",
    state: "Tamil Nadu",
    about: "170 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s.  Shri  Raaam  Recycling,  No.  DP-29, SIDCO     Industrial     Estate,          SIPCOT\r\nIndustrial      Complex,      Gummidipoondi- 601201",
    state: "Tamil Nadu",
    about: "504 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s.  JADG  India  E-Waste  Recyclers  Pvt. Ltd.,   SF   No.   256/1A1,   Kollur   Village, Kilikodi  Post,  Ponneri  Taluk,  Tiruvallur-\r\n601206",
    state: "Tamil Nadu",
    about: "600 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "AER Worldwide india Pvt Ltd, No.774,Elandandheri ,sadayankuppam village, near andar kuppam Check Post, Manali New Town, Chennai – 600103.",
    state: "Tamil Nadu",
    about: "12000 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Abishek Enterprises, SF No. 2G, 2nd Ambattur, Chennai-600098",
    state: "Tamil Nadu",
    about: "6000 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s.    Virogreen    India    Pvt.    Ltd.,    No. 297/1B2,  No.  49,  Pappankuppam  Village, SR Kandigai Road, Gummidipoondi Taluk,\r\nTiruvallur-601201",
    state: "Tamil Nadu",
    about: "15000 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Earth Sense Recycle Private Limited, S.F.No.    247,    Thenmelpakkam    Village, Chengalpattu        Taluk,        Chengalpattu\r\nDistrict.",
    state: "Tamil Nadu",
    about: "4248 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s.    Envirogreen    E    waste    recycling\r\nSolutions, S.F.No. 2134, Plot No. 65, Palur Village, Chengalpattu Taluk & District",
    state: "Tamil Nadu",
    about: "1900 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s.   Leela   Traders.,   Plot   No.   C-15/1,\r\nCMDA    Industrial    Complex    Maraimalai Nagar, Kancheepuram District",
    state: "Tamil Nadu",
    about: "2640 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s.  SEZ  Recycling,  TP-7,  IVth  Avenue, mahindra World City Developers Limited, Industrial         Estate,         SEZ          Area, Thenmelpakkam    Village,    Chengalpattu\r\nTaluk, Kancheepuram District",
    state: "Tamil Nadu",
    about: "1500 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s Trishyiraya Recycling India Pvt. Ltd., Plot       No.A-7,       Phase-I,       MEPZ-SEZ,\r\nTambaram, Chennai-600 045",
    state: "Tamil Nadu",
    about: "3100 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s.  S.  P.  P.  Enterprises,  S.  No.  184-4C, Mambakkam        Village        and        Post Sriperumbudur       Taluk       Kanchipuram\r\nDistrict",
    state: "Tamil Nadu",
    about: "1080 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s.  RBIA  Minerals  and  Metals  Pvt.  Ltd.,\r\nS.   F.   No.   205-1B2A,   Knadur   Village, Sriperumbudur     Taluk,     Kancheepuram District",
    state: "Tamil Nadu",
    about: "1400 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s.  Punithan  Enterprises  Unit   –II,  No. 113/19 part, Rajiv Nagar, Peinjambakkam,\r\nGundu    Perumbedu    Post    SPR    Talu, Kancheepuram Dt- 601301",
    state: "Tamil Nadu",
    about: "300 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s.   K.   P.   P   Enterprises,   No.   535-3C, Santhavellore   Village,   Sunguvarchatram\r\nPost,              Sriperumbudur              Taluk, Kancheepuram District",
    state: "Tamil Nadu",
    about: "1000 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. G S ENTERPRISES S.F NO:254/2A2A,\r\nevalurkuppam     Village,     Sriperumbudur Taluk,Kancheepuram Dist 602105.",
    state: "Tamil Nadu",
    about: "8400 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s.   Enviro   Metals   Recyclers   Private Limited  Pvt  Limited  Aluminium  Division S.No.        104        and        106,        Ezichur Village,Sriperumbudur  Tk,Kancheepuram\r\nDistrict.",
    state: "Tamil Nadu",
    about: "12000 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. World Scrap Recycling Solutions Pvt. Ltd., S. No. 351/7, Beemanthangal Village,\r\nSriperumbudur     Taluk,     Kancheepuram District",
    state: "Tamil Nadu",
    about: "720 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Green E Waste Private Limited, S. F. No.     294/pt,     Ayanambakkam     Village, Poonamallee Taluk, Tiruvallur District.",
    state: "Tamil Nadu",
    about: "422 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s.  Southern  Alloys,  DP  No.  S-105  and 106,   SIDCO   Industrial   Estate,   Kakallur Village Taluk and District",
    state: "Tamil Nadu",
    about: "540 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s.   Micro   E-Waste   Recyclers,   SF   No. 301/3,   Varaganeri   Village,   Trichy   East Taluk, Trichy District.",
    state: "Tamil Nadu",
    about: "900 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. M.  G.  Traders,  No.  86,  Nehru  Street, Teachers   Colony,   Ambattur,   Chennai   - 600053",
    state: "Tamil Nadu",
    about: "600 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Udhaya Traders, No. 242, Tiny Sector Ambattur   Industrial   Estate,   Chennai   – 600058",
    state: "Tamil Nadu",
    about: "84 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s     Victory     Recovery     &     Recycle Technologies India Pvt.Ltd., 672/2, Doubal Dragon  Industrial  Park,  Kannur  Village  & Post Kottaiyur, Thiruvallur, District - Tamil\r\nNadu - 602 108",
    state: "Tamil Nadu",
    about: "100 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. TES AMM Private Limited, Plot No.A- 18,   SIPCOT   Industrial   Growth,   Centre Oragadam,        Panruti        „A‟        Village,\r\nSriperumpudur,     Kanchipuram     District Tamil Nadu – 630 304",
    state: "Tamil Nadu",
    about: "30000 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s    Arockia    Enterprises,    S.F.No.4/1E,\r\nSeevaram   village,   Sholinganallur   taluk, Chennai – 600 097",
    state: "Tamil Nadu",
    about: "216 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s Ascent Urban  Recyclers Pvt Limited, SF      No.62/1B,      2A2,      Padur      Road, Mevalurkuppam   village,   Sriperumbudur taluk,  Kancheepuram  district,  Pin  -  602\r\n105",
    state: "Tamil Nadu",
    about: "400 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s  Blooming  Recyclers,  Plot.  No.  D9/2, SIDCO     Industrial     Estate,     Maraimalai Nagar,  Kizhikaranai  village,  Chengalpattu\r\ndistrict.",
    state: "Tamil Nadu",
    about: "730 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s    E    PROCESS    House    c/o    Bharat Electronics   Limited,   SF   No   3   &   10/1 Nanthambakkam   village,   Alandur   taluk,\r\nChengalpattu district",
    state: "Tamil Nadu",
    about: "435 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s  INAA  Enterprises,  DP  No.  AC-31/24, Thirumudivakkam     village,     Kundrathur taluk, Kancheepuram district",
    state: "Tamil Nadu",
    about: "300 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s      John      Firm      SF      No.144/1C2, Kerekodihalli village, Karimangalam taluk,\r\nDharmapuri district.",
    state: "Tamil Nadu",
    about: "300 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s    KGN    Electronics,    No.48    A,    Dr Ambedkar   College   Road,   Erukkenchery village, Perambur taluk, Chennai district",
    state: "Tamil Nadu",
    about: "250 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s   Ponniamman   Enterprises,   SF   No. 216/3,  Tiruvallur  village,  Tiruvallur  taluk, Tiruvallur district",
    state: "Tamil Nadu",
    about: "12000 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s   R.M   Computers,   Plot   No.229,   9th Street, Ambattur Chennai – 600098",
    state: "Tamil Nadu",
    about: "228 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s  Sai  Sri  Waste  Management  Pvt  Ltd, SF    No    443/1B2,    443/2A,    Padaveedu\r\nvillage,           Kumarapalayam           taluk, Kumarapalayam district",
    state: "Tamil Nadu",
    about: "1680 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s SKV E-Waste Recycling Pvt Ltd, Plot No.154     A&B,     Tass     Industrial     Area, Ambattur      SIDCO      Industrial      Estate,\r\nChennai – 600 098",
    state: "Tamil Nadu",
    about: "560 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s    Tharani    Electronics    Waste,    SF No.381/3pt,   381/2pt,   384/2pt,   384/3   pt,\r\nSarkar  Samakulam  village,  Annur  taluk, Coimbatore district",
    state: "Tamil Nadu",
    about: "207 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s  Earth  Sense  Recycle  Pvt.Ltd.,  Plot No.37,  APIIC  Industrial  park,  Mankal  (V), Maheswaram (M), Rangareddy District.",
    state: "Telangana",
    about: "22775 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s     Z     Enviro     Industries     Pvt.     ltd., Pulimanmidi        (V),        Kandukur        (M) Rangareddy District.",
    state: "Telangana",
    about: "30000 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s Silicon Planet Recycling Pvt. Ltd.,Sy. No.811/A,             Ankireddypally             (V)\r\n&Grampanchayat  Keesara  (M)  ,  Medchal Malkajgiri District",
    state: "Telangana",
    about: "1000 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s. EnviroKare  Recycling  Solutions  Pvt. Ltd.,         Sy.         No.         402,         Raikal (V),      Farooqnagar      (M),      Rangareddy\r\nDistrict.",
    state: "Telangana",
    about: "2549 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s    Shreem    Mythri    Enterprises,    Plot\r\nNo.50,  phase-III,  IDA  Cherlapally,  kapra (M), Medchal-Malkajgiri District.",
    state: "Telangana",
    about: "3700 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s. Elifecycle Management Private Limited, Sy. No. 468, 470, 471 & 472,\r\nTheegapur, Kothur Rangareddy District",
    state: "Telangana",
    about: "18900 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s.   Malpani   Antenna   Electronics   Pvt. Ltd.,     Plot     No.     D4,     Phase-I,     IDA, Pashamailaram,         Patancheru         (M),\r\nSangareddy District",
    state: "Telangana",
    about: "687 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s.  Green  Wave  E-waste  Recycling,  Sy. No.   1880E,   1880EE,   Nandigama   (V&M),\r\nRangareddy District",
    state: "Telangana",
    about: "4680 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s. Pure Earth Recyclers Private Limited, Sy.      No.924,      994,      Rudraram      (V), Patancheruvu (M), Sangareddy District",
    state: "Telangana",
    about: "5050 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s Enviro Collection Centre (Dismantling Unit),  Plot  No.1-185/2/A,  Sy.  NO.298  part,\r\nPhase-I,      IDA      Jeedimetla,      Medchal- Malkajgiri District.",
    state: "Telangana",
    about: "720 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s  Ramky  E-Waste  Recycling  Facility, Hardware Park, kancha, Imarat of Raviryal (v),      Maheswaram      (M),      Rangareddy\r\nDistrict.",
    state: "Telangana",
    about: "7840 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s  Earthbox  Ventures  (p)  Ltd.,  (E-waste Dismantling  Unit),  Sy.  Nos.29,  30,  &  85, Uddemarri  (V),  Shamirpet  (M),  Medchal-\r\nMalkajgiri, District.",
    state: "Telangana",
    about: "3600 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s     Bellus     E     Waste,     Sy.No.4-120, Ramachandra  Puram  (GP),  Kondurg  (M), Rangareddy District.",
    state: "Telangana",
    about: "3600 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s Shreem Mythri Enterprises, Plot No.50, phase-III, IDA Cherlapally, kapra (M),\r\nMedchal-Malkajgiri District.",
    state: "Telangana",
    about: "600 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s.  Earthbox  Recycling  Private  Limited Sy  No   114/1,  plot  no   s-2/12,  Raviryala Grampanchayat,  Maheshwaram  (V  &  M),\r\nRangareddy District",
    state: "Telangana",
    about: "2340 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s TES-AMM India Pvt. Ltd Plot no 79, Sy no    847,    IDA    Medchal,    Medchal    (M), Medchal-Malkajgiri District",
    state: "Telangana",
    about: "1800 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s Kamal Electronics Refurbishing of E- waste Solutions ,Sy No: 227/LU, 227/E1m 227/E2, 227/E/2/1  Atmakur (V)  Sadasivpet\r\n(M), Sangareddu District.",
    state: "Telangana",
    about: "13680 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s.    Chilkuri    Enterprises,    Sy    No.14, Keesara (M), Medchal-Malkajgiri District",
    state: "Telangana",
    about: "540 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s.  Reboot  Resources  Private  Limited, Sy.      No.113      Part,      Patelguda      (V), Ibrahimpatnam (M), Rangareddy District",
    state: "Telangana",
    about: "9468 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s. Green Enviro E Waste Recycling, Sy. No. 729, Pochampally (V), B. Pochampally (M), Yadadri Bhuvanagiri District",
    state: "Telangana",
    about: "8740 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s. Recytronics Waste Solutions LLP, Sy.No.96/Part/C, Patelguda, Mangalpalle (V), Ibrahimpatnam (M), Rangareddy\r\nDistrict",
    state: "Telangana",
    about: "4680 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s. Exclusive PC World, Plot No.30/9, Sy.No.460/2, TSIIC, IDA Mankhal,\r\nMaheshwaram (M), Rangareddy Distric",
    state: "Telangana",
    about: "446 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s. Ali Traders, Sy.No.491/2, Alampally (V),Vikarabad(M), Vikarabad District",
    state: "Telangana",
    about: "720 MTA",
    capacity: "23",
    status: "active"
  },
  {
    name: "M/s. Auctus – E Recycling Solutions Pvt. Ltd.,  F-637,  M.  G.  Road,  Industrial  Area,\r\nGhaziabad",
    state: "UP",
    about: "1800 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s.  Mahaluxmi  metal  Alloys  (India)  Pvt. Ltd., Modinagar, Ghaziabad",
    state: "UP",
    about: "30000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s.  N.K.  Products,  58-59,  M.  G.  Road,\r\nGhaziabad",
    state: "UP",
    about: "9000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s    Bharat    Oil    Co.E-18,    Site    –    IV, Sahibabad, Industrial Area, Ghaziabad",
    state: "UP",
    about: "4000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  Plant  Green  Recycling  Pvt.  Limited, G-129, Phase – I , M.G. Road, Ghaziabad",
    state: "UP",
    about: "1500 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. Rocket Sales, Plot No. 1-12, I/A, M. G. Road, Hapur",
    state: "UP",
    about: "300 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s.  Ariglonton  Information  System  Pvt. Ltd.,   Plot   No   C-13,   Site-4   Sahibabad Industrial Area Ghaziabad",
    state: "UP",
    about: "40000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/S Fiz Trading Company, C55, Sector-B-\r\n3, Trans Delhi Signature City Tronica City, Loni, Ghaziabad",
    state: "UP",
    about: "365 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/S. Tele Supar Electronics India Pvt Ltd,\r\nB-15,  Roop  Nagar  Industrial  Area,  Loni Ghaziabad,201102",
    state: "UP",
    about: "730 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  R.R.  Recycler  Pvt.  Ltd.,  Khasra  No.-\r\n115, M, Vill- Achraunda, Tehsil & District- Meerut",
    state: "UP",
    about: "8000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. 6R Recycling, Plot No-272, MG Road industrial area, Hapur",
    state: "UP",
    about: "12000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s 3R Recycler Pvt Ltd. Unit 2, Plot No. A-61/2,       UPSIDC       Industrial       Area, Sikandrabad,      Bulandshahar,      Buland\r\nShahar- 203202 Uttar Pradesh",
    state: "UP",
    about: "25000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Circularity  Solutions  PrivateLimited  ( M/s. Karo Sambhav Pvt.Ltd., )  Khasra 95-\r\n96,  Village  -  Sikhera,Hazazari  Industrial Area, Modinagar, Ghaziabad",
    state: "UP",
    about: "30000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/S  Ozone  Waste  LLP  Plot  No.-  C-25, Upsidc, M.G. Road, Industrial Area, Hapur",
    state: "UP",
    about: "6000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s.  Arsh  Recycling  Pvt.  Ltd.,  Plot  No. 203, UPSDIC, I/A, M/G. Road, Ghaziabad",
    state: "UP",
    about: "15000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. Auctus Recycling Solutions Pvt. Ltd, Habibpur, Greater Noida",
    state: "UP",
    about: "20000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. Khan Traders, B-5, Site No. 4,   Panki Ind. Area, Kanpur",
    state: "UP",
    about: "7190 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s.  Green  Tech  Recycling,  Khasra  No.\r\n645,     Acchraunds,     Bahdurpur     Road, Partapur, Meerut",
    state: "UP",
    about: "9000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s.    Narora    Atomic    Power    Station, Narora, Bulandshahar",
    state: "UP",
    about: "10 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  Metal  Alloys,  E-46,  Industrial  Area, Ramnagar, Varanasi",
    state: "UP",
    about: "1825 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s   Comwen   Information   Technologies Pvt.Ltd.,  127/35B,  ChakRagunath,  Naini,\r\nAllahabad.",
    state: "UP",
    about: "300 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. Oasia Eco E-Waste Recyclers E-160, Industrial       Area,       Khalilabad,       Sant Kabairnagar.",
    state: "UP",
    about: "3000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. Sims Recycling Solutions Plot No. 1, Udyog Kendrall Ecotech-III, Greater Noida",
    state: "UP",
    about: "1250 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  J.A.O.  E-Waste  Recycling  Co,  Vill-\r\nJaitpur,Distt-Moradabad.",
    state: "UP",
    about: "720 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s.  HIN  Green  E-Waste  Recycling  Co. Vill-Jaitpur, Distt-Moradabad",
    state: "UP",
    about: "750 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s   S.R.   Metcast   India   (P)   Ltd   11.8 Km.Agra Mathura Road, Agra.",
    state: "UP",
    about: "600 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s          K.M.          Metals          Suppliers 9/270,271,Mathura Agra.",
    state: "UP",
    about: "5000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Prakash Metal House 39/223, Karwan Lohamandi, Agra.",
    state: "UP",
    about: "1500 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  Shree MahaveerJi Trading  Company, 30/127, Chippitala, Agra",
    state: "UP",
    about: "375 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s.    E-Waste    Recyclers    India,    E-50, UPSIDC Industrial Area, 98Km Stone, NH- 2, Kosi Kotwan, Mathura",
    state: "UP",
    about: "6000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s   E-Waste   Recyclers   Industries   K40, UPSIDC  Industrial  area,  NH-2  Kosikalan,\r\nMahura",
    state: "UP",
    about: "150 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  Supar  Trading  Company,  Plot  No.-3 Govt.  Industrial  Estate,  Talkatora  Road,\r\nLucknow",
    state: "UP",
    about: "365 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s.  V.  R.  Techno  Enviro  Services  Pvt. Ltd.,  Khasra  No.  440,  Indira  Priyedarshni\r\nWard Jarhra Indira Nagar Lucknow",
    state: "UP",
    about: "365 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  Greenzon  Recycling  Pvt.  Ltd.,  R  30, UPSIDC,   Industrial   Area,   Sikandrabad, Bulandshahar.",
    state: "UP",
    about: "6022 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Sachin Enterprises,   123/751, block-T\r\n74       Pratapganj       Gadariyan       Purwa, Fazalgang, Kanpur",
    state: "UP",
    about: "2500 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  Greeniva  Recycler  Pvt.  ltd.,  Plot  No. G-284, M.G. Road, Industrial Area, Hapur",
    state: "UP",
    about: "780 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  S.  Malik  Traders,  plot  No.93,  94  vill- Budhera jahidpur, Meerut",
    state: "UP",
    about: "365 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  Royal  Faiz  Recycling  (P)  Ltd,  I-22,\r\nI.A.M.G. Road, Hapur",
    state: "UP",
    about: "12000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s 3 C Recycler, F-326, I/A, M. G. Road, Hapur",
    state: "UP",
    about: "3240 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s   Life   E-Recycling   (p)   Ltd.,   F-435,\r\nUPSIDC I/A, M. G. Road, Hapur",
    state: "UP",
    about: "9000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Hind Recycler (p) Ltd., Plot No.F-203,\r\nM.G. Road, Hapur",
    state: "UP",
    about: "9000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s   Hayat   Recycler,   F-53,54   I/A,   M.G. Road, Hapur",
    state: "UP",
    about: "1728 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s B.R.P. Infotech Private Limited, F-394, Phase-1,   M.   G.   Road,   Industrial   Area,",
    state: "UP",
    about: "9000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    state: "UP",
    about: " MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s     Sky     Green     Waste     Recycling,\r\nManagement,     Khasra     No.174,     Alipur Jijmana, Meerut, U.P",
    state: "UP",
    about: "5475 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  Swachh  Bharat  Recycling  Company, Gali No.4, 2083, Saipuram Industrial Area, Delhi Road, Meerut, U.P.",
    state: "UP",
    about: "4800 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s    Rudra    Interprises,    Plot    No.A-96, Sector A-4, Tronica City, Loni, Ghaziabad",
    state: "UP",
    about: "500 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Avgree Recycling Pvt.Ltd. KH No.549,\r\nVill-Tiyala,    Meerut-Bulandshahar    Road, Hapur Bypass, Hapur",
    state: "UP",
    about: "11000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s   Faiz   Recycling,   G-235,   MG   Road,\r\nIndustrial Area, Hapur",
    state: "UP",
    about: "36.67 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s   Malik   Recycling,   25-A,   Anand   Ind. Estate, Mohan Nagar, Ghaziabad.",
    state: "UP",
    about: "10000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s U.W.M. Recycling Pvt Ltd. Plot No.-F- 331, UPSIDC, M.G. road, Ind Area, Hapur.",
    state: "UP",
    about: "12 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s   Safdar   E-Recycling   Pvt   Ltd.   Plot No.H-69, M.G. road, Ind Area, Hapur",
    state: "UP",
    about: "12000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  Horizon  Recycling  Pvt.Ltd.,  Khasra No.35, Kumarhera, 7th km Dehradun road, Saharanpur, U.P.",
    state: "UP",
    about: "12000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  Golden  E  Waste  Recyclers  Pvt.  ltd., Plot No.-12A, Gagol Road, Behind Sophia\r\nSchool, Udyog Puram, Partapur, Meerut",
    state: "UP",
    about: "9600 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  R.D  Recylers  khasara  no-46  village- shakharpur Hapur road Meerut",
    state: "UP",
    about: "300 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s   Earth   Zone   Recycling   Plot   no-11 pargana- Hazipur Hapur road meerut",
    state: "UP",
    about: "2400 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s    Making    India    E-waste    recycling management plot no-50 sector-3 Shatabdi\r\nnagar industrial Area meerut",
    state: "UP",
    about: "1080 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  Indian  Recycler  Khasra  No338  Vill- Wazidpur Kavali Jansath Muzaffarnagar",
    state: "UP",
    about: "3500 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Greentek Reman Pvt Ltd. Plot   No-B- 2/12,Site-B  Inds   Area  Surajpur,  Greater\r\nNoida",
    state: "UP",
    about: "9000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  Clean  Waste  Management.  Plot  No- 131,  Udhyog  kendra  Second,  Ecotech-3,\r\nGreater Noida",
    state: "UP",
    about: "100 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s El green Recycling Pvt ltd.G-33, Sec- 63, Noida",
    state: "UP",
    about: "100 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s.  AIMS  Technologies  Pvt  Ltd.G-256, MG Road Inds area, Hapur",
    state: "UP",
    about: "1500 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Future Web, 48-A, Harthala Inds Area, Kanth Road, Moradabad",
    state: "UP",
    about: "750 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s   Buddha   Industries,   Behind   vision Exports      Faridpur      Sambhal      Road,\r\nMoradabad",
    state: "UP",
    about: "250 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  Latoori  Shah  Traders,Gata  No1396, Bhojpur, Dharampur, Moradabad",
    state: "UP",
    about: "1200 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  Shoeb  Waste  solution,  Gata  No250, Vill-Fazalpur,    Near    Hindoli,    Chadausi, Sambhal",
    state: "UP",
    about: "600 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s     NR     E-Waste     Company,     Gata\r\nNo235,237,245, 250K Vill-Sirsa, Inayatpur, Moradabad",
    state: "UP",
    about: "750 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s   Eco   Trader,   Plot   no.454,   Rooma, Kanpur",
    state: "UP",
    about: "100 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Aseries Envirotek India Pvt, Ltd, Plot no. B-10 Industrial area, Salon, Raebareli.",
    state: "UP",
    about: "3600 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  ATR  Traders  Private  Limited,  G380, M.G.Road,      Industrial      Area,      Hapur\r\nGhaziabad 2400 MT/A",
    state: "UP",
    about: "2400 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  Electronic Waste  India VillKhujnawar\r\nChutmalpur,  Kalasia  Road  Teh.-Behat  , Saharanpur",
    state: "UP",
    about: "9000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Eco Green India, Khasra no.-447, Vill- Ghosipur, Hapur Road, Meerut",
    state: "UP",
    about: "365 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s   S.D.  Recycling   Process   Industries, Khasra   no.-51,   52,   ,   Vill-   Shakarpur,, Hapur Road, Meerut",
    state: "UP",
    about: "4800 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s HIN Green E-waste Recycling (P) Ltd, Khasra  no.-733,737,  Vill.-  Baral,  Partapur, Meerut.",
    state: "UP",
    about: "12000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  J  I  ScrapTraders,  Plot  no.  418/12, Shastrinagar, Meerut",
    state: "UP",
    about: "240 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s   E   Tech   Interprises,   Plot   no.-   E- 26,Phase-I/    G322    Phase-II,    M.G.Road, Industrial Area, Hapur",
    state: "UP",
    about: "2520 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  Habib  Trading  Company,  Khasra  no- 28,   Village-   Alipur,   Jijmana,Pargana   & Tehsil- Meerut",
    state: "UP",
    about: "5400 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s B.R.P. Infotech Private Limited,F- 381, Phase-I, M.G.Road, Industrial Area, Hapur",
    state: "UP",
    about: "6000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  Recology  Recycling  India  Pvt.  Ltd., Khasra  no.-69,  70,71  ,  Vill-Piple  Kheda,, Sargana Sarawa Meerut, Meerut",
    state: "UP",
    about: "13764 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s    Bright    E-Waste    Recycling    India, Village- Ganeshpur, Mawana, Meerut",
    state: "UP",
    about: "3240 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s  Sheetala  Waste  Management  Project Plot   no.-D-26,   Sikandrabad   Indl.   Area, Tehsil-Sikandrabad, Bulandshahar",
    state: "UP",
    about: "3000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Spreco Resource Recyclers, Khasara no.-    235,Vill-Abdulpur,    Block-    Khekra, Baghpat, Meerut- 250101",
    state: "UP",
    about: "3000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s   Hind   Recycling   Pvt.   Ltd.,   G-   460, UPSIDC, Industrial Area M.G.Road, Hapur",
    state: "UP",
    about: "960 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Eco  Fly E-Waste  Recycling  Pvt.  Ltd., Khasara   no-26,   Piplikhera,   Bhamanpur Road, Indl. Area, Meerut",
    state: "UP",
    about: "7800 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s   Green   Earth   E-   Recycling   ,   F-95, UPSIDC,     Industrial      Area,     Gopalpur\r\nSikandrabad, Bulandshahar",
    state: "UP",
    about: "6000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Waste Tech Recycling Company, Plot no     HD-7,     UPSIDC,     Industrial     Area, Sikandrabad, Bulandshahar",
    state: "UP",
    about: "1800 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s   LIMR   Recycling   Pvt.   Ltd.,   G-   256, Industrial Area, M.G.Road, Hapur",
    state: "UP",
    about: "6000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s     Sky     Green     Waste     Recycling Managememt      ,      Khasra      No.-      51,\r\n53,54,66,20,21,    Vill.-    Piplikhera,    Hapur Road, Indl. Area, Meerut",
    state: "UP",
    about: "9000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s   D   M   Recyclers   Vill.-   Phaphunda, Hapur Road, Meerut",
    state: "UP",
    about: "750 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Global Green E-Waste Recycling, Khasra No.- 57, Indl. Area, Udhyogpuram,\r\nPartapur, Meerut",
    state: "UP",
    about: "18000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. Anshul Machinery Job Works Unit-II, Khasra No. -260, Masuri, Dasna, Hapur",
    state: "UP",
    about: "5000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. Shiv Shakti metals Old Name Surya Metal, Khasra No. -545, Vill-Phaphrana, S.\r\nP. Industrial Area, Modi Nagar, Ghaziabad",
    state: "UP",
    about: "963 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. Waste PRO Recycling, Khasra No 35 And 36, Udayrampur, Nangla, Dasna,\r\nTehsil- Dhaulana, Hapur,",
    state: "UP",
    about: "6000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. S F Recycling Pvt Ltd, Plot No. F-4,\r\nM.G. Road, Industrial Area, Hapur.",
    state: "UP",
    about: "960 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. More Bright E Waste Erecycler P. Ltd., C-78, Phase-III, M. G. Road, Indtl Area,\r\nHapur",
    state: "UP",
    about: "4320 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. Green Zone Recycling (P) Ltd., Plot No.\r\n-H. D. -6, UPSIDC Indl. Area, Sikandrabad,\r\nBulandshahr",
    state: "UP",
    about: "3000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. Green Earth Recycler, Plot No. F-557, Industrial Areal, M G Road, Hapur",
    state: "UP",
    about: "720 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. A One E Waste Recycling, Vill. - Khardoni, Shekhupur, Meerut",
    state: "UP",
    about: "301.8 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. Sun E-Wsate Recycling Company F- 163, Industrial Area, Kosi Kotwan, Ext.-1,\r\nKosi Kalan, Mathura.",
    state: "UP",
    about: "1200 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. Ezwaste Recycling, Khasra No. -38, Vill. -Sardhan, Budhana Road, Khatauli,\r\nMuzaffarnagar",
    state: "UP",
    about: "3000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. Sri Balaji, Arazi No. -316/7, Vill.- Kataria, Pargana-Ralhupur, Distt.-Chandauli",
    state: "UP",
    about: "5000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. A Q Recycling, Plot No-F-639, UPSIDC, Industrial Area, M. G. Road, Hapur",
    state: "UP",
    about: "864 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. Rajdhani Recycling P. Ltd., Plot No. F- 416, M. G. Road, Indutrial Area, Hapur",
    state: "UP",
    about: "3600 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. JSD Enterprises, J-78, Site-C, Surajpur, Industrial Area, Greater Noida",
    state: "UP",
    about: "3000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. E-Waste Recyclers India, Unit-3, Khasra No. -266, 110 KM Mile Stone, Tehsil-\r\nChhata, Mathura",
    state: "UP",
    about: "4800 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. E-Waste Recyclers India, E-49, UPSIDC Industrial Area, Kosi Kotwan, Mathura",
    state: "UP",
    about: "1500 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s 2NDS Computer, Plot no J-71, J-72, UPSIDC Industrial area, Kosi Kotwan, Mathura.",
    state: "UP",
    about: "600 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Sanif Insulation,Vill- Kakrala, Pargana- Bhokerheri, opp. Sugar Mill\r\nMorna, Muzarffarnagar-251316",
    state: "UP",
    about: "300 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Green India E-Waste Recycling Khasra no-3, Hapur Road, Vill.-\r\nRuknuddin Urf, Phaphunda, Meerut",
    state: "UP",
    about: "1440 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Ever Green E-Waste Recycling Management,Vill.-Rampur, Tehsil.-\r\nMahmudabad, Distt.- Sitapur",
    state: "UP",
    about: "936 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Era Green E-Waste Recycling Pvt. Ltd., Khasra no-189/2, Plot No.-\r\nB-35/1, Vill.-Kunda, Distt.- Meerut",
    state: "UP",
    about: "9000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s A R Computer Scrap, Plot No.-7, Pillokhari Road near Falak Palace,\r\nMeerut",
    state: "UP",
    about: "6600 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Aksha Recycling & Waste Management Pvt. Ltd.,, Khasra no.-\r\n876,1193-1195, 7.5 K.M. Jansath Road,Vill.- Sher Nagar,\r\nMuzaffarnagar",
    state: "UP",
    about: "15000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Khekra Fabrication & Recycle Industries Pvt. Ltd., Khasra no.-31,\r\nVill- Udairampur Nagla, UPSIDC Asrea, Mussoorie Gulawati Road,\r\nPargan-Dasna, Tehsil-Dhaulana, Hapur-\r\n245301",
    state: "UP",
    about: "1800 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Greenwish E-Waste Recyclers, F- 162, Industrial Area, Kosi Kotwan,\r\nExtn.-1, Kosi Kalan, Mathura",
    state: "UP",
    about: "1200 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s GreenLink Recyclers Pvt. Ltd., Khasra no.-1641, Dasna, Kushilya\r\nRoad, Tehsil- Ghaziabad, distt.- Ghaziabad- 201009",
    state: "UP",
    about: "6000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Cynosure Recycling Private Ltd. Khasara No.-64, Vill.-Peeplikhera, Pargana-Sarawa, Meerut-250002 U.P.",
    state: "UP",
    about: "9000 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Reclaim Enviro Pvt. Ltd., E.-506, Industrial Area, M.G. Road, Hapur",
    state: "UP",
    about: "1236 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Ecotech Recyclers, Khasara No.- 1049,1050.1051, Vill.-Peeplikhera, Pargana-Sarawa, Meerut-",
    state: "UP",
    about: "4440 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/S Recyclico Waste Management, Khasra No169 Green Land Industrial Complex, Gram-Dhakpura Tappa Haweli,Badaun, Up -\r\n243638",
    state: "UP",
    about: "10500 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s WEEE PRO RESource Recovery Solutions Private Limited  F-39 UPSIDC\r\nIndustrial area , Gopalpur , Sikandaradbad,Buland shahar-203001",
    state: "UP",
    about: "1476 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s. 3R Recycler   Plot No. A-61/1, UPSIDC Industrial Area, Sikandrabad,  Bulandshahar, Buland Shahar- 203202 Uttar\r\Pradesh",
    state: "UP",
    about: "6600 MTA",
    capacity: "121",
    status: "active"
  },
  {
    name: "M/s Attero Recycling Pvt. ltd. Kh. No.117, Raipur Industrial Area, Bhagwanpur",
    state: "Uttarakhand",
    about: "144000 MTA",
    capacity: "8",
    status: "active"
  },
  {
    name: "M/s Bharat Oil & Waste Management ltd. Mauja Mukimpur, Laksar, Haridwar",
    state: "Uttarakhand",
    about: "325 MTA",
    capacity: "8",
    status: "active"
  },
  {
    name: "M/s Resource E-Waste Solution Pvt.Ltd. F- 97, Industrial area, Bhadrabad, Haridwar",
    state: "Uttarakhand",
    about: "2343.06 MTA",
    capacity: "8",
    status: "active"
  },
  {
    name: "M/s Anmol Paryavaran Sanrakshan Samiti, Daulatpur Hazaratpur urf, Budhwasahid,\r\nDaulatpur",
    state: "Uttarakhand",
    about: "1200 MTA",
    capacity: "8",
    status: "active"
  },
  {
    name: "M/s. Starto Metal Recycle plant , Kh. No- 314 Kh, village –Mehvar Khurd, Roorkee",
    state: "Uttarakhand",
    about: "1000 MTA",
    capacity: "8",
    status: "active"
  },
  {
    name: "M/s. Nayak Enterprises, Village Dhakia, No. 1, Post Kundeshwari, Tehsil Kashipur, District Udham Singh Nagar, Kashipur,\r\nUttrakhand, 244713, India",
    state: "Uttarakhand",
    about: "1200 MTA",
    capacity: "8",
    status: "active"
  },
  {
    name: "M/s. Root Recycling, Khasra NO. 911, Village Padli Gurjar, Roorkee, Haridwar",
    state: "Uttarakhand",
    about: "2880 MTA",
    capacity: "8",
    status: "active"
  },
  {
    name: "M/s. Asha Enterprises, Khasra No. 438/1, Rawli Mehdood , Hpase-2, Gangotri\r\nEnclave, Haridwar",
    state: "Uttarakhand",
    about: "120 MTA",
    capacity: "8",
    status: "active"
  },
  {
    name: "M/s J.S. Pigments Pvt. ltd, Vill.+ P.O.-Jarua, P.S.-Polba, Hoogly-712138",
    state: "West Bengal",
    about: "600 MTA",
    capacity: "5",
    status: "active"
  },
  {
    name: "M/s Lubrina Recycling Pvt. ltd., P.O.\r\nBakrahat, P.S. Bishnupur, Distt.-24 Pgs(S), Pin-743377.",
    state: "West Bengal",
    about: "1080 MTA",
    capacity: "5",
    status: "active"
  },
  {
    name: "M/s. P. U. Steel and Electro Process pvt. Ltd., Ruiya Industrial complex P.O. Patuliar PS-Khadar Distt. 24,  PGS (N), West Bengal -\r\n750119",
    state: "West Bengal",
    about: "180 MTA",
    capacity: "5",
    status: "active"
  },
  {
    name: "M/s Old N Furniture 323, K.P. Mondal Road, PO & PSBudge Budge, Dist-24 PGS(S),\r\nPin-700137",
    state: "West Bengal",
    about: "180 MTA",
    capacity: "5",
    status: "active"
  },
  {
    name: "M/s. Bhanu Metal Industries, Vill. Khamar,\r\nP.O. -Rajarhat, P.S.-Rajarhat, lDist. 24, PGS\r\n(N)-700135",
    state: "West Bengal",
    about: "600 MTA",
    capacity: "5",
    status: "active"
  },






  {
    name: "M/s Shunty Disposal Store, Manmohan Nagar, G.T Road, Ambala city",
    state: "Haryana",
    about: "900 MTA",
    capacity: "42",
    status: "active"
  },
  {
    name: "M/s. Green Wealth Solutions Pvt. Ltd. Plot No. 109, IE,\r\nKutana, HSIIDC, Hissar Road, Rohtak",
    state: "Haryana",
    about: "690 MTA",
    capacity: "42",
    status: "active"
  },


  {
    name: "M/s. Group Ten Plus, H. No. 8/5, Abreovaddo , Saligao, Bardez, Goa",
    state: "Goa",
    about: "50 MTA",
    capacity: "2",
    status: "active"
  },
];

const VendorList = () => {

  const [selectedOption, setSelectedOption] = useState("Assam");






  return (
    <div className={classes.vendorList}>
      <h1 className={classes.heading}>Vendor List</h1>

      <div className={classes.vendorStats}>
        <div className={classes.statBox}>
          <div className={classes.box1}>
            <h1 className={classes.headingStat}>Total Vendors</h1>
            <h1>2019</h1>
          </div>
          <div className={classes.box2}>
            <BiUpArrowAlt />
            <p className={classes.percentage}>60%</p>
          </div>
        </div>
        <div className={classes.statBox}>
          <div className={classes.box1}>
            <h1 className={classes.headingStat}>Active Vendors</h1>
            <h1>1000</h1>
          </div>
          <div className={classes.box2}>
            <BiUpArrowAlt />
            <p className={classes.percentage}>60%</p>
          </div>
        </div>
      </div>

      <div className={classes.filterContainer}>
        <p>Search By States : </p>
        <div>
          <select className={classes.selectForm} value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
            <option value="Assam">Assam</option>
            <option value="Arunachal">Arunachal</option>
            <option value="Goa">Goa</option>
            <option value="Haryana">Haryana</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Delhi">Delhi</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu & Kashmir">Jammu & Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Orissa">Orissa</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="UP">UP</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            </select>
        </div>
      </div>


      {/* list : { vendor, state, about, capacity, status} */}
      <div className={classes.table}>
        <div className={classes.tableHeading}>
          <p className={classes.name}>Vendor Name</p>
          <p className={classes.state}>State</p>
          <p className={classes.about}>about!</p>
          <p className={classes.capacity}>capacity</p>
          <p className={classes.status}>Status</p>
        </div>

        {data.map((data, index) => {
          if (data.state === selectedOption) {
            return (
              <div key={index} className={classes.tableContent}>
                <p className={classes.name}>{data.name}</p>
                <p className={classes.state}>{data.state}</p>
                <p className={classes.about}>{data.about}</p>
                <p className={classes.capacity}>{data.capacity}</p>
                <p className={classes.status}>{data.status}</p>
              </div>
            )
          }
        })}
      </div>


    </div>
  )
}

export default VendorList