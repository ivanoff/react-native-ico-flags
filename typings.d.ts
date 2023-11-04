declare module 'react-native-ico-flags' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'ethiopia' |
      'oman' |
      'tanzania' |
      'slovenia' |
      'puerto-rico' |
      'mozambique' |
      'iraq' |
      'lebanon' |
      'uganda' |
      'nigeria' |
      'italy' |
      'malta' |
      'tunisia' |
      'nicaragua' |
      'el-salvador' |
      'zambia' |
      'wales' |
      'dominican-republic' |
      'qatar' |
      'namibia' |
      'mauritius' |
      'european-union' |
      'luxembourg' |
      'hawaii' |
      'lithuania' |
      'jamaica' |
      'honduras' |
      'myanmar' |
      'kenya' |
      'cyprus' |
      'pakistan' |
      'latvia' |
      'japan' |
      'kazakhstan' |
      'serbia' |
      'scotland' |
      'north-korea' |
      'uruguay' |
      'syria' |
      'guatemala' |
      'iceland' |
      'jordan' |
      'monaco' |
      'spain' |
      'slovakia' |
      'united-nations' |
      'panama' |
      'new-zealand' |
      'ecuador' |
      'romania' |
      'chile' |
      'finland' |
      'hungary' |
      'belgium' |
      'south-korea' |
      'malaysia' |
      'venezuela' |
      'norway' |
      'saudi-arabia' |
      'israel' |
      'czech-republic' |
      'colombia' |
      'iran' |
      'argentina' |
      'ukraine' |
      'germany' |
      'hong-kong' |
      'united-arab-emirates' |
      'laos' |
      'ireland' |
      'greece' |
      'denmark' |
      'sweden' |
      'peru' |
      'south-africa' |
      'philippines' |
      'france' |
      'indonesia' |
      'egypt' |
      'taiwan' |
      'cook-islands' |
      'cocos-island' |
      'christmas-island' |
      'ceuta' |
      'american-samoa' |
      'morocco' |
      'anguilla' |
      'corsica' |
      'canary-islands' |
      'comoros' |
      'central-african-republic' |
      'cayman-islands' |
      'british-indian-ocean-territory' |
      'bhutan' |
      'chad' |
      'cape-verde' |
      'switzerland' |
      'benin' |
      'aruba' |
      'balearic-islands' |
      'andorra' |
      'burundi' |
      'antigua-and-barbuda' |
      'aland-islands' |
      'cameroon' |
      'brunei' |
      'poland' |
      'bonaire' |
      'belarus' |
      'barbados' |
      'british-virgin-islands' |
      'bosnia-and-herzegovina' |
      'bermuda' |
      'belize' |
      'bahrain' |
      'albania' |
      'burkina-faso' |
      'turkey' |
      'basque-country' |
      'armenia' |
      'afghanistan' |
      'british-columbia' |
      'angola' |
      'azerbaijan' |
      'algeria' |
      'botswana' |
      'bangladesh' |
      'cuba' |
      'australia' |
      'costa-rica' |
      'cambodia' |
      'bolivia' |
      'croatia' |
      'bulgaria' |
      'galapagos-islands' |
      'martinique' |
      'tonga' |
      'st-lucia' |
      'rapa-nui' |
      'singapore' |
      'palau' |
      'niue' |
      'macao' |
      'fiji' |
      'faroe-islands' |
      'dominica' |
      'vanuatu' |
      'sierra-leone' |
      'seychelles' |
      'kosovo' |
      'england' |
      'united-states-of-america' |
      'guinea' |
      'orkney-islands' |
      'turks-and-caicos' |
      'transnistria' |
      'tokelau' |
      'gambia' |
      'st-vincent-and-the-grenadines' |
      'south-sudan' |
      'somaliland' |
      'solomon-islands' |
      'vietnam' |
      'sint-maarten' |
      'sint-eustatius' |
      'saint-kitts-and-nevis' |
      'saba-island' |
      'pitcairn-islands' |
      'palestine' |
      'ossetia' |
      'northern-marianas-islands' |
      'nauru' |
      'portugal' |
      'montserrat' |
      'melilla' |
      'mauritania' |
      'kuwait' |
      'guernsey' |
      'guam' |
      'grenada' |
      'greenland' |
      'thailand' |
      'gibraltar' |
      'gabon' |
      'falkland-islands' |
      'virgin-islands' |
      'austria' |
      'vatican-city' |
      'tubalu' |
      'turkmenistan' |
      'togo' |
      'bahamas' |
      'netherlands' |
      'azores-islands' |
      'suriname' |
      'somalia' |
      'sicily' |
      'sardinia' |
      'sao-tome-and-principe' |
      'norfolk-island' |
      'niger' |
      'micronesia' |
      'marshall-island' |
      'canada' |
      'mali' |
      'kyrgyzstan' |
      'guinea-bissau' |
      'eritrea' |
      'djibouti' |
      'curacao' |
      'st-barts' |
      'san-marino' |
      'northen-cyprus' |
      'liechtenstein' |
      'india' |
      'liberia' |
      'yemen' |
      'uzbekistn' |
      'sudan' |
      'sahrawi-arab-democratic-republic' |
      'republic-of-macedonia' |
      'otan' |
      'libya' |
      'east-timor' |
      'tibet' |
      'russia' |
      'papua-new-guinea' |
      'montenegro' |
      'moldova' |
      'maldives' |
      'madeira' |
      'french-polynesia' |
      'trinidad-and-tobago' |
      'tajikistan' |
      'sri-lanka' |
      'mexico' |
      'republic-of-the-congo' |
      'equatorial-guinea' |
      'zimbabwe' |
      'rwanda' |
      'lesotho' |
      'ivory-coast' |
      'isle-of-man' |
      'haiti' |
      'samoa' |
      'nepal' |
      'brazil' |
      'mongolia' |
      'malawi' |
      'madagascar' |
      'jersey' |
      'ghana' |
      'georgia' |
      'estonia' |
      'democratic-republic-of-congo' |
      'senegal' |
      'paraguay' |
      'china' |
      'united-kingdom';

    type iconColors = '#0052B4' |
      '#2E52B2' |
      '#333333' |
      '#338AF3' |
      '#496E2D' |
      '#4A1F63' |
      '#6DA544' |
      '#751A46' |
      '#786145' |
      '#818085' |
      '#91DC5A' |
      '#A2001D' |
      '#ACABB1' |
      '#BDBCC1' |
      '#D80027' |
      '#DEDDE0' |
      '#F0F0F0' |
      '#F3F3F3' |
      '#FCFCFC' |
      '#FF9811' |
      '#FFDA44' |
      '#FFEACF' |
      '#FFFFFF';

    type backgroundType = 'circle' | 'rect' | 'button';

    type colorsType = Record<iconColors, string>;

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      colors: colorsType;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      colors: colorsType;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
