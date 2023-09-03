declare module 'react-native-ico-flags' {
    import { ReactNode } from 'react';

    interface IconProps {
      name: string;
      color: string;
      size: number;
    }

    const Icon: (props: IconProps) => ReactNode;

    export { iconNames };
    export default Icon;
}

