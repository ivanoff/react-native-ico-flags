declare module 'react-native-ico-flags' {
    import { ReactNode } from 'react';
    import { SvgProps } from 'react-native-svg';

    type AdditionalProps = {
      onError?: (error: Error) => void;
      onLoad?: () => void;
      fallback?: ReactNode;
    };

    type iconNames = 'england' |
      'namibia' |
      'burkina-faso' |
      'senegal' |
      'suriname' |
      'australia' |
      'mozambique' |
      'grenada' |
      'samoa' |
      'ceuta' |
      'transnistria' |
      'poland' |
      'indonesia' |
      'hungary' |
      'luxembourg' |
      'south-korea' |
      'anguilla' |
      'tonga' |
      'otan' |
      'paraguay' |
      'papua-new-guinea' |
      'sardinia' |
      'austria' |
      'palau' |
      'russia' |
      'botswana' |
      'mali' |
      'rwanda' |
      'east-timor' |
      'azores-islands' |
      'cameroon' |
      'norfolk-island' |
      'madeira' |
      'mauritius' |
      'north-korea' |
      'uganda' |
      'thailand' |
      'south-sudan' |
      'turkey' |
      'moldova' |
      'jordan' |
      'uzbekistn' |
      'iceland' |
      'nigeria' |
      'albania' |
      'philippines' |
      'european-union' |
      'turks-and-caicos' |
      'brunei' |
      'yemen' |
      'lithuania' |
      'argentina' |
      'solomon-islands' |
      'cuba' |
      'algeria' |
      'norway' |
      'georgia' |
      'kuwait' |
      'nauru' |
      'vatican-city' |
      'faroe-islands' |
      'niue' |
      'bermuda' |
      'central-african-republic' |
      'galapagos-islands' |
      'venezuela' |
      'latvia' |
      'lebanon' |
      'guatemala' |
      'greece' |
      'nepal' |
      'united-nations' |
      'zambia' |
      'slovenia' |
      'marshall-island' |
      'afghanistan' |
      'ethiopia' |
      'british-columbia' |
      'aruba' |
      'peru' |
      'sweden' |
      'tanzania' |
      'gabon' |
      'ivory-coast' |
      'chile' |
      'saint-kitts-and-nevis' |
      'ukraine' |
      'comoros' |
      'tajikistan' |
      'trinidad-and-tobago' |
      'palestine' |
      'belize' |
      'bosnia-and-herzegovina' |
      'estonia' |
      'orkney-islands' |
      'rapa-nui' |
      'romania' |
      'switzerland' |
      'israel' |
      'singapore' |
      'panama' |
      'kazakhstan' |
      'virgin-islands' |
      'tokelau' |
      'bhutan' |
      'sudan' |
      'melilla' |
      'republic-of-macedonia' |
      'vietnam' |
      'cayman-islands' |
      'bolivia' |
      'cambodia' |
      'malaysia' |
      'armenia' |
      'france' |
      'myanmar' |
      'sint-eustatius' |
      'equatorial-guinea' |
      'haiti' |
      'djibouti' |
      'ecuador' |
      'denmark' |
      'ireland' |
      'morocco' |
      'tunisia' |
      'cook-islands' |
      'malawi' |
      'liberia' |
      'corsica' |
      'azerbaijan' |
      'sao-tome-and-principe' |
      'sahrawi-arab-democratic-republic' |
      'barbados' |
      'fiji' |
      'united-kingdom' |
      'angola' |
      'japan' |
      'republic-of-the-congo' |
      'sicily' |
      'egypt' |
      'isle-of-man' |
      'vanuatu' |
      'kyrgyzstan' |
      'brazil' |
      'colombia' |
      'montenegro' |
      'northern-marianas-islands' |
      'bangladesh' |
      'czech-republic' |
      'martinique' |
      'greenland' |
      'united-states-of-america' |
      'jamaica' |
      'el-salvador' |
      'bahamas' |
      'british-indian-ocean-territory' |
      'kosovo' |
      'pitcairn-islands' |
      'basque-country' |
      'falkland-islands' |
      'oman' |
      'malta' |
      'syria' |
      'antigua-and-barbuda' |
      'finland' |
      'spain' |
      'jersey' |
      'scotland' |
      'croatia' |
      'tibet' |
      'canary-islands' |
      'guernsey' |
      'mauritania' |
      'bahrain' |
      'netherlands' |
      'sierra-leone' |
      'dominican-republic' |
      'aland-islands' |
      'maldives' |
      'niger' |
      'curacao' |
      'china' |
      'mexico' |
      'sri-lanka' |
      'ghana' |
      'benin' |
      'new-zealand' |
      'zimbabwe' |
      'costa-rica' |
      'nicaragua' |
      'andorra' |
      'tubalu' |
      'taiwan' |
      'british-virgin-islands' |
      'french-polynesia' |
      'gibraltar' |
      'st-barts' |
      'bonaire' |
      'cocos-island' |
      'cape-verde' |
      'turkmenistan' |
      'democratic-republic-of-congo' |
      'qatar' |
      'lesotho' |
      'hawaii' |
      'christmas-island' |
      'chad' |
      'liechtenstein' |
      'libya' |
      'togo' |
      'montserrat' |
      'pakistan' |
      'mongolia' |
      'balearic-islands' |
      'st-lucia' |
      'eritrea' |
      'burundi' |
      'belgium' |
      'macao' |
      'ossetia' |
      'northen-cyprus' |
      'cyprus' |
      'guam' |
      'puerto-rico' |
      'gambia' |
      'dominica' |
      'india' |
      'uruguay' |
      'bulgaria' |
      'micronesia' |
      'madagascar' |
      'san-marino' |
      'serbia' |
      'monaco' |
      'iran' |
      'germany' |
      'somalia' |
      'saba-island' |
      'italy' |
      'south-africa' |
      'portugal' |
      'laos' |
      'canada' |
      'kenya' |
      'sint-maarten' |
      'iraq' |
      'united-arab-emirates' |
      'somaliland' |
      'honduras' |
      'belarus' |
      'seychelles' |
      'american-samoa' |
      'hong-kong' |
      'wales' |
      'saudi-arabia' |
      'guinea-bissau' |
      'slovakia' |
      'guinea' |
      'st-vincent-and-the-grenadines';

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
      colors?: colorsType;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
